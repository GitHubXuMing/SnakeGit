//ES6 全局变量使用const关键字定义：  只读
const northImg = new Image();
northImg.src = "static/img/north.png";
const southImg = new Image();
southImg.src = "static/img/south.png";
const eastImg = new Image();
eastImg.src = "static/img/east.png";
const westImg = new Image();
westImg.src = "static/img/west.png";
const bodyImg = new Image();
bodyImg.src = "static/img/body.png";
const foodImg = new Image();
foodImg.src = "static/img/food.png";
const bgImg = new Image();
bgImg.src = "static/img/background.png";
const startImg = new Image();
startImg.src = "static/img/start.png";



function Snake(){
	
	this.canvas = $("#gameview")[0];//canvas画布对象
	this.ctx = this.canvas.getContext("2d");//画笔
	this.width = 500;//背景（游戏屏幕）的宽度
	this.height = 500;//背景（游戏屏幕）的高度
	this.step = 25;//设计步长
	this.stepX = Math.floor(this.width/this.step);//X轴步数
	this.stepY = Math.floor(this.height/this.step);//Y轴步数
	
	
	/*
	 * 1-生成初始化页面，点击该页面，进入游戏
	 */
	this.init = function(){
		this.ctx.drawImage(startImg,0,0,this.width,this.height);
	}
	/*
	 * 2-游戏开始，绘制背景、蛇、食物
	 */
	this.start = function(){
		
		this.ctx.drawImage(bgImg,0,0,this.width,this.height);
	}
	/*
	 * 3-蛇动
	 */
	this.move = function(){
		
	}
	/*
	 * 4-蛇死
	 */
	this.dead = function(){
		
	}
}
