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
//将欢迎界面的图片放在最后，表示加载成功后，其他图片已经加载完毕，无需再进行onload判断
const startImg = new Image();
startImg.src = "static/img/start.png";

function Snake() {

	this.canvas = $("#gameview")[0]; //canvas画布对象
	this.ctx = this.canvas.getContext("2d"); //画笔
	this.width = 500; //背景（游戏屏幕）的宽度
	this.height = 500; //背景（游戏屏幕）的高度
	this.step = 25; //设计步长
	this.stepX = Math.floor(this.width / this.step); //X轴步数
	this.stepY = Math.floor(this.height / this.step); //Y轴步数
	this.snakeBodyList = []; //设置蛇身数组
	this.foodList = []; //设置食物数组

	/*
	 * 1-生成初始化页面，点击该页面，进入游戏
	 */
	this.init = function() {
		this.ctx.drawImage(startImg, 0, 0, this.width, this.height);
	}
	/*
	 * 2-游戏开始，绘制背景、蛇、食物
	 */
	this.start = function() {
		//2.1 画出背景
		this.ctx.drawImage(bgImg, 0, 0, this.width, this.height);
		//2.2 画蛇
		this.drawSnake();
		//2.3 随机画出食物
		this.drawFood();
	}
	/*
	 * 2.2画蛇：算法[{x:横坐标，y：纵坐标，img：图片，direct：运动方向},.......]
	 */
	this.drawSnake = function() {
		//2.2.1循环生成snakeBodyList数组中的对象集合 （默认，蛇居于中间，蛇头向西）
		for(var i = 0; i < 5; i++) {
			//{x:横坐标，y：纵坐标，img：图片，direct：运动方向}蛇的节点设计
			this.snakeBodyList.push({
				x: Math.floor(this.stepX / 2) + i - 2, //注意：x不是px像素坐标点，而是x轴步数
				y: Math.floor(this.stepY / 2), //注意：这是y轴步数
				img: bodyImg,
				direct: "west"
			});
		}
		//2.2.2替换snakeBodyList数组第一个元素的img，替换成westImg蛇头图片
		this.snakeBodyList[0].img = westImg;
		//2.2.3遍历snakeBodyList数组，并画出蛇的初始状态
		for(var i = 0; i < this.snakeBodyList.length; i++) {
			var snode = this.snakeBodyList[i];
			this.ctx.drawImage(snode.img, snode.x * this.step,
				snode.y * this.step, this.step, this.step);
		}

	}
	/*
	 * 2.3画食物
	 */
	this.drawFood = function() {

		//2.3.1当食物已经存在的时候，画面刷新时，食物在原有位置重绘
		if(this.foodList.length > 0) {
			var fnode = this.foodList[0];
			this.ctx.drawImage(fnode.img, fnode.x * this.step, fnode.y * this.step, this.step, this.step);
			return;
		}
		//2.3.2如果食物没有（食物被吃或游戏初始化），生成x，y随机坐标，判断是否与蛇身重复
		//如果重复，重绘，调用this.drawfood(),否则，按照随机生成的点push到数组中，绘制图案
		var foodX = Math.floor(Math.random() * this.stepX);
		var foodY = Math.floor(Math.random() * this.stepY);
		var foodFlag = false; //判断食物与蛇身是否重复的标识位，true重复，false 不重复
		for(var i = 0; i < this.snakeBodyList.length; i++) {
			var snode1 = this.snakeBodyList[i];
			if(foodX == snode1.x && foodY == snode1.y) {
				foodFlag = true;
			}
		}
		if(foodFlag) {
			this.drawFood(); //如果重复，则重绘
		} else {
			this.foodList.push({
				x: foodX,
				y: foodY,
				img: foodImg
			}); //新生成一个食物
			var fnode = this.foodList[0];
			this.ctx.drawImage(fnode.img, fnode.x * this.step, fnode.y * this.step, this.step, this.step);
		}

	}
	/*
	 * 3-蛇动
	 */
	this.move = function() {
		
	}
	/*
	 * 4-蛇死
	 */
	this.dead = function() {

	}
}