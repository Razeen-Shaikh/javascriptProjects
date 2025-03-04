const btn = document.getElementById("btn");
const color = document.querySelector(".color");

color.textContent = "rgb(241, 245, 248)";

btn.addEventListener("click", () => {
  let r = getRandomNumber();
  let g = getRandomNumber();
  let b = getRandomNumber();
  let rgbColor = `rgb(${r}, ${g}, ${b})`;

  color.textContent = rgbColor;
  color.style.color = rgbColor;
  document.body.style.backgroundColor = rgbColor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};
