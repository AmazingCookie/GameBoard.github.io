//=============================================================================
// Drill_MenuCircle.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        主菜单 - 多层菜单魔法圈
 * @author Drill_up
 *
 * @help
 * =============================================================================
 * +++ Drill_MenuCircle +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以在任意菜单中放置魔法圈，只要关键字对上。
 * 多个魔法圈可以设置在同一个菜单里面。
 * ★★必须放在 各菜单界面、菜单插件 的前面★★
 * ★★自带背景的菜单插件可能不起作用，因为那个插件自己设置了底图★★
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有menus文件夹！（img/menus）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 魔法圈1 资源-魔法圈
 * 魔法圈2 资源-魔法圈
 * 魔法圈3 资源-魔法圈
 * ……
 *
 * 你可以在同一个菜单里面加入非常多的不同种类的魔法圈。
 *
 * -----------------------------------------------------------------------------
 * ----关于如何识别自定义关键字
 * 一般查看yep菜单的第一个设置参数名，比如：
 * YEP物品合成第一个设置参数名是：Synthesis Command，那么关键字为Synthesis。
 * YEP任务系统第一个设置参数名是：Quest Command，那么关键字为Quest。
 *
 * Lagomoro（小优）的菜单关键字是：Lagomoro_Mission
 *
 * -----------------------------------------------------------------------------
 * ----界面与魔法圈关系表
 * 
 * 可设置   关键字            关系界面
 *  √       Menu             （主菜单界面） 
 *  √       Item             （道具界面） 
 *  √       Skill            （技能界面）
 *  √       Equip            （装备界面） 
 *  √       Status           （状态界面） 
 *  √       Formation        （队形界面） 
 *  √       Options          （选项界面） 
 *  √       Save             （保存界面） 
 *  √       Shop             （商店界面） 
 *  √       GameEnd          （游戏结束选择界面）
 *
 *  √       EnemyBook        （敌人图鉴界面）
 *  √       ItemBook         （道具图鉴界面）
 *  √       Picture_Gallery  （画廊界面）
 *  x       Music_Book       （音乐书界面）
 *  x       Fast_Travel      （世界地图界面）
 *  x       CharSelect       （角色选择界面）
 *
 *  √       Selfplate_A      （全自定义信息面板A）
 *  √       Lagomoro_Mission （小优任务界面）
 *  √       Synthesis        （YEP物品合成界面）
 *  √       Quest            （YEP任务系统界面）
 *
 * 配置魔法圈关键字时，不要忘了加"Scene_"前缀！
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 *
 *
 * @param ---魔法圈组 1至20---
 * @default
 *
 * @param 魔法圈-1
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-2
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-3
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-4
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-5
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-6
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-7
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-8
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-9
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-10
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-11
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-12
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-13
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-14
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-15
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-16
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-17
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-18
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-19
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-20
 * @parent ---魔法圈组 1至20---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param ---魔法圈组21至40---
 * @default
 *
 * @param 魔法圈-21
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-22
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-23
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-24
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-25
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-26
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-27
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-28
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-29
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-30
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-31
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-32
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-33
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-34
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-35
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-36
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-37
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-38
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-39
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-40
 * @parent ---魔法圈组21至40---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param ---魔法圈组41至60---
 * @default
 *
 * @param 魔法圈-41
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-42
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-43
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-44
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-45
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-46
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-47
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-48
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-49
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-50
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-51
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-52
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-53
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-54
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-55
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-56
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-57
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-58
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-59
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-60
 * @parent ---魔法圈组41至60---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param ---魔法圈组61至80---
 * @default
 *
 * @param 魔法圈-61
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-62
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-63
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-64
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-65
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-66
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-67
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-68
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-69
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-70
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-71
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-72
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-73
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-74
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-75
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-76
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-77
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-78
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-79
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-80
 * @parent ---魔法圈组61至80---
 * @type struct<MenuCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 */
