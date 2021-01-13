const sliderContainer = document.querySelector("[data-js=slider]");
const currentSliderImgReference = document.querySelectorAll(".dot");
let currentSliderPosition = 0;

const sliderImg = [
  "./src/img/photo-1.jpg",
  "./src/img/photo-2.jpg",
  "./src/img/photo-3.jpg",
  "./src/img/photo-4.jpg"
];
const quantityOfImgsInSlider = sliderImg.length - 1;

document.addEventListener("click", e => {
  const element = e.target;

  if(element.getAttribute("data-js") === "next-slider-img-btn"){   
    if(currentSliderPosition < quantityOfImgsInSlider){
      currentSliderPosition++;
      putImgInSlider(currentSliderPosition);
    } else if(currentSliderPosition === quantityOfImgsInSlider){
      currentSliderPosition = 0;
      putImgInSlider(currentSliderPosition);
    }
  } else if(element.getAttribute("data-js") === "previous-slider-img-btn"){
    if(currentSliderPosition > 0){
      currentSliderPosition--;
      putImgInSlider(currentSliderPosition);
    } else if(currentSliderPosition === 0){
      currentSliderPosition = 3
      putImgInSlider(currentSliderPosition);
    }
  }

  referenceForTheCurrentImgInSlider();
});

setInterval(() => {
  if(currentSliderPosition < quantityOfImgsInSlider){
    currentSliderPosition++;
    putImgInSlider(currentSliderPosition);
  } else if(currentSliderPosition === quantityOfImgsInSlider){
    currentSliderPosition = 0;
    putImgInSlider(currentSliderPosition);
  }

  referenceForTheCurrentImgInSlider();
}, 10000)

const putImgInSlider = img => sliderContainer.setAttribute("src", sliderImg[img]);

const referenceForTheCurrentImgInSlider = () => {
  if(currentSliderPosition === 0){
    currentSliderImgReference[0].classList.add("dot-active")
    currentSliderImgReference[1].classList.remove("dot-active")
    currentSliderImgReference[2].classList.remove("dot-active")
    currentSliderImgReference[3].classList.remove("dot-active")
  } else if(currentSliderPosition === 1){
    currentSliderImgReference[0].classList.remove("dot-active")
    currentSliderImgReference[1].classList.add("dot-active")
    currentSliderImgReference[2].classList.remove("dot-active")
    currentSliderImgReference[3].classList.remove("dot-active")
  } else if(currentSliderPosition === 2){
    currentSliderImgReference[0].classList.remove("dot-active")
    currentSliderImgReference[1].classList.remove("dot-active")
    currentSliderImgReference[2].classList.add("dot-active")
    currentSliderImgReference[3].classList.remove("dot-active")
  } else if(currentSliderPosition === 3){
    currentSliderImgReference[0].classList.remove("dot-active")
    currentSliderImgReference[1].classList.remove("dot-active")
    currentSliderImgReference[2].classList.remove("dot-active")
    currentSliderImgReference[3].classList.add("dot-active")
  }
}

referenceForTheCurrentImgInSlider();

putImgInSlider(currentSliderPosition);