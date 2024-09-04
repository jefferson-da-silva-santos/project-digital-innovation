const btnMenu = document.querySelector('.group-menu');
const listMenu = document.querySelector('.list-menus');
let menuVisible = false;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-login').addEventListener('click', (event) => {
    event.preventDefault();
    document.body.style.overflow = 'hidden';
    document.querySelector('.group-option-login').style.display = 'flex';
  });

  document.querySelector('.group-option-login').addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    document.querySelector('.group-option-login').style.display = 'none';
  });

  btnMenu.addEventListener('click', () => {
    if (!menuVisible) {
      openMenu(listMenu);
    } else {
      closeMenu(listMenu);
    }
  });

  document.querySelectorAll('.item-menu').forEach(element => {
    element.addEventListener('click', () => {
      if (window.innerWidth < 890) {
        closeMenu(listMenu); 
      }
    });
  });

});

function openMenu(menu) {
  menu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.querySelectorAll('.linha').forEach(element => {
    element.style.backgroundColor = '#1695fe';
  });
  menuVisible = !menuVisible;
}

function closeMenu(menu) {
  menu.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.querySelectorAll('.linha').forEach(element => {
    element.style.backgroundColor = 'white';
  });
  menuVisible = !menuVisible;
}