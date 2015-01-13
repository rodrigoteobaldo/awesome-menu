document.onload = (function () {
  'use strict';

  window.$ = document.querySelectorAll.bind(document);

  var toggleMenuButton = $('.awesome-menu__toggle')[0];
  var awesomeMenu = $('.awesome-menu')[0];

  toggleMenuButton.addEventListener('mousedown', function (event) {

    if (awesomeMenu.classList.contains('is-closed')) {
      awesomeMenu.classList.remove('is-closed');
      awesomeMenu.classList.add('is-open');
    } else {
      awesomeMenu.classList.remove('is-open');
      awesomeMenu.classList.add('is-closed');
    }
  });

})();
