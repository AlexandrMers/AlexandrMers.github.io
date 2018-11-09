 let elemScroll = document.getElementById('btn-scroll-up'),
  	 btn = elemScroll;


window.onscroll = () => {
	console.log(document.documentElement.scrollTop)
	if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
		elemScroll.style.opacity = '1';
	} else {
    elemScroll.style.opacity = '0';
	}
}


 // функция анимации
 function animate(draw, duration) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timePassed = time - start;
    if (timePassed > duration) timePassed = duration;
    draw(timePassed);
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }
  });
}

btn.addEventListener('click', function(e) {
  let scrollTop = document.documentElement.scrollTop;
  animate(function(timePassed) {
    window.scrollBy(0, -(scrollTop / 30 - 3));
  }, 1500)
});



