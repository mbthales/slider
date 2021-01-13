const sliderContainer = document.querySelector("[data-js=slider]");
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
});

setInterval(() => {
  if(currentSliderPosition < quantityOfImgsInSlider){
    currentSliderPosition++;
    putImgInSlider(currentSliderPosition);
  } else if(currentSliderPosition === quantityOfImgsInSlider){
    currentSliderPosition = 0;
    putImgInSlider(currentSliderPosition);
  }
}, 10000)

const putImgInSlider = img => sliderContainer.setAttribute("src", sliderImg[img]);

putImgInSlider(currentSliderPosition);