window.addEventListener("DOMContentLoaded", function() {

	// получаем все наши элементы
	const controlsWrapper = document.querySelector(".controls-wrapper");
	const videoPlayer = document.querySelector("#video-player");
	const replayButton = document.querySelector("#replay");
	const ccButton = document.querySelector("#control_cc");
	const fullscreenButton = document.querySelector("#fullscreen");
	const play = document.querySelector("#play");
	const point = document.querySelector(".load-pr__point");
	const loadProgressVideo = document.querySelector(".load-pr");
	// скрываем кнопку реплей

	// пишем функционал к элементам
	function togglePlay() { // плей или пауза ролика
		const method = videoPlayer.paused ? 'play' : 'pause';
		const simbolVideo = videoPlayer.paused ? '&#10074 &#10074;' : '&#9658';
		videoPlayer[method]();
		play.innerHTML = simbolVideo;
	}

	function progressHandler() {
		const progressPrecent = parseInt((videoPlayer.currentTime / videoPlayer.duration) * 100);
		point.style.left = `${progressPrecent}%`;

	}

	function progressTouch(e) {
		let currentTimePress = parseInt((e.offsetX / loadProgressVideo.clientWidth) * videoPlayer.duration);
		videoPlayer.currentTime = currentTimePress;

	}



	function toggleFullScreen() { // функция для управления полноэкранным режимом на видеоплеере
		if(videoPlayer.requestFullscreen) {
			videoPlayer.requestFullscreen();
			outputControls();
		} else if(videoPlayer.webkitRequestFullScreen) {
			videoPlayer.webkitrequestFullscreen();
			outputControls();
		} else if(videoPlayer.mozRequestFullScreen) {
			videoPlayer.mozrequestFullscreen();
			outputControls();
		} else {
			controlsWrapper.classList.add('controls-wrapper--no-js');
			outputControls();
		}
	}

	function outputControls() { // добавляем панель управления
		videoPlayer.setAttribute('controls', '');
	}

	function noJsVideo() { // функция удаляет класс, что свидетельствует о работе скрипта
		if(controlsWrapper.classList.contains("controls-wrapper--no-js")) {
			controlsWrapper.classList.remove("controls-wrapper--no-js");
			videoPlayer.removeAttribute("controls");
		} else {
			return false;
		}
	}

	function onFullScreen() { //функция следит полноэкранный режим либо нет...
		let isFullscreenNow = document.fullscreenElement !== null;
		if (isFullscreenNow == true) {
			videoPlayer.setAttribute('controls', '');
		} else if(isFullscreenNow == false) {
			videoPlayer.removeAttribute('controls');
		}
	}

	function toggleReplay() {
		play.innerHTML = "";
		if (replayButton.classList.contains('hidden-element')) {
			replayButton.classList.remove('hidden-element');
		} else {
			replayButton.classList.add('hidden-element');
		}
	}

	function replayVideo () {
		togglePlay();
		this.classList.add('hidden-element');
	}



	// выводим функционал на события
	fullscreenButton.addEventListener('click', toggleFullScreen);
	videoPlayer.addEventListener('fullscreenchange', onFullScreen);
	window.addEventListener('load', noJsVideo);
	play.addEventListener('click', togglePlay);
	videoPlayer.addEventListener('timeupdate', progressHandler);
	videoPlayer.addEventListener('ended', toggleReplay);
	replayButton.addEventListener('click', replayVideo);

	loadProgressVideo.addEventListener('click', progressTouch);
});