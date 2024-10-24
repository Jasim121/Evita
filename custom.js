let currentImageIndex = 0;
let currentCategory = '';

function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabButtons = document.getElementsByClassName('tab-button');

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
        tabButtons[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

function openPopup(src, index, category) {
    currentImageIndex = index;
    currentCategory = category;

    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = src;
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = "none";
}

function changeImage(direction) {
    const categories = {
        nature: [
            "https://source.unsplash.com/600x400/?nature,1",
            "https://source.unsplash.com/600x400/?nature,2",
            "https://source.unsplash.com/600x400/?nature,3"
        ],
        city: [
            "https://source.unsplash.com/600x400/?city,1",
            "https://source.unsplash.com/600x400/?city,2",
            "https://source.unsplash.com/600x400/?city,3"
        ],
        animal: [
            "https://source.unsplash.com/600x400/?animal,1",
            "https://source.unsplash.com/600x400/?animal,2",
            "https://source.unsplash.com/600x400/?animal,3"
        ]
    };

    const images = categories[currentCategory];
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

    const popupImg = document.getElementById('popup-img');
    popupImg.src = images[currentImageIndex];
}


const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length-1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const lightboxBtnRight = document.querySelector('#right');
const lightboxBtnLeft = document.querySelector('#left');
const close = document.querySelector('#close');
let activeImage;
// Functions
const showLightBox = () => {lightboxContainer.classList.add('active')}

const hideLightBox = () => {lightboxContainer.classList.remove('active')}

const setActiveImage = (image) => {
lightboxImage.src = image.dataset.imgsrc;
activeImage= lightboxArray.indexOf(image);
}

const transitionSlidesLeft = () => {
  lightboxBtnLeft.focus();
  $('.lightbox-image').addClass('slideright'); 
   setTimeout(function() {
  activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : setActiveImage(lightboxArray[activeImage-1]);
}, 250); 


  setTimeout(function() {
    $('.lightbox-image').removeClass('slideright');
}, 500);   
}

const transitionSlidesRight = () => {
 lightboxBtnRight.focus();
$('.lightbox-image').addClass('slideleft');  
  setTimeout(function() {
   activeImage === lastImage ? setActiveImage(lightboxArray[0]) : setActiveImage(lightboxArray[activeImage+1]);
}, 250); 
  setTimeout(function() {
    $('.lightbox-image').removeClass('slideleft');
}, 500);  
}

const transitionSlideHandler = (moveItem) => {
  moveItem.includes('left') ? transitionSlidesLeft() : transitionSlidesRight();
}

// Event Listeners
lightboxEnabled.forEach(image => {
   image.addEventListener('click', (e) => {
    showLightBox();
    setActiveImage(image);
    })                     
    })
lightboxContainer.addEventListener('click', () => {hideLightBox()})
close.addEventListener('click', () => {hideLightBox()})
lightboxBtns.forEach(btn => {
btn.addEventListener('click', (e) => {
e.stopPropagation();
  transitionSlideHandler(e.currentTarget.id);
})
})

lightboxImage.addEventListener('click', (e) => {
e.stopPropagation();

})


const modal = document.getElementById("loginModal");
const openModalBtn = document.getElementById("openModal");
const closeModalSpan = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalSpan.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    // Handle login logic here
    alert("Login submitted!");
    modal.style.display = "none";
}




