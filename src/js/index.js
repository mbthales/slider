const sliderContainer = document.querySelector("[data-js=slider]");
const currentSliderImgReferences = document.querySelectorAll
("[data-js=current-slider-img-reference");

const imgsInSlider = [
  "./src/img/photo-1.jpg",
  "./src/img/photo-2.jpg",
  "./src/img/photo-3.jpg",
  "./src/img/photo-4.jpg"
];
const quantityOfImgsInSlider = imgsInSlider.length - 1;
let currentSliderPosition = 0;

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

const putImgInSlider = img => sliderContainer.setAttribute("src", imgsInSlider[img]);

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

const removeOrAddReferenceForTheCurrentImgInSlider = (...removeOrAdd) => {
  currentSliderImgReferences.forEach((ref, i) => {
    removeOrAdd[i] === "add"? ref.classList.add("dot-active"):
    removeOrAdd[i] === "remove"? ref.classList.remove("dot-active"): null;
  });
};

const imgPassAutomaticallyInSlider = () => {
  setInterval(() => {
    putNextImgInSlider();
    referenceForTheCurrentImgInSlider();
  }, 10000);
};

document.addEventListener("click", e => {
  const el = e.target;
  const elIsANextSliderImgBtn = el.getAttribute("data-js") === "next-slider-img-btn";
  const elIsAPreviousSliderImgBtn = el.getAttribute("data-js") === "previous-slider-img-btn";
  
  elIsANextSliderImgBtn? putNextImgInSlider(): 
  elIsAPreviousSliderImgBtn? putPreviousImgInSlider(): null;
  
  referenceForTheCurrentImgInSlider();
});

putImgInSlider(currentSliderPosition);
imgPassAutomaticallyInSlider();
referenceForTheCurrentImgInSlider();