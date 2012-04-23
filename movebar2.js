suspendcode="<DIV id=lovexin style='Z-INDEX: 10; LEFT: 0px; POSITION: absolute; TOP: 145px; width: 137px; height:151px;'><a href='http://www.adonline.net.cn/Business/ad.htm' target='_blank'><img src='images/me.jpg' width='137px' height='151px' border='0'></a></DIV>"
document.write(suspendcode);
lastScrollY=0;
function heartBeat(){
diffY=document.documentElement.scrollTop;
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.all.lovexin.style.pixelTop+=percent;
lastScrollY=lastScrollY+percent;
}
window.setInterval("heartBeat()",1);