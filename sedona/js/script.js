document.addEventListener('DOMContentLoaded', function() {

	let openMnu = document.querySelectorAll(".main-burger--js")[0],
			closeMnu = document.querySelectorAll(".main-close--js")[0],
			mnuMain = document.querySelectorAll(".main-mnu")[0];


	mnuMain.classList.remove('header-main__mnu--opened'); // для мобильной навигации...
	mnuMain.classList.add('header-main__mnu--closed');

	openMnu.addEventListener('click', function() {
		if(mnuMain.classList.contains('header-main__mnu--closed')) {
			mnuMain.classList.remove('header-main__mnu--closed');
			mnuMain.classList.add('header-main__mnu--opened');
		}
	});
	closeMnu.addEventListener('click', function() {
		if(mnuMain.classList.contains('header-main__mnu--opened')) {
			mnuMain.classList.remove('header-main__mnu--opened');
			mnuMain.classList.add('header-main__mnu--closed');
		}
	});


	// script for the likes
	let likeBlocks = document.querySelectorAll('.block-photo__like');

	for (let index = 0; index < likeBlocks.length; index++) {
		const element = likeBlocks[index];
		element.addEventListener('click', function() {
			if (!this.classList.contains('block-photo__like--active')) {
				this.classList.add('block-photo__like--active');
			} else {
				this.classList.remove('block-photo__like--active');
			}
		});
	}
	// script for the likes

});