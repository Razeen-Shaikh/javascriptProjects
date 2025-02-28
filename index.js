const projects = [
  {
    id: 1,
    title: "Color Flipper",
    url: "color-flipper",
    className: "color-flipper",
    href: "color-flipper",
    description: "Randomly generate colors in names and hex code",
  },
  {
    id: 2,
    title: "Counter",
    url: "counter",
    className: "counter",
    href: "counter",
    description: "A working counter project",
  },
  {
    id: 3,
    title: "Reviews",
    url: "reviews",
    className: "reviews",
    href: "reviews",
    description: "A working reviews project",
  },
  {
    id: 4,
    title: "Sidebar",
    url: "sidebar",
    className: "sidebar",
    href: "sidebar",
    description: "A sidebar example for a portfolio",
  },
  {
    id: 5,
    title: "Modal",
    url: "modal",
    className: "modal",
    href: "modal",
    description: "functionality of a modal using JavaScript",
  },
  {
    id: 4,
    title: "Questions",
    url: "questions",
    className: "questions",
    href: "questions",
    description: "A working questions project",
  },
  {
    id: 5,
    title: "Menu",
    url: "menu",
    className: "menu",
    href: "menu",
    description: "A Restaurant Menu to choose from.",
  },
  {
    id: 6,
    title: "Tabs",
    url: "tabs",
    className: "tabs",
    href: "tabs",
    description: "A working tabs project",
  },
  {
    id: 7,
    title: "Slider",
    url: "slider",
    className: "slider",
    href: "slider",
    description: "A working slider project",
  },
];

const projectsContainer = document.querySelector(".projects-container");

projects.forEach((project) => {
  const { id, title, description, className, href } = project;
  const projectItem = document.createElement("div");
  projectItem.className = `card ${className}`;
  projectItem.dataset.id = id;
  projectItem.style.backgroundImage = `url("public/images/${className}.webp")`;
  projectItem.style.backgroundSize = "cover";
  if (title === "Sidebar") {
    projectItem.style.backgroundPosition = "top left";
  } else {
    projectItem.style.backgroundPosition = "center";
  }

  projectItem.innerHTML = `
	<div class="content">
		<h2 class="project__title">${title}</h2>
		<p class="copy">${description}</p>
		<a href='/${href}/index.html' class="btn">View Project</a>
	</div>
	`;
  projectsContainer.appendChild(projectItem);
});
