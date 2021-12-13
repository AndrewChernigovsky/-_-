const tabsTours = document.querySelectorAll('.aboutTours__link');
const contentTours = document.querySelectorAll('.aboutTours__content');
const contentWrapperTours = document.querySelectorAll('.aboutTours__content-wrapper');
const bodyTours = document.querySelector('.aboutTours__body');
const bodyWrapperTours = document.querySelector('.aboutTours__body-wrapper');
const tabTours = document.querySelectorAll('.aboutTours__tab');
const headerTours = document.querySelector('.aboutTours__header');

for (let i = 0; i < tabsTours.length; i++) {
  tabsTours[i].addEventListener('click', () => tabClick(i));
}

function tabClick(currentTab) {
  removeActive();
  tabsTours[currentTab].classList.add('active');
  contentTours[currentTab].classList.add('active');
}

function removeActive() {
    for (let i = 0; i < tabsTours.length; i++) {
        tabsTours[i].classList.remove('active');
        contentTours[i].classList.remove('active');
    }
}

for (let i = 0; i < tabsTours.length; i++) {
  if(contentTours[i].addEventListener('touchstart', handleTouchStart, false)){
    SwipeAnimates()
    tabsTours[i].classList.remove('active');
  }

  if(contentTours[i].addEventListener('touchmove', handleTouchMove, false)) {
    SwipeAnimates()
    tabsTours[i].classList.add('active');
  };
}

let x1 = null;
let y1 = null;

let width;
let count = 0;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];

  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(evt) {

  if (!x1 || !y1){
    return false;
  }

  let x2 = evt.touches[0].clientX;
  let y2 = evt.touches[0].clientY;
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      count++;
      if (count >= contentTours.length) {
          count = 0;
      }
      swipeTour();
    } else {
        count--;
        if (count < 0) {
            count = contentTours.length - 1;
        }
        swipeTour();
      }
    }
  x1 = null;
  y1 = null;
}

function swipeTour(){

  width = bodyTours.offsetWidth;
  bodyWrapperTours.style.width = width * contentTours.length + 'px';

  contentTours.forEach(item => {
    item.style.width = width +'px';
    item.style.height = 'auto';
  });

  SwipeAnimate();
  window.addEventListener('resize', swipeTour);
}

 function SwipeAnimate() {
  bodyWrapperTours.style.transform = 'translate(-' + count * width + 'px)';
}
