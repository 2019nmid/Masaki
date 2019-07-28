 //定义了一个获取元素的方法
 function getElement(selector) {
   return document.querySelector(selector);
 }
 //获取到需要用到的DOM元素
 var box = getElement("#box"), //容器
   canvas = getElement("#canvas"), //随机图片
   block = getElement("#block"), //生成的滑块图
   canvas_ctx = canvas.getContext('2d'),
   block_ctx = block.getContext('2d'),
   bgColor = getElement(".bgColor"), //背景色
   txt = getElement(".txt"), //文本
   confirmTxt = getElement(".confirmTxt"), //文本
   slider = getElement(".slider"), //滑块
   sliderChange=getElement(".sliderChange"),
   img = document.createElement('img'), //加载的图片
   successMoveDistance = box.offsetWidth - slider.offsetWidth, //解锁需要滑动的距离
   downX, //用于存放鼠标按下时的位置
   verifyNum, //待验证滑块的位置
   isSuccess = false; //是否解锁成功的标志，默认不成功

 //定义一些数据
 var x, y, w, r, PI

 //定义初始化number
 function initNumber() {
   w = 42;
   r = 10;
   PI = Math.PI;
 }
 //初始化图片和x，y
 function initImg() {
   var refreshImg = Math.floor(Math.random() * 6) + 1;
   img.src = './img//randamImg/' + refreshImg + '.png'
   x = Math.floor(Math.random() * 125) + 65;
   y = Math.floor(Math.random() * 190) + 10;
 }
 //初始化两个canvas
 function initCanvas() {
   draw(canvas_ctx, 'fill', 'canvas')
   draw(block_ctx, 'clip', 'block')
 }
 //初始化整个dom的函数
 function init() {
   initNumber();
   initImg();
   initCanvas();
 }

 init();

 //图片加载成功的回调
 img.onload = function () {
   canvas_ctx.drawImage(img, 0, 0, 250, 250);
   block_ctx.drawImage(img, 0, 0, 250, 250);
   imgBlock();
 };

 function imgBlock() {
   var blockWidth = w + r * 2
   var _y = y - r * 2 + 2 // 滑块实际的y坐标
   var ImageData = block_ctx.getImageData(x, _y, blockWidth, blockWidth)
   block.width = blockWidth
   block_ctx.putImageData(ImageData, 0, _y)
 }

 //画出两个拼图的函数
 function draw(ctx, operation, he) {
   ctx.beginPath()
   ctx.moveTo(x, y)
   ctx.arc(x + w / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
   ctx.lineTo(x + w, y)
   ctx.arc(x + w + r - 2, y + w / 2, r, 1.21 * PI, 2.78 * PI)
   ctx.lineTo(x + w, y + w)
   ctx.lineTo(x, y + w)
   ctx.arc(x + r - 2, y + w / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
   ctx.lineTo(x, y)
   ctx.lineWidth = 2
   ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
   ctx.strokeStyle = 'rgba(54, 54, 54, 0.7)'
   ctx.stroke()
   ctx[operation]()
   ctx.globalCompositeOperation = 'destination-over'
   console.log(he)
 }

 //给滑块添加鼠标按下事件
 slider.onmousedown = mousedownHandler;

 //鼠标按下事件的方法实现
 function mousedownHandler(e) {
   sliderChange.src="./img/slider/左右.png"
   //及时响应鼠标事件，如果不设置，拖动滑块会有延迟
   bgColor.style.transition = "all 0s";
   slider.style.transition = "all 0s";
   block.style.transition = "all 0s";
   var e = e || window.event || e.which;
   downX = e.clientX;
   //在鼠标按下时，分别给鼠标添加移动和松开事件
   document.onmousemove = mousemoveHandler;
   document.onmouseup = mouseupHandler;
 };

 //定义一个获取鼠标当前需要移动多少距离的方法
 function getOffsetX(offset, min, max) {
   if (offset < min) {
     offset = min;
   } else if (offset > max) {
     offset = max;
   }
   return offset;
 }

 //鼠标移动事件的方法实现
 function mousemoveHandler(e) {
   //兼容事件
   var e = e || window.event || e.which;
   var moveX = e.clientX;
   //调用offseX返回当前位置
   var offsetX = getOffsetX(moveX - downX, 0, successMoveDistance);
   verifyNum = offsetX;
   //移动后背景的颜色
   bgColor.style.width = offsetX + "px";
   slider.style.left = offsetX + "px";
   block.style.left = offsetX + "px";
   //如果不设置滑块滑动时会出现问题（目前还不知道为什么）
   e.preventDefault();
 };

 //鼠标松开事件的方法实现
 function mouseupHandler(e) {
  sliderChange.src="./img/slider/slider.png"
   var testC = parseInt(verifyNum - x); //判断用户移动与需要验证的滑块的差值
   if ((testC >= -4) && (testC <= 4)) {
     success()
   } else {
     fail()
   }
   if (!isSuccess) {
     bgColor.style.width = 0 + "px";
     slider.style.left = 0 + "px";
     block.style.left = 0 + "px";
     bgColor.style.transition = "width 0.8s linear";
     slider.style.transition = "left 0.8s linear";
     block.style.transition = "left 0.8s linear";
    //  bgColor.style.backgroundColor = "#e8e8e8";
     txt.innerHTML = "滑动验证";
   }
   document.onmousemove = null;
   document.onmouseup = null;
 };

 //定义一个滑块解锁成功的方法
 function success() {
   isSuccess = true;
   confirmTxt.innerHTML = "验证成功";
   confirmTxt.style.color = "green";
  //  bgColor.style.backgroundColor = "lightgreen";
   //滑动成功时，移除鼠标按下事件和鼠标移动事件
   slider.onmousedown = null;
   document.onmousemove = null;
 };
 //定义一个滑块解锁失败的方法
 function fail() {
   isSuccess = false;
   confirmTxt.innerHTML = "验证失败";
   confirmTxt.style.color = "red";
  //  bgColor.style.backgroundColor = "red";
   //滑动失败时，移除鼠标按下事件和鼠标移动事件
 };

 //定义清理canvas事件
 function clean() {
   this.canvas_ctx.clearRect(0, 0, 250, 250)
   this.block_ctx.clearRect(0, 0, 250, 250)
 }

 //定义刷新事件
 function refresh() {
  //  console.log("没错啊")
  //  this.slider.style.left = 0;
  //  this.block.style.left = 0;
  //  this.clean();
  //  this.initImg();
  //  this.initCanvas();
  //之前定义的方法有bug，详见注释，滑块的canvas显示不出来，可以用base64解决，目前没有具体需求就通过刷新解决
  history.go(0)
 }