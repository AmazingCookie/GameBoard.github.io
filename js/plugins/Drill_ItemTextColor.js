//=============================================================================
// Drill_ItemTextColor.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        主菜单 - 物品+技能文本颜色
 * @author Drill_up
 * 
 * @param 颜色配置
 * @type text[]
 * @desc 自定义你的配置颜色，可以无限添加。
 * @default ["#FF4444","#FF784C","#FFFF40","#80FF80","#98F5FF","#40C0F0","#8080FF","#FF69B4","#8B4C39","#BEBEBE","#797979"]
 * 
 * @param MOG-技能浮动框是否变色
 * @type boolean
 * @on 变色
 * @off 不变色
 * @desc true - 变色，false - 不变色，技能浮动框插件中的文本也变色。
 * @default true
 *
 * @help  
 * =============================================================================
 * +++ Drill_ItemTextColor +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 根据 物品/装备/技能 中的标签注释，改变文本颜色。只此一个单独的功能。
 * ★★必须放在 各菜单界面、菜单插件 的前面★★
 * ★★必须放在插件 MOG_ActionName招式名浮动框 的后面★★
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件：
 * 在要修改颜色的装备或者物品下，添加注释即可：
 *
 * <颜色:1>
 * <颜色:#FF4444>
 *
 * 颜色后面的数字1对应你配置中的第1个颜色。你也可以直接贴颜色代码。
 *
 * -----------------------------------------------------------------------------
 * ----关于颜色：
 * 默认配置是：
 *  #FF4444 赤   <颜色:1>
 *  #FF784C 橙   <颜色:2>
 *  #FFFF40 黄   <颜色:3>
 *  #80FF80 绿   <颜色:4>
 *  #98F5FF 青   <颜色:5>
 *  #40C0F0 蓝   <颜色:6>
 *  #8080FF 紫   <颜色:7>
 *  #FF69B4 粉   <颜色:8>
 *  #8B4C39 棕   <颜色:9>
 *  #BEBEBE 亮灰 <颜色:10>
 *  #797979 暗灰 <颜色:11>
 *
 * 如果你想配置更完美的颜色，推荐去这个网址找到你想要的颜色代码：
 * http://tool.oschina.net/commons?type=3
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 使得招式浮动框中的颜色也会变化。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		【该插件没有存储数据，全局和局部变量混用】
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_ItemTextColor = true;
　　var DrillUp = DrillUp || {}; 

    DrillUp.parameters = PluginManager.parameters('Drill_ItemTextColor');
    DrillUp.item_color_mog_action = String(DrillUp.parameters['MOG-技能浮动框是否变色'] || "true") === "true";
	if(DrillUp.parameters['颜色配置'] != "" ){
		DrillUp.color_conf = JSON.parse(DrillUp.parameters['颜色配置']);
	}else{
		DrillUp.color_conf = ["#FF4444","#FF784C","#FFFF40","#80FF80","#98F5FF","#40C0F0","#8080FF","#FF69B4","#8B4C39","#BEBEBE","#797979"];
	}

//=============================================================================
// ** 覆写函数
//=============================================================================

var _Window_Base_drawItemName = Window_Base.prototype.drawItemName;
Window_Base.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
		var color = String(item.meta['颜色'] || "");
		if(color !== ""){
			if( color.slice(0,1) === "#" ){
				this.changeTextColor(color);
			}else{
				this.changeTextColor(DrillUp.color_conf[ Number(color) -1 ]);
			}
		}else{
			this.resetTextColor();
		}
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
		this.resetTextColor();
    }
}

//=============================================================================
// ** 与mog技能浮动框/气泡框相适应
//=============================================================================

if(SpriteSkillName){
	var _mog_ActionName_refreshSkillName = SpriteSkillName.prototype.refreshSkillName;
	SpriteSkillName.prototype.refreshSkillName = function() {
		
		if(Imported.MOG_ActionName && DrillUp.item_color_mog_action){
			if( this.item() ){
				var note = String(this.item().note);
				var re_color = /<颜色:([^<>]*?)>/; 				//正则获取（返回数组，第二个为匹配内容）
				var color = (note.match(re_color)) || [];
				if(color != "" && color != [] ){
					if( color[1].slice(0,1) === "#" ){
						this._name.bitmap.textColor = color;
					}else{
						this._name.bitmap.textColor = DrillUp.color_conf[ Number(color[1]) -1 ];
					}
				}else{
					this._name.bitmap.textColor = "#ffffff";
				}
			}
			_mog_ActionName_refreshSkillName.call(this);
			this._name.bitmap.textColor = "#ffffff";
		}else{
			_mog_ActionName_refreshSkillName.call(this);
		}
	};
}
