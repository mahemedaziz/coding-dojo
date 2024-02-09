console.log("page loaded...");


var video = document.getElementById("myVideo");

function over(elemet){
  video.muted = true ;
  video.play();
}
function out(elemet){
  video.pause();
  video.currentTime = 0;
}

