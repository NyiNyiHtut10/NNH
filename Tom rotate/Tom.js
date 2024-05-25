const imageContainer = document.querySelector(".container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
  x = x +  60;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x = x - 60;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}