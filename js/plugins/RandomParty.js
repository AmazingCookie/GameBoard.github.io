//=============================================
// RandomParty.js
// Version: 1.4
//=============================================
/*:
 * @plugindesc 队友随机跟随 1.4
 * @author 江湖梦网 Fanzi
 *
 * @param  是否穿透
 * @desc 设置队友穿透状态，true可穿透，false不穿透
 * @default true
 *
 * @param  队友速度
 * @desc 队友移动速度放慢倍数，可以是小数
 * @default 3
 *
 * @param  漫步频度
 * @desc 队友原地踏步的机率，可以是小数
 * @default 3
 *
 * @param  远程传送
 * @desc 队友远离队长距离时，自动传送到队长身边
 * @default 6
 *
 * @help
 * 帮助的信息
 * 插件功能是让队友们在地图上随机走动，当与主角距离达到3格时就靠近主角
 * 不再像贪食蛇一样的队友走动，当然关闭队友跟随队友也就消失。
 * 队长行走时队友快速跟随，队长停步时队友围绕队长自由漫步，
 * 队友漫步速度与踏步频率可通过参数自主调节。
 *                     更多优秀插件请关注 江湖梦网 bbs.jhmeng.cn
 */

var Imported = Imported || {};
Imported.RandomParty = 1.4;

var RandomParty = RandomParty || {};
RandomParty.Parameters = PluginManager.parameters('RandomParty');
RandomParty.Param = RandomParty.Param || {};

RandomParty.Param.SetThrough = RandomParty.Parameters['是否穿透'].toLowerCase() == 'true';
RandomParty.Param.MoveSpeed = parseInt(RandomParty.Parameters['队友速度'] || 1);
RandomParty.Param.StandRate = parseInt(RandomParty.Parameters['漫步频度'] || 2);
RandomParty.Param.Faraway = parseInt(RandomParty.Parameters['远程传送'] || 6);

//-----------------------------------------------------------------------------
// Game_Follower
//-----------------------------------------------------------------------------

function Game_Follower() {
    this.initialize.apply(this, arguments);
}

Game_Follower.prototype = Object.create(Game_Character.prototype);
Game_Follower.prototype.constructor = Game_Follower;

Game_Follower.prototype.initialize = function(memberIndex) {
    Game_Character.prototype.initialize.call(this);
    this._memberIndex = memberIndex;
    this.setTransparent($dataSystem.optTransparent);
    this.setThrough(RandomParty.Param.SetThrough);
};

Game_Follower.prototype.refresh = function() {
    var characterName = this.isVisible() ? this.actor().characterName() : '';
    var characterIndex = this.isVisible() ? this.actor().characterIndex() : 0;
    this.setImage(characterName, characterIndex);
};

Game_Follower.prototype.actor = function() {
    return $gameParty.battleMembers()[this._memberIndex];
};

Game_Follower.prototype.isVisible = function() {
    return this.actor() && $gamePlayer.followers().isVisible();
};

Game_Follower.prototype.update = function() {
    Game_Character.prototype.update.call(this);
    this.setMoveSpeed($gamePlayer.realMoveSpeed());
    this.setOpacity($gamePlayer.opacity());
    this.setBlendMode($gamePlayer.blendMode());
    this.setWalkAnime($gamePlayer.hasWalkAnime());
    this.setStepAnime($gamePlayer.hasStepAnime());
    this.setDirectionFix($gamePlayer.isDirectionFixed());
    this.setTransparent($gamePlayer.isTransparent());
};

Game_Follower.prototype.chaseCharacter = function(character) {
    var sx = this.deltaXFrom(character.x);
    var sy = this.deltaYFrom(character.y);
    if (sx < -RandomParty.Param.Faraway || sx > RandomParty.Param.Faraway) {
        this.locate($gamePlayer.x, $gamePlayer.y);
    } else if (sy < -RandomParty.Param.Faraway || sy > RandomParty.Param.Faraway) {
        this.locate($gamePlayer.x, $gamePlayer.y);
    } else if (sx < -1 || sx > 1) {
        this.moveStraight(sx > 0 ? 4 : 6);
    } else if (sy < -1 || sy > 1) {
        this.moveStraight(sy > 0 ? 8 : 2);
    }
    this.setDirection(character.direction)
    this.setMoveSpeed($gamePlayer.realMoveSpeed());
};

//-----------------------------------------------------------------------------
// Game_Followers
//-----------------------------------------------------------------------------

function Game_Followers() {
    this.initialize.apply(this, arguments);
}

Game_Followers.prototype.initialize = function() {
    this._visible = $dataSystem.optFollowers;
    this._gathering = false;
    this._data = [];
    for (var i = 1; i < $gameParty.maxBattleMembers(); i++) {
        this._data.push(new Game_Follower(i));
    }
};

Game_Followers.prototype.isVisible = function() {
    return this._visible;
};

Game_Followers.prototype.show = function() {
    this._visible = true;
};

Game_Followers.prototype.hide = function() {
    this._visible = false;
};

Game_Followers.prototype.follower = function(index) {
    return this._data[index];
};

Game_Followers.prototype.forEach = function(callback, thisObject) {
    this._data.forEach(callback, thisObject);
};

Game_Followers.prototype.reverseEach = function(callback, thisObject) {
    this._data.reverse();
    this._data.forEach(callback, thisObject);
    this._data.reverse();
};

Game_Followers.prototype.refresh = function() {
    this.forEach(function(follower) {
        return follower.refresh();
    }, this);
};

Game_Followers.prototype.update = function() {
    if (this.areGathering()) {
        if (!this.areMoving()) {
            this.updateMove();
        }
        if (this.areGathered()) {
            this._gathering = false;
        }
    }
    this.forEach(function(follower) {
        follower.update();
    }, this);
    if (this.areStand()) this.updateMove();
};

Game_Followers.prototype.updateMove = function() {
    for (var i = this._data.length - 1; i >= 0; i--) {
        this._data[i].chaseCharacter($gamePlayer);
    }
};

Game_Followers.prototype.jumpAll = function() {
    if ($gamePlayer.isJumping()) {
        for (var i = 0; i < this._data.length; i++) {
            var follower = this._data[i];
            var sx = $gamePlayer.deltaXFrom(follower.x);
            var sy = $gamePlayer.deltaYFrom(follower.y);
            follower.jump(sx, sy);
        }
    }
};

Game_Followers.prototype.synchronize = function(x, y, d) {
    this.forEach(function(follower) {
        follower.locate(x, y);
        follower.setDirection(d);
    }, this);
};

Game_Followers.prototype.gather = function() {
    this._gathering = true;
};

Game_Followers.prototype.areGathering = function() {
    return this._gathering;
};

Game_Followers.prototype.visibleFollowers = function() {
    return this._data.filter(function(follower) {
        return follower.isVisible();
    }, this);
};

Game_Followers.prototype.areMoving = function() {
    return this.visibleFollowers().some(function(follower) {
        return follower.isMoving();
    }, this);
};

Game_Followers.prototype.areStand = function() {
    return this.visibleFollowers().every(function(follower) {
        return !follower.isMoving();
    }, this);
};

Game_Followers.prototype.areGathered = function() {
    return this.visibleFollowers().every(function(follower) {
        return !follower.isMoving() && follower.pos($gamePlayer.x, $gamePlayer.y);
    }, this);
};

Game_Followers.prototype.isSomeoneCollided = function(x, y) {
    return this.visibleFollowers().some(function(follower) {
        return follower.pos(x, y);
    }, this);
};
