document.onload = (function () {
  'use strict';

  var $ = document.querySelectorAll.bind(document);
  var toggleMenuButton = $('.awesome-menu__toggle')[0];
  var awesomeMenu = $('.awesome-menu')[0];

  toggleMenuButton.addEventListener('mousedown', toggleMenu);
  toggleMenuButton.addEventListener('touchstart', toggleMenu);

  function toggleMenu(event) {

    if (awesomeMenu.classList.contains('is-closed')) {
      awesomeMenu.classList.remove('is-closed');
      awesomeMenu.classList.add('is-open');
    } else {
      awesomeMenu.classList.remove('is-open');
      awesomeMenu.classList.add('is-closed');
    }
  }

})();
