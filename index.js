let menu_bar = document.getElementById('menu_icon');
let humburger = document.getElementById('hum_menu');
let nav_menu = document.getElementById('nav_link');

menu_bar.onclick = () =>{
    humburger.classList.toggle('bi-x');
    nav_menu.classList.toggle('show_menu');
}


var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });