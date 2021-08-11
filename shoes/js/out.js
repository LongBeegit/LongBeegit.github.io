var list = ["media/1.jpg","media/2.jpg","media/3.jpg","media/4.jpg","media/5.jpg"]
var index = 0;

var changeImage = function(){
	document.getElementById("only").src=list[index++];
	if(index==5) {
		index=0;
	}
}

setInterval(changeImage, 1000);