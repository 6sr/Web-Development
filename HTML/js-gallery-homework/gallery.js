function upDate(previewPic){
	document.getElementById("image").style.backgroundImage = "url(" + "'" + previewPic.getAttribute("src") + "'" + ")";
	document.getElementById("image").innerHTML = previewPic.getAttribute("alt");
}
function unDo(){
	document.getElementById("image").style.backgroundImage = "";
	document.getElementById("image").style.backgroundColor = "#8e68ff";
	document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}