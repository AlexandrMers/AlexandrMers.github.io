miniSlideFunc();
function miniSlideFunc() {
    miniSlide();
    let isEvent = true;
    function miniSlide() {
      let arrayMiniSliderHeight = [],
           blocksNews = document.getElementsByClassName('blocks-news')[0],
           cirkleWrapMini = document.getElementsByClassName('cirkle_wrap_mini')[0],
           lineTrackMini = document.getElementsByClassName('line_track_mini')[0],
           cirkleMini = document.getElementsByClassName('cirkle_mini'),
           wrapBlockNews = document.getElementsByClassName('wrap-block-news'),
           prevMin = document.getElementsByClassName('mini_prev_wrap')[0],
           nextMin = document.getElementsByClassName('mini_next_wrap')[0];
           function getMaxOfArrayMini(numArray) {
            return Math.max.apply(null, numArray);
          }

      if (document.body.clientWidth <= 768) {
           window.onresize = reload;
           
            function heightMaxMiniSlider() {
                for (let i = 0; i < wrapBlockNews.length; i++) {
                    arrayMiniSliderHeight.push(wrapBlockNews[i].offsetHeight);
                }
                blocksNews.style.height = getMaxOfArrayMini(arrayMiniSliderHeight) + 'px';
            }
              heightMaxMiniSlider();

            window.addEventListener('resize', heightMaxMiniSlider);

          let moveMini = [];
          function arrayMoveMini() {
            for (let i = 0; i < wrapBlockNews.length; i++) {
              moveMini.push(i*100);
              wrapBlockNews[i].style.left = moveMini[i] + '%';
            }
            lineTrackMini.style.left = 0 + '%';
          }
          arrayMoveMini();

          
          
          let aMin = 0;
          function cirkleActiveMini (n, x) {
            if (x || x == 0) {
              aMin = x;
            }
            if (n) {
              aMin += n;
            }
            for (let i = 0; i < cirkleMini.length; i++) {
              cirkleMini[i].classList.remove('active');
            }
            if (aMin > cirkleMini.length - 1) {
              aMin = 0;
              lineTrackMini.style.left = (-aMin)*100 + '%';
              cirkleMini[aMin].classList.add('active');
            }
            if (aMin < 0) {
              aMin = cirkleMini.length - 1;
              lineTrackMini.style.left = (-aMin)*100 + '%';
            }
            if (aMin < cirkleMini.length && aMin >= 0) {
              cirkleMini[aMin].classList.add('active');
              lineTrackMini.style.left = (-aMin)*100 + '%';
            }
            lineTrackMini.style.left = (-aMin)*100 + '%';
          }

        prevMin.addEventListener('click', ()=> {
          cirkleActiveMini(-1);
        });
        nextMin.addEventListener('click', ()=> {
          cirkleActiveMini(1);
        });

         cirkleWrapMini.addEventListener('click', (e)=> {
          let target = e.target;
          for (var i = 0; i < cirkleMini.length; i++) {
            if (target.classList.contains('cirkle_mini') && target == cirkleMini[i]) {
              cirkleActiveMini(0, i);
            }
          }

         });
      } else if(document.body.clientWidth >= 768 && document.body.clientWidth <= 992) {
        blocksNews.style.height = 'inherit';
        window.onresize = () => {
          reload();
        }
    }
  }
      
      window.onresize = miniSlide;

       function reload() {
          window.location.reload();
      }
}
