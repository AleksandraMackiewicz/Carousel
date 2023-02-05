/* eslint-disable linebreak-style */
document.addEventListener('DOMContentLoaded', ()=> {
const slides = document.querySelector('.slides');
const totalItems = document.querySelectorAll('.slides>*').length - 1;
const allItems = document.querySelectorAll('.slides>*').length;
console.log(totalItems)
let activeItem = 0;

let controlCarouselFooter = document.querySelector('.carousel_footer');
controlCarouselFooter.innerHTML = `1 / ${allItems}`
console.log(controlCarouselFooter)


// Buttons controls


const prevButton = document.querySelector('.prev_button').addEventListener('click', () => {
  if (activeItem === 0) {
    activeItem = totalItems;
    slides.style.transform = `translateX(-${totalItems * 100}%)`;
    console.log(`if ${activeItem}`)
    controlCarouselFooter.innerHTML = `${activeItem+1} / ${allItems}`
  }else {
    activeItem--;
    slides.style.transform = `translateX(-${activeItem * 100}%)`;
    console.log(`else ${activeItem}`)
    controlCarouselFooter.innerHTML = `${activeItem+1} / ${allItems} `
  }
  });

  const nextButton = document.querySelector('.next_button').addEventListener('click', () => {
  if(activeItem < totalItems) {
    activeItem++;
      slides.style.transform = `translateX(-${activeItem * 100}%)`;
      console.log(`if ${activeItem}`)
      controlCarouselFooter.innerHTML = `${activeItem+1} / ${allItems}`
  } else {
    activeItem = 0;
    slides.style.transform = 'none';
    console.log(`else ${activeItem+1}`)
    console.log(`totalItems ${totalItems}`)
    controlCarouselFooter.innerHTML = `${activeItem+1} / ${allItems}`
  }
});

});