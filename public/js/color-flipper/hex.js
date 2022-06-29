const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

color.textContent = "#f1f5f8";

btn.addEventListener("click", () => {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		let index = getRandomNumber();
		hexColor += hex[index];
	}
	color.textContent = hexColor;
	color.style.color = hexColor;
	document.body.style.backgroundColor = hexColor;
});

const getRandomNumber = () => {
	return Math.floor(Math.random() * hex.length);
};
