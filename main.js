function toggleBtn() {
  const hamBtn = document.querySelector('.hamburger');
  const navBar = document.querySelector('.navBar');

  hamBtn.classList.toggle('active');
  navBar.classList.toggle('active');
}


const images = [
  'img/background.jpg',
  'img/background1.jpg',
  'img/background2.jpg',
  'img/background3.jpg',
  'img/background4.jpg',
  ];

function changeBackground() {
  const home = document.getElementById('home');
  const randomizer = Math.floor(Math.random() * images.length);

  home.style.backgroundImage = `url('${images[randomizer]}')`;
}

setInterval(changeBackground, 10000);

changeBackground();
