// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgerMenu = document.querySelector(".hamburger-menu");
//   const navMenu = document.querySelector(".nav-menu");
//   const navbar = document.querySelector("#navbar");
//   const navLinks = document.querySelectorAll(".nav-menu a");

//   // Toggle mobile menu
//   hamburgerMenu.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });

//   // Close menu when a link is clicked
//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       navMenu.classList.remove("active");
//     });
//   });

//   // Sticky navbar
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   });

//   // Smooth scrolling for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });

//   // Initialize menu gallery
//   let slideIndex = 1;
//   showSlides(slideIndex);

//   // Make plusDivs function available globally
//   window.plusDivs = function (n) {
//     showSlides((slideIndex += n));
//   };

//   function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//   }

//   // Accordion functionality (if needed)
//   const accordions = document.querySelectorAll(".accordion");
//   accordions.forEach((accordion) => {
//     accordion.addEventListener("click", () => {
//       accordion.classList.toggle("active");
//       const panel = accordion.nextElementSibling;
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         panel.style.display = "block";
//       }
//     });
//   });
// });





