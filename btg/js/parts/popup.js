popupAndMaskPage();
function popupAndMaskPage() {
  const overlay = document.getElementsByClassName('overlay')[0],
        popup = document.getElementsByClassName('wrap-popup')[0],
        telHeader = document.getElementsByClassName('tel_header')[0],
        btnHeader = document.getElementsByClassName('btn-page__header')[0],
        btnClose = document.getElementsByClassName('popup-close')[0];

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
  }

  function popupHide() {
    popup.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

   maskUp();
  function maskUp() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
     var keyCode;
     function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ ____",
             i = 0,
             def = matrix.replace(/\D/g, ""),
             val = this.value.replace(/\D/g, ""),
             new_value = matrix.replace(/[_\d]/g, function(a) {
                 return i < val.length ? val.charAt(i++) || def.charAt(i) : a
             });
         i = new_value.indexOf("_");
         if (i != -1) {
             i < 5 && (i = 3);
             new_value = new_value.slice(0, i)
         }
         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
             function(a) {
                 return "\\d{1," + a.length + "}"
             }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
         if (event.type == "blur" && this.value.length < 5)  this.value = ""
     }

     input.addEventListener("input", mask, false);
     input.addEventListener("focus", mask, false);
     input.addEventListener("blur", mask, false);
     input.addEventListener("keydown", mask, false)
   });
  }
}


