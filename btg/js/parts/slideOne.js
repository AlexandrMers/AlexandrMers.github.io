
	const items = document.getElementsByClassName('slider-item'),
		    sliderWrap = document.getElementsByClassName('slider-wrap')[0],
		    prev = document.getElementsByClassName('prev-wrap')[0],
		    next = document.getElementsByClassName('next-wrap')[0],
		    cirklesWrap = document.getElementsByClassName('cirkles')[0],
		    cirkles = document.getElementsByClassName('cirkle'),
		    lineTrack = document.getElementsByClassName('line_track')[0];
		let arrayHeight = new Array;



	heightMax();
	 function heightMax() {
	  for (let i = 0; i < items.length; i++) {
	      arrayHeight.push(items[i].offsetHeight);
	  }
		  sliderWrap.style.height = getMaxOfArray(arrayHeight) + 'px';
  	}

  	 window.addEventListener('resize', heightMax);

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  let move = [];

  function arrayMove() {
    for (let i = 0; i < items.length; i++) {
      move.push(i*100);
      items[i].style.left = move[i] + '%';
    }
    lineTrack.style.left = 0 + '%';
  }
  arrayMove();

  let a = 0;
  function cirkleActive(n, x) {
	   if (x || x == 0) {
	     a = x;
	   }
	   if (n) {
	     a += n;
	   }
	   for (let i = 0; i < cirkles.length; i++) {
	     cirkles[i].classList.remove('cirkle-active');
	   }
	   if (a > cirkles.length - 1) {
	     console.log('a = 0');
	     a = 0;
	     lineTrack.style.left = (-a)*100 + '%';
	     cirkles[a].classList.add('cirkle-active');
	   }
	   if (a < 0) {
	     a = cirkles.length - 1;
	     console.log("a", a);
	     lineTrack.style.left = (-a)*100 + '%';
	   }
	   if (a < cirkles.length && a >= 0) {
	     cirkles[a].classList.add('cirkle-active');
	     lineTrack.style.left = (-a)*100 + '%';
	   }
	   lineTrack.style.left = (-a)*100 + '%';
	  }


	  prev.addEventListener('click', () => {
	  	cirkleActive(-1);
	  });

	  next.addEventListener('click', () => {
	  	cirkleActive(1);
	  });

	  cirklesWrap.addEventListener('click', (e)=> {
	  	let target = e.target;
	  	for (var i = 0; i < cirkles.length; i++) {
	  		if (target.classList.contains('cirkle') && target == cirkles[i]) {
	  			cirkleActive(0, i);
	  		}
	  	}
	  });

