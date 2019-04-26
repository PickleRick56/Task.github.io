displayBlackMenu.addEventListener('click', ToggleFunction);

function ToggleFunction() {
  //blackMenu.style.left= 0;
  blackMenu.classList.toggle('blackMenuShow');
  displayBlackMenu.classList.toggle('blackMenuActive');
}

function resize() {
  if (
    blackMenu.classList.contains('blackMenuShow') &&
    document.documentElement.clientWidth > 768
  ) {
    blackMenu.classList.remove('blackMenuShow');
  }
}

window.onresize = resize;
