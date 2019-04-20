displayBlackMenu.addEventListener('click', ToggleFunction);

function ToggleFunction() {
  //blackMenu.style.left= 0;
  blackMenu.classList.toggle('blackMenuShow');
  displayBlackMenu.classList.toggle('blackMenuActive');
}
