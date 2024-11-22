let video;

window.addEventListener("load", function() {
	console.log("Window is open")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is "+video.autoplay)
	console.log("Loop is "+video.loop)
	console.log()
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("play video")
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down video")
	video.playbackRate *= .90
	console.log("Speed is ", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up video")
	video.playbackRate /= .90
	console.log("Speed is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime += 10
	}
	console.log("Current time is ", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value/100
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});