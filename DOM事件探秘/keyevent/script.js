var data=['iPhone6Plus','iPhone5s','iPhone5','mac','三星笔记本','惠普打印机','99元红包','谢谢参与','100购物券'],
    timer=null,
    flag=0;
window.onload=function(){
	var play=document.getElementById('play'),
	    stop=document.getElementById('stop');
	    //开始抽奖
	play.onclick=playFun;
	stop.onclick=stopFun;
	    //键盘事件
    document.onkeyup=function(e){
    	e=e || window.event;
    	if (e.keyCode==13) {
    		if (flag==0) {
    			playFun();
    			flag=1;
    		}else{
    			stopFun();
    			flag=0;
    		}
    	}
    }
}
//鼠标事件
function playFun(){
	var title=document.getElementById('title'),
	    play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
	},50);
	play.style.background='#999';
}
function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}