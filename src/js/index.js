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

const putNextImgInSlider = () => {
  if(currentSliderPosition < quantityOfImgsInSlider){
    currentSliderPosition++;
    putImgInSlider(currentSliderPosition);
  } else if(currentSliderPosition === quantityOfImgsInSlider){
    currentSliderPosition = 0;
    putImgInSlider(currentSliderPosition);
  }
};

const putPreviousImgInSlider = () => {
  if(currentSliderPosition > 0){
    currentSliderPosition--;
    putImgInSlider(currentSliderPosition);
  } else if(currentSliderPosition === 0){
    currentSliderPosition = 3;
    putImgInSlider(currentSliderPosition);
  };
};

const putImgInSlider = img => sliderContainer.setAttribute("src", sliderImg[img]);

const removeOrAddReferenceForTheCurrentImgInSlider = (...removeOrAdd) => {
  currentSliderImgReference.forEach((ref, i) => {
    removeOrAdd[i] === "add"? ref.classList.add("dot-active"):
    removeOrAdd[i] === "remove"? ref.classList.remove("dot-active"): null;
  })
}

const referenceForTheCurrentImgInSlider = () => {
  if(currentSliderPosition === 0){
    removeOrAddReferenceForTheCurrentImgInSlider("add", "remove", "remove", "remove");
  } else if(currentSliderPosition === 1){
    removeOrAddReferenceForTheCurrentImgInSlider("remove", "add", "remove", "remove");
  } else if(currentSliderPosition === 2){
    removeOrAddReferenceForTheCurrentImgInSlider("remove", "remove", "add", "remove");
  } else if(currentSliderPosition === 3){
    removeOrAddReferenceForTheCurrentImgInSlider("remove", "remove", "remove", "add");
  };
};

const imgPassAutomaticallyInSlider = () => {
  setInterval(() => {
    putNextImgInSlider();
    referenceForTheCurrentImgInSlider();
  }, 10000);
};

putImgInSlider(currentSliderPosition);
imgPassAutomaticallyInSlider();
referenceForTheCurrentImgInSlider();

document.addEventListener("click", e => {
  const el = e.target;
  const elIsANextSliderImgBtn = el.getAttribute("data-js") === "next-slider-img-btn";
  const elIsAPreviousSliderImgBtn = el.getAttribute("data-js") === "previous-slider-img-btn";
  
  elIsANextSliderImgBtn? putNextImgInSlider(): 
  elIsAPreviousSliderImgBtn? putPreviousImgInSlider(): null;

  referenceForTheCurrentImgInSlider();
});