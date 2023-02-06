/* eslint-disable linebreak-style */

// document.addEventListener('DOMContentLoaded', ()=> {

class Carousel {
  constructor(){
    const slides = document.querySelector('.slides');
    this.totalItems = document.querySelectorAll('.slides>*').length - 1;
    this.allItems = document.querySelectorAll('.slides>*').length;
    console.log(this.totalItems)
    this.activeItem = 0;
    
    let controlCarouselFooter = document.querySelector('.carousel_footer');
    controlCarouselFooter.innerHTML = `1 / ${this.allItems}`
    console.log(controlCarouselFooter)

   

    console.log(`total items ${this.totalItems}`)
    const prevButton = document.querySelector('.prev_button').addEventListener('click', this.prevBut.bind(this));
    const nextButton = document.querySelector('.next_button').addEventListener('click', this.nextBut.bind(this));
  }



// Buttons controls

prevBut(){
  console.log(`total items ${this.totalItems}`)
// const prevButton = document.querySelector('.prev_button').addEventListener('click', () => {
  const slides = document.querySelector('.slides');
  let controlCarouselFooter = document.querySelector('.carousel_footer');

  if (this.activeItem === 0) {
    this.activeItem = this.totalItems;
    slides.style.transform = `translateX(-${this.totalItems * 100}%)`;
    console.log(`if ${this.activeItem}`)
    controlCarouselFooter.innerHTML = `${this.activeItem+1} / ${this.allItems}`
  }else {
    this.activeItem--;
    slides.style.transform = `translateX(-${this.activeItem * 100}%)`;
    console.log(`else ${this.activeItem}`)
    controlCarouselFooter.innerHTML = `${this.activeItem+1} / ${this.allItems} `
  }
  };

  nextBut(){
    const slides = document.querySelector('.slides');
    let controlCarouselFooter = document.querySelector('.carousel_footer');

  if(this.activeItem < this.totalItems) {
    this.activeItem++;
      slides.style.transform = `translateX(-${this.activeItem * 100}%)`;
      console.log(`if ${this.activeItem}`)
      controlCarouselFooter.innerHTML = `${this.activeItem+1} / ${this.allItems}`
  } else {
    this.activeItem = 0;
    slides.style.transform = 'none';
    console.log(`else ${this.activeItem+1}`)
    console.log(`this.totalItems ${this.totalItems}`)
    controlCarouselFooter.innerHTML = `${this.activeItem+1} / ${this.allItems}`
  }
}
};
// });

const activator = new Carousel();
