let tabsTours = document.querySelectorAll('.aboutTours__link');
let content = document.querySelectorAll('.aboutTours__content');

for (let i = 0; i < tabsTours.length; i++) {
  tabsTours[i].addEventListener('click', () => tabClick(i));
}

function tabClick(currentTab) {
    removeActive();
    tabsTours[currentTab].classList.add('active');
    content[currentTab].classList.add('active');
}

function removeActive() {
    for (let i = 0; i < tabsTours.length; i++) {
        tabsTours[i].classList.remove('active');
        content[i].classList.remove('active');
    }
}
