menuPage();
function menuPage() {
    let menu = document.getElementsByClassName('menu_page')[0],
      burger = document.getElementsByClassName('burger')[0],
      headerPage = document.getElementsByClassName('header-page')[0];

    burger.addEventListener('click', function() {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        headerPage.classList.remove('active');
      } else {
        menu.classList.add('active');
        headerPage.classList.add('active');
      }
    }) 

    function determinesWidth() {
      if (document.body.clientWidth > 768 && (menu.classList.contains('active') || menu.headerPage.contains('active'))) {
        menu.classList.remove('active');
        headerPage.classList.remove('active');
      }
    }
    window.onresize = determinesWidth;
}




