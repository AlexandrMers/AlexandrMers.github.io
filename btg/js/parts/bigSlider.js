bigSlider();
function bigSlider() {
  const slideWrBig = document.getElementsByClassName('slider-wrap-big')[0],
      lineTrackBig = document.getElementsByClassName('line-track-big')[0],
      sliderItemBig = document.getElementsByClassName('slider-item-big'),
      prevWrapBig = document.getElementsByClassName('prev-wrap-big')[0],
      nextWrapBig = document.getElementsByClassName('next-wrap-big')[0],
      arrayBigHeightSlide = [];
  
  function getMaxOfArrayBig(numArray) {
    return Math.max.apply(null, numArray);
  }

  function heightMaxBigSlider() {
    for (let i = 0; i < sliderItemBig.length; i++) {
        arrayBigHeightSlide.push(sliderItemBig[i].offsetHeight);
    }
    slideWrBig.style.height = getMaxOfArrayBig(arrayBigHeightSlide) + 'px';
  }
  heightMaxBigSlider();

  let moveBig = [];
    function arrayMoveBig() {
      for (let i = 0; i < sliderItemBig.length; i++) {
        moveBig.push(i*100);
        sliderItemBig[i].style.left = moveBig[i] + '%';
      }
      lineTrackBig.style.left = 0 + '%';
    }
    arrayMoveBig();
  prevWrapBig.addEventListener('click', () => {
    slidePlusBig(-1);
  });

  nextWrapBig.addEventListener('click', () => {
    slidePlusBig(1);
  });


  let a = 0;
  console.log("a", a);
  function slidePlusBig(index) {
    a += index;
    if (a < 0) {
      a = sliderItemBig.length - 1;
      console.log("a", a);
    }
    if (a > sliderItemBig.length - 1) {
      a = 0;
      console.log("a", a);
    }
    if (a < sliderItemBig.length && a >= 0) {
      lineTrackBig.style.left = (-a)*100 + '%';
    }
    lineTrackBig.style.left = (-a)*100 + '%';
  }

}