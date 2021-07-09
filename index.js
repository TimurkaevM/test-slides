const upBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');

const mainSlide = document.querySelector('.main-slide');

const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeClassIndex = 0;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

function changeSlide(direction) {
  if(direction === "up") {
    activeClassIndex ++;
      if(activeClassIndex === slidesCount) {
        activeClassIndex = 0;
      }
    } else if (direction === "down") {
      activeClassIndex --;
      if(activeClassIndex < 0) {
        activeClassIndex = slidesCount - 1;
      }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeClassIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeClassIndex * height}px)`;
}