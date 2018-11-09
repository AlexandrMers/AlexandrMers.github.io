menuMain();
function menuMain() {

	let menu = document.getElementById('menu_header'),
	    burger = document.getElementsByClassName('burger')[0];

	burger.addEventListener('click', function() {
	  if (menu.classList.contains('active')) {
	    menu.classList.remove('active');
	  } else {
	    menu.classList.add('active');
	  }
	}) 

	function determinesWidth() {
	  if (document.body.clientWidth > 768 && menu.classList.contains('active')) {
	    menu.classList.remove('active');
	  }
	}
	window.onresize = determinesWidth;
}
