sliderNews();
function sliderNews() {
		const items = document.getElementsByClassName('slider-left__item'),
					sliderWrap = document.getElementsByClassName('slider-left')[0],
					lineTrack = document.getElementsByClassName('slider-left__lineTrack')[0],
					navLineTrack = document.getElementsByClassName('nav-images-lineTrack')[0],
					navLineTrackWrap = document.getElementsByClassName('nav-images-lineTrack-wrap')[0],
					navItem = document.getElementsByClassName('nav-item'),
					prev = document.getElementsByClassName('prev-slider-left')[0],
					next = document.getElementsByClassName('next-slider-left')[0];
		let index = 0;
		console.log(navLineTrackWrap)

	let arrayHeight = new Array;
	 function heightMax() {
	      for (let i = 0; i < items.length; i++) {
	          arrayHeight.push(items[i].offsetHeight);
	      }
	      sliderWrap.style.height = getMaxOfArray(arrayHeight) + 'px';
	  }
	  heightMax();

	  window.addEventListener('resize', heightMax);

	  function getMaxOfArray(numArray) {
	      return Math.max.apply(null, numArray);
	  }
	  // Навигация для слайда - высчитываение ширины для обертки навигации.
	  let widthGetX;
	  function autoWidth() {
	  	widthGetX = 0;
	  	for (var i = 0; i < navItem.length; i++) {
	  		widthGetX += navItem[i].offsetWidth + 39;
	  	}
	  	navLineTrack.style.width = widthGetX + 'px';
	  }
	  autoWidth();


	let index2 = 0;

	showSlide(1);
		function showSlide(x, n, y) {
			if (y || y == 0) {
				if (y == 0) {
					index = 1;
					console.log('yes');
				} else {
					index = y + 1;
				}
			}
			if(x || y) {
				console.log('yes');
				index += x;
				if (index == 0 || index < 0) {
					index = 1;
				}
				if (index >= navItem.length) {
					index = navItem.length;
				}
			}
			
			if (index <= items.length && index > 0) {
				for (let i = 0; i < items.length; i++) {
					items[i].style.display = 'none';
		     	navItem[i].classList.remove('active');
				}
				items[index - 1].style.display = 'block';
				items[index - 1].classList.add('visible-News');
				navItem[index - 1].classList.add('active');
				if (n < 0 ) {
					index2 +=  (-1)*25;
					if (parseInt(navLineTrack.style.left) <= -50) {
						index2 = -50;
					}
					navLineTrack.style.left = index2  + '%';
				}
				if (n > 0 ) {
					if (parseInt(navLineTrack.style.left) < 0) {
						index2 += (1)*25;
					} else {
						index2 = 0;
					}
					navLineTrack.style.left = index2  + '%';
					
				}	
			}	
		}
		// navItem

		navLineTrack.addEventListener('click', (e)=> {
			let target = e.target;
			for (var i = 0; i < navItem.length; i++) {
				if (target.classList.contains('nav-item') && target == navItem[i]) {
					showSlide(0, 0, i);
				}
			}
		});

		function plusSlide(a, n) {
			showSlide(a, n);
		}

		prev.addEventListener('click', ()=>{
			plusSlide(-1, 1);
		});

		next.addEventListener('click', ()=>{
			plusSlide(1, -1);
		});
}