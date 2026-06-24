const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getNameOfColor = (hexColor) => {
  try {
    // Check if ntc is available (external dependency)
    if (typeof ntc !== 'undefined' && ntc.name) {
      var n_match = ntc.name(hexColor);
      var n_rgb = n_match[0];
      var n_name = n_match[1];
      var n_exactmatch = n_match[2];

      color.textContent = n_name;
    } else {
      // Fallback to hex color if external library fails to load
      color.textContent = hexColor;
    }
  } catch (error) {
    console.warn('Color name lookup failed, using hex value:', error);
    color.textContent = hexColor;
  }
  
  color.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
};

getNameOfColor("#f1f5f8");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let index = getRandomNumber();
    hexColor += colors[index];
  }
  getNameOfColor(hexColor);
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
