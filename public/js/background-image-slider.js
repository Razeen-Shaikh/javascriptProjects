const arrayImages = [
	{
		src: "lerone-pieters-Q6Pci2AxbK8-unsplash",
		url: "https://unsplash.com/@thevantagepoint718?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
		name: "Lerone Pieters",
	},
	{
		src: "marialaura-gionfriddo-k4RGqmwqIMs-unsplash",
		url: "https://unsplash.com/@gionsnow?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
		name: "Marialaura Gionfriddo",
	},
	{
		src: "windows-PnkX_rp53SE-unsplash",
		url: "https://unsplash.com/@windows?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
		name: "Windows",
	},
	{
		src: "tobias-tullius-YM6YQMfRzCg-unsplash",
		url: "https://unsplash.com/@tobiastu?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
		name: "Tobias Tullius",
	},
	{
		src: "harrison-fitts-vNO7qIemcKY-unsplash",
		url: "https://unsplash.com/@harrisonfitts?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
		name: "Harrison Fitts",
	},
];

const grid = document.querySelector(".grid");
const buttons = document.querySelectorAll(".btn");
const url = document.getElementById("url");
let i = 0;

(function slide() {
	i = Math.floor(Math.random() * arrayImages.length);
	document.body.style.backgroundImage = `url('../images/${arrayImages[i].src}.webp')`
	url.setAttribute("href", arrayImages[i].url);
	url.textContent = arrayImages[i].name;
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			if (button.classList.contains("btn-left")) {
				i--;
				if (i < 0) i = arrayImages.length - 1;
				url.setAttribute("href", arrayImages[i].url);
				url.textContent = arrayImages[i].name;
				document.body.style.backgroundImage = `url('../images/${arrayImages[i].src}.webp')`
			}
			if (button.classList.contains("btn-right")) {
				i++;
				if (i > arrayImages.length - 1) i = 0;
				url.setAttribute("href", arrayImages[i].url);
				url.textContent = arrayImages[i].name;
				document.body.style.backgroundImage = `url('../images/${arrayImages[i].src}.webp')`
			}
		});
	});
})();
