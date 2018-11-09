popupMain();
function popupMain() {
  let overlay = document.getElementsByClassName('overlay')[0],
      popup = document.getElementsByClassName('wrap-popup')[0],
      btnItem = document.getElementsByClassName('btn_item'),
      telHeader = document.getElementsByClassName('tel_header')[0],
      btnHeader = document.getElementsByClassName('btn_header')[0],
      btnClose = document.getElementsByClassName('popup-close')[0],
      bigItem = document.getElementsByClassName('big_item');

  for (var i = 0; i < bigItem.length; i++) {
    bigItem[i].addEventListener('click', () => {
       popupShow(true);
    });
  }

  for (var i = 0; i < btnItem.length; i++) {
    btnItem[i].addEventListener('click', () => {
      popupShow(true);
    });
  }
  btnHeader.addEventListener('click', ()=>{
    popupShow();
  });

  telHeader.addEventListener('click', ()=>{
    popupShow();
  });

  btnClose.onclick = (e)=> {
    popupHide();
  };

  function popupShow(x) {
    overlay.classList.add('active');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (x) {
      document.getElementsByClassName('popup-title')[0].innerText = 'Быстрая заявка';
      document.getElementsByClassName('popup-form__wrap-input')[0].innerHTML += '<div class="wrap-new-input"><input type="text" placeholder="Откуда?" class="popup_from"><input type="text" placeholder="Куда?" class="popup_to"></div>';
      let wrapElem = document.getElementsByClassName('wrap-new-input')[0],
          elemFrom = document.getElementsByClassName('popup_from')[0],
          elemTo = document.getElementsByClassName('popup_to')[0];
      wrapElem.style.cssText = 'order: 1; display: flex; margin-top: 20px;';
       maskUp();
    }
  }

  function popupHide() {
    popup.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (document.getElementsByClassName('wrap-new-input')[0] != null) {
      document.getElementsByClassName('wrap-new-input')[0].remove();
      document.getElementsByClassName('popup-title')[0].innerText = 'Заказать звонок';
    }
  }

}