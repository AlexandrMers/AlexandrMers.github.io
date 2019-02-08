document.addEventListener("DOMContentLoaded", function() {


    const burgerWrap = document.getElementById('burger-wrap');
    
    function toggleMenu() {

        const mainMenu = document.getElementById('menu-main'),
              burger = document.getElementById('burger'),
              bodyEl = document.querySelector('body');

        let  viewWidth = document.body.clientWidth;

        if(mainMenu.classList.contains('nav-main--closed')) {

            mainMenu.classList.remove('nav-main--closed');
            burger.classList.remove('nav-main__burger--closed');
            mainMenu.classList.add('nav-main--opened');
            burger.classList.add('nav-main__burger--opened');

            if(viewWidth < 720) {
                bodyEl.style.overflowY = "hidden";
            } else {
                return false;
            }

        } else if(mainMenu.classList.contains('nav-main--opened')) {
            mainMenu.classList.remove('nav-main--opened');
            burger.classList.remove('nav-main__burger--opened');
            mainMenu.classList.add('nav-main--closed');
            burger.classList.add('nav-main__burger--closed');
            bodyEl.style.overflowY = "scroll";
        }

    }

    let cardTitle = document.querySelectorAll('.offer-card__title');

    for (let i = 0; i < cardTitle.length; i++) {
        let textR = cardTitle[i].innerHTML;
        cardTitle[i].innerHTML = textR + '<span></span>';
    }


    // popup
    const overlay = document.querySelector('.overlay'),
          popupWrap = document.querySelector('.popup-wrap'),
          closeBtn = document.querySelector('.popup__close-wrapper'),
          arrayCardsWrap = document.querySelector('.main-catalog__offer-cards'),
          arrayCards = document.getElementsByClassName('offer-card__wrapper');

function togglePopup() {

    const bodyEl = document.querySelector('body');

    if(overlay.classList.contains('overlay--closed')) {
        overlay.classList.remove('overlay--closed');
        overlay.classList.add('overlay--opened');

        popupWrap.classList.remove('popup-wrap--closed');
        popupWrap.classList.add('popup-wrap--opened');

        bodyEl.style.overflowY = "hidden";

    } else if(overlay.classList.contains('overlay--opened')) { 
        overlay.classList.remove('overlay--opened');
        overlay.classList.add('overlay--closed');

        popupWrap.classList.remove('popup-wrap--opened');
        popupWrap.classList.add('popup-wrap--closed');

        bodyEl.style.overflowY = "scroll";
    }
};

function contentPopup() {
    const arrayNavPopup = document.querySelectorAll('.nav__img-wrap'),
          bigPhotoPopup = document.getElementById('photo-big'),
          title = document.querySelector('.descr-place__title'),
          route = document.querySelector('.descr-place__route'),
          time = document.querySelector('.descr-place__time'),
          price = document.querySelector('.descr-place__price');

    const abrauDurso = {
        'title' : 'Морская прогулка в Абрау-Дюрсо', 
        'route' : 'Сочи-Абрау-Дюрсо', 
        'time' : ' 11 ч. 0 мин.',
        'price' : '14 800 руб.'
        },
        novoros = {
            'title' : 'Морской круиз в Новороссийск', 
            'route' : 'Сочи-Геленджик-Новороссийск-Геленджик-Сочи', 
            'time' : ' 13 ч. 0 мин.',
            'price' : '14 800 руб.'
        },
        sochi = {
            'title' : 'Обзорная морская прогулка с экскурсией', 
            'route' : 'Сочи-Адлер-Сочи (без высадки)', 
            'time' : '1 ч. 0 мин.',
            'price' : '5000 руб.',
            'priceOld' : '15000 руб.'
        };

        for (let i = 0; i < arrayNavPopup.length; i++) {
            
        
            arrayNavPopup[i].onclick = function() {

                for (let i = 0; i < arrayNavPopup.length; i++) {

                    let attribValue = this.getAttribute('data-numb');

                    arrayNavPopup[i].classList.remove('nav__img-wrap--active');
                    if(attribValue == (i+1)) {
                        this.classList.add('nav__img-wrap--active');
                        bigPhotoPopup.setAttribute('src', 'static/images/content/popup/popup-img' + this.getAttribute('data-numb') + '.jpg');
                        if (attribValue == 1) {
                            title.innerHTML = abrauDurso.title;
                            route.innerHTML = '<strong>Маршрут:</strong>' + abrauDurso.route;
                            time.innerHTML = '<strong>Продолжительность:</strong>' + abrauDurso.time;
                            price.innerHTML = '<span class="offer-card__price">'+ abrauDurso.price +'</span>';
                        } else if (attribValue == 2) {
                            title.innerHTML = novoros.title;
                            route.innerHTML = '<strong>Маршрут:</strong>' + novoros.route;
                            time.innerHTML = '<strong>Продолжительность:</strong>' + novoros.time;
                            price.innerHTML = '<span class="offer-card__price">'+ novoros.price +'</span>';
                        } else  {
                            title.innerHTML = sochi.title;
                            route.innerHTML = '<strong>Маршрут:</strong>' + sochi.route;
                            time.innerHTML = '<strong>Продолжительность:</strong>' + sochi.time;
                            price.innerHTML = '<span class="offer-card__price">'+ sochi.price +'</span><strike class="offer-card__price-old">'+ sochi.priceOld +'</strike>';
                        }
                     }
                }
                
                // input 
               
            }
        }
        togglePopup();
}


// scroll 

slowScroll();
function slowScroll() {
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

let buttonHead = document.querySelector('.header-bottom__button');

buttonHead.addEventListener('click', function(e) {
  e.preventDefault();
  animate(function(timePassed) {
    let target = e.target;
    let section = document.getElementById(target.getAttribute('href').slice(1));
    window.scrollBy(0, section.getBoundingClientRect().top / 25 + 2) ;
  }, 1500)
});
}




    // Call event
    burgerWrap.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', togglePopup);
    for (let i = 0; i < arrayCards.length; i++) {
        arrayCards[i].onclick = contentPopup;
    }


});