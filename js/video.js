var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 + "%";
	console.log("Play Video");
	console.log(video);
} 


function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 


function decreaseSpeed() { 
	video.playbackRate *= 0.8;
	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 


function skipAhead() {
	if (video.currentTime + 60 > video.duration) {
		video.currentTime = 0;
		video.pause();
		video.playbackRate = 1;
	}
	else {
		video.currentTime += 60;
		}
	console.log("Current location is "+ video.currentTime + 60);
	}

 

function mute() { 
  	if (video.muted){
  		console.log("Changing to Unmuted");
  		video.muted = false;
  	}
  	else {
      	console.log("Changing to Muted");
      	video.muted = true;
  	}
}

function changeVolume() {
	// video.volumeSlider();
	var slidervalue = document.querySelector("#volumeSlider").value;
	video.volume = slidervalue / 100;
	document.querySelector("#volume").innerHTML = slidervalue + "%";
	console.log(slidervalue);
}
	

       

function gray() { 
	console.log("In grayscale")
	video.classList.toggle("grayscale")
}

function color() {

	console.log("In color") 
	video.classList.toggle("grayscale")
}
