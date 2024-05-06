// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const hamburguerIconElement = document.getElementById('hamburger-icon');
const menuElement = document.getElementById('menu');

const handleMenu = () => {
  menuElement.classList.toggle('menu--show');
  hamburguerIconElement.classList.toggle('hamburger-icon--open');
};

hamburguerIconElement.addEventListener('click', handleMenu);
