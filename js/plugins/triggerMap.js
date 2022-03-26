//=============================================================================
// triggerMap.js
//=============================================================================
/*:
 * @plugindesc 按M触发地图事件。
 * @author 快乐大锤
 *
 * @help 开关：100
 */

(function(){

var map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {



  map_update.call(this);
  if(Input.isPressed('map') == true)
     {
         $gameSwitches.setValue(100,true);
     }
   else
   {

    $gameSwitches.setValue(100,false);
   }

};



})();
