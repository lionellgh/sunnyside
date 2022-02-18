



 const hamburger = document.querySelector(".ham");
 const navsub = document.querySelector(".nav-sub");
 const container = document.querySelector(".click-event");
 //console.log(container);


// MENU HAMBURGER ANIMATION
 hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("change")
  navsub.classList.toggle("nav-change")
 });

//APPARITION MENU UL-LI
 container.addEventListener('click', ()=> {
  navsub.classList.toggle('show');

 })
