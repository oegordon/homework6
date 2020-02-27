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
	video.playbackRate *= 0.5;
	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 


// function skipAhead() {

// 	console.log("Current location is "+ );
// } 

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
	


// ;	console.log("Volume is ");
// }
       

// function gray() { 

// 	console.log("In grayscale")
// }

// function color() {

// 	console.log("In color") 
// }