/*~struct~MenuCircle:
 * 
 * @param 所属菜单
 * @type select
 * @option 主菜单
 * @value 主菜单
 * @option 道具
 * @value 道具
 * @option 技能
 * @value 技能
 * @option 装备
 * @value 装备
 * @option 状态
 * @value 状态
 * @option 队形
 * @value 队形
 * @option 选项
 * @value 选项
 * @option 保存
 * @value 保存
 * @option 商店
 * @value 商店
 * @option 游戏结束
 * @value 游戏结束
 * @option 敌人图鉴
 * @value 敌人图鉴
 * @option 道具图鉴
 * @value 道具图鉴
 * @option 画廊
 * @value 画廊
 * @option 自定义
 * @value 自定义
 * @desc 将魔法圈放在指定的菜单。如果为自定义，那么要填写自定义关键字。
 * @default 主菜单
 * 
 * @param 自定义关键字
 * @parent 所属菜单
 * @desc 设置所属菜单为自定义时，将根据此关键字找到对应的菜单。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 资源-魔法圈
 * @desc 魔法圈的图片资源。
 * @default 魔法圈-默认
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 平移-魔法圈 X
 * @desc x轴方向平移，单位像素。0为圈的圆心贴在最左边。
 * @default 0
 *
 * @param 平移-魔法圈 Y
 * @desc x轴方向平移，单位像素。0为圈的圆心贴在最上面。
 * @default 0
 *
 * @param 透明度
 * @type number
 * @min 0
 * @max 255
 * @desc 0为完全透明，255为完全不透明。
 * @default 255
 *
 * @param 混合模式
 * @type number
 * @min 0
 * @max 16
 * @desc pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 * @default 0
 *
 * @param 旋转速度
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0.01
 *
 * @param 菜单层级
 * @type select
 * @option 在菜单后面
 * @value 0
 * @option 在菜单前面
 * @value 1
 * @desc 背景所属的菜单层级。
 * @default 0
 *
 * @param 图片层级
 * @type number
 * @min 0
 * @desc 背景在同一个菜单，并且在菜单层级下，先后排序的位置，0表示最后面。
 * @default 4
 * 
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		【该插件从全局变量中筛选，放入局部变量使用】
//		插件结构并不复杂，但是坑多，需要理清楚下面变量的关系：
//			DrillUp.menu_circles		获取的值（80个）
//			this._sprite_circles_data	符合的值（小于80个，不要将数组二者混合使用）
//			this._sprite_circles		符合的图片（小于80个）
//			temp_sprite			临时图片
//			temp_sprite_data	临时的值

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_MenuCircle = true;
　　var DrillUp = DrillUp || {}; 

	DrillUp.parameters = PluginManager.parameters('Drill_MenuCircle');
	
	DrillUp.menu_circles_max = 80;
	DrillUp.menu_circles = [];
	
	for (var i = 0; i < DrillUp.menu_circles_max; i++) {
		if( DrillUp.parameters['魔法圈-' + String(i+1) ] != "" ){
			DrillUp.menu_circles[i] = JSON.parse(DrillUp.parameters['魔法圈-' + String(i+1) ]);
			DrillUp.menu_circles[i]['menu'] = DrillUp.menu_circles[i]["所属菜单"];
			DrillUp.menu_circles[i]['menu_key'] = DrillUp.menu_circles[i]["自定义关键字"];
			DrillUp.menu_circles[i]['src_img'] = String(DrillUp.menu_circles[i]["资源-魔法圈"]);
			DrillUp.menu_circles[i]['x'] = Number(DrillUp.menu_circles[i]["平移-魔法圈 X"]);
			DrillUp.menu_circles[i]['y'] = Number(DrillUp.menu_circles[i]["平移-魔法圈 Y"]);
			DrillUp.menu_circles[i]['opacity'] = Number(DrillUp.menu_circles[i]["透明度"]);
			DrillUp.menu_circles[i]['blendMode'] = Number(DrillUp.menu_circles[i]["混合模式"]);
			DrillUp.menu_circles[i]['rotate'] = Number(DrillUp.menu_circles[i]["旋转速度"]);
			DrillUp.menu_circles[i]['menu_index'] = Number(DrillUp.menu_backgrounds[i]["菜单层级"]);
			DrillUp.menu_circles[i]['zIndex'] = Number(DrillUp.menu_backgrounds[i]["图片层级"]);
		}else{
			DrillUp.menu_circles[i] = [];
		}
	}
	
	
//=============================================================================
// ** ImageManager
//=============================================================================
ImageManager.loadMenus = function(filename) {
    return this.loadBitmap('img/menus/', filename, 0, true);
};


//=============================================================================
// ** 从 Scene_MenuBase 中进行魔法圈追加
//=============================================================================

var _drill_menu_circle_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function() {
	SceneManager._menu_circle = false;	
   	this._sprite_circles = [];
   	this._sprite_circles_data = [];
	_drill_menu_circle_createBackground.call(this);		//与背景一同创建
};

var _drill_menu_circle_terminate = Scene_MenuBase.prototype.terminate;
Scene_MenuBase.prototype.terminate = function() {
	_drill_menu_circle_terminate.call(this);			//设置需要下次重新创建
	SceneManager._menu_circle = false;
};

//==============================
// ** 层级排序
//==============================
Scene_MenuBase.prototype.sortByZIndex = function() {
   this._backgroundSprite.children.sort(function(a, b){return a.zIndex-b.zIndex});	//比较器
   this._foregroundSprite.children.sort(function(a, b){return a.zIndex-b.zIndex});
};

//==============================
// * 创建魔法圈
//==============================
Scene_MenuBase.prototype.create_circles = function() {	
	SceneManager._menu_circle = true;
	
	if(!this._sprite_circles){
		this._sprite_circles = [];		//防止某些覆写的菜单报错
		this._sprite_circles_data = [];
	}
	if( !this._backgroundSprite ){		//菜单后面层
		this._backgroundSprite = new Sprite();
	}
	if( !this._foregroundSprite ){		//菜单前面层
		this._foregroundSprite = new Sprite();
		this.addChild(this._foregroundSprite);
	}
	
	for (var i = 0; i < DrillUp.menu_circles_max; i++) {
		if( this.check_circles(i) ){
			var temp_sprite_data = JSON.parse(JSON.stringify( DrillUp.menu_circles[i] ));	//拷贝object（杜绝引用造成的修改）
			var temp_sprite = new Sprite(ImageManager.loadMenus(temp_sprite_data['src_img']));
			temp_sprite.anchor.x = 0.5;
			temp_sprite.anchor.y = 0.5;
			temp_sprite.x = temp_sprite_data['x'];
			temp_sprite.y = temp_sprite_data['y'];
			temp_sprite.opacity = temp_sprite_data['opacity'];
			temp_sprite.blendMode = temp_sprite_data['blendMode'];
			temp_sprite.zIndex = temp_sprite_data['zIndex'];
			this._sprite_circles.push(temp_sprite);
			this._sprite_circles_data.push(temp_sprite_data);
			if( temp_sprite_data['menu_index'] == 0 ){
				this._backgroundSprite.addChild(temp_sprite);
			}else{
				this._foregroundSprite.addChild(temp_sprite);
			}
		}
	}
	this.sortByZIndex();
};

//==============================
// * 检查魔法圈所在菜单
//==============================
Scene_MenuBase.prototype.check_circles = function(i) {
	var temp_sprite_data = DrillUp.menu_circles[i] ; 	//注意，执行该方法，是在DrillUp.menu_circles中遍历
	if ( temp_sprite_data === undefined || temp_sprite_data.length == 0  ) {
		return false;	
	}
	if( SceneManager._scene.constructor.name === "Scene_Menu" && temp_sprite_data['menu'] == "主菜单" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Item" && temp_sprite_data['menu'] == "道具" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Skill" && temp_sprite_data['menu'] == "技能" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Equip" && temp_sprite_data['menu'] == "装备" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Status" && temp_sprite_data['menu'] == "状态" ){
		return true;
	}else if( (SceneManager._scene.constructor.name === "Scene_Party"||SceneManager._scene.constructor.name === "Scene_Formation") && temp_sprite_data['menu'] == "队形"  ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Options" && temp_sprite_data['menu'] == "选项" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Save" && temp_sprite_data['menu'] == "保存" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Shop" && temp_sprite_data['menu'] == "商店" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_GameEnd" && temp_sprite_data['menu'] == "游戏结束" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_EnemyBook" && temp_sprite_data['menu'] == "敌人图鉴" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_ItemBook" && temp_sprite_data['menu'] == "物品图鉴" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Picture_Gallery" && temp_sprite_data['menu'] == "画廊" ){
		return true;
	}else{
		if( SceneManager._scene.constructor.name === temp_sprite_data['menu_key'] ){
			return true;
		}
	}
	return false;
};

//==============================
// * 刷新魔法圈
//==============================
var _drill_menu_circle_update = Scene_MenuBase.prototype.update;
Scene_MenuBase.prototype.update = function() {
	_drill_menu_circle_update.call(this);
	
	if ( SceneManager.isCurrentSceneStarted() && !SceneManager._menu_circle ) {
		this.create_circles();				//创建，进入界面后只执行一次
	}
	if (SceneManager._menu_circle) {this.update_circles(); }
};

Scene_MenuBase.prototype.update_circles = function() {
	for (var i = 0; i < this._sprite_circles.length; i++) {
		this._sprite_circles[i].rotation += this._sprite_circles_data[i]['rotate'];
	};
};


