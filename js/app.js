let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

window.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slide", {
   grapCursor: true,
   loop: true,
   centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slide", {
   grapCursor: true,
   loop: true,
   centeredSlides: true,
   spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
  food.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
    close.classList.remove('active');
  });
};


lightGallery(document.querySelector('.gallery .gallerycontainer'));
lightGallery(gallery, gallerycontainer,{
  controls: true,
  counter: false,
  download: false
})

var swiper = new Swiper(".menu-slider", {
   grapCursor: true,
   loop: true,
   autoHeight: true,
   centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


var swiper = new Swiper(".blogs-slide", {
   grapCursor: true,
   loop: true,
   autoHeight: true,
   centeredSlides: true,
   spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
});
