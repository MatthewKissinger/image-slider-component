// Main js file

// TODO LIST

// global variables

// imported images
import cat1 from '../images/cat-1.jpg';
import cat2 from '../images/cat-2.jpg';
import cat3 from '../images/cat-3.jpg';
import cat4 from '../images/cat-4.jpg';

// array of images
const imagesFolder = [cat1, cat2, cat3, cat4];
const imageIndex = 0;

// svg icons for inline HTML
const leftArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>';
const rightArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

// DOM Cache
const body = document.querySelector('body');

// first render call
renderImageSlider();

// event listeners
const leftArrowIcon = document.querySelector('.left-arrow-div');
leftArrowIcon.addEventListener('click', () => {
  prevImage();
});

const rightArrowIcon = document.querySelector('.right-arrow-div');
rightArrowIcon.addEventListener('click', () => {
  nextImage();
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

function nextImage() {
  console.log('next image');
}

function prevImage() {
  console.log('previous image');
}
