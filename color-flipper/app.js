const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

color.textContent = "green";

btn.addEventListener("click", function () {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		let index = getRandomNumber();
		hexColor += colors[index];
	}
	var n_match = ntc.name(hexColor);
	n_rgb = n_match[0]; // RGB value of closest match
	n_name = n_match[1]; // Text string: Color name
	n_exactmatch = n_match[2]; // True if exact color match

	color.textContent = n_name;
	color.style.color = hexColor;
	document.body.style.backgroundColor = hexColor;
});

const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};

// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
// 	const randomNumber = getRandomNumber();

// 	document.body.style.backgroundColor = colors[randomNumber];
// 	color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
// 	return Math.floor(Math.random() * colors.length);
// }
