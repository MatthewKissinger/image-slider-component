//TODO List

// animate the transitio of images loading

// global variables

// imported images
import './main.scss';
import cat1 from './images/cat-1.jpg';
import cat2 from './images/cat-2.jpg';
import cat3 from './images/cat-3.jpg';
import cat4 from './images/cat-4.jpg';

// array of images
const imagesFolder = [cat1, cat2, cat3, cat4];
const imagesFolderLength = imagesFolder.length;
console.log(imagesFolderLength);
let imageIndex = 0;

// svg icons for inline HTML
const leftArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>';
const rightArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

// DOM Cache
const body = document.querySelector('body');

// first render call
renderImageSlider();
nextImage5Seconds();

// event listeners
const leftArrowIcon = document.querySelector('.left-arrow-div');
leftArrowIcon.addEventListener('click', () => {
  prevImage();
});

const rightArrowIcon = document.querySelector('.right-arrow-div');
rightArrowIcon.addEventListener('click', () => {
  nextImage();
});

const navDots = document.querySelectorAll('.nav-dot');
navDots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    updateNavDotFillOnClick(e);
  });
});

// render functions
function renderImageSlider() {
  const imageSliderFrame = document.createElement('div');
  imageSliderFrame.classList.add('image-slider-frame');

  const leftArrowDiv = document.createElement('div');
  leftArrowDiv.classList.add('left-arrow-div', 'flex-center');
  leftArrowDiv.innerHTML = leftArrow;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const sliderImage = document.createElement('img');
  sliderImage.classList.add('slider-img');

  imageContainer.appendChild(sliderImage);

  const rightArrowDiv = document.createElement('div');
  rightArrowDiv.classList.add('right-arrow-div', 'flex-center');
  rightArrowDiv.innerHTML = rightArrow;

  const navDotContainer = document.createElement('div');
  navDotContainer.classList.add('nav-dot-container');

  imageSliderFrame.appendChild(leftArrowDiv);
  imageSliderFrame.appendChild(imageContainer);
  imageSliderFrame.appendChild(rightArrowDiv);
  imageSliderFrame.appendChild(navDotContainer);

  body.appendChild(imageSliderFrame);

  // initial call to display first image
  displayImage();
  renderNavDots(imagesFolder);
}

function displayImage() {
  const image = document.querySelector('.slider-img');
  image.setAttribute('src', `${imagesFolder[imageIndex]}`);
}

function renderNavDots(array) {
  const navDotContainer = document.querySelector('.nav-dot-container');
  navDotContainer.innerHTML = '';

  array.forEach((item) => {
    const navDot = document.createElement('div');
    navDot.classList.add('nav-dot');
    navDot.setAttribute('data-index', `${array.indexOf(item)}`);

    if (parseInt(navDot.dataset.index, 10) === imageIndex) {
      navDot.classList.add('filled');
    }

    navDotContainer.appendChild(navDot);
  });
}

// update navDotFill function instead of re-rendering them
function updateNavDotFillOnClick(e) {
  imageIndex = parseInt(e.target.dataset.index);
  navDots.forEach((dot) => {
    dot.classList.remove('filled');

    if (parseInt(dot.dataset.index, 10) === imageIndex) {
      dot.classList.add('filled');
    }
  });
  displayImage();
}

function updateNavDotFill() {
  navDots.forEach((dot) => {
    dot.classList.remove('filled');

    if (parseInt(dot.dataset.index, 10) === imageIndex) {
      dot.classList.add('filled');
    }
  });
}

function nextImage() {
  if (!(imageIndex >= imagesFolderLength - 1)) {
    imageIndex += 1;
    displayImage();
    updateNavDotFill();
    console.log(imageIndex);
  }
}

function prevImage() {
  if (!(imageIndex <= 0)) {
    imageIndex -= 1;
    displayImage();
    updateNavDotFill();
    console.log(imageIndex);
  }
}

function nextImage5Seconds() {
  setInterval(nextImage, 6000);
}
