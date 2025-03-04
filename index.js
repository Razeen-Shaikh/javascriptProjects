const projects = [
  {
    id: 1,
    title: "Color Flipper",
    href: "01-color-flipper",
    className: "color-flipper",
    description: "Randomly generate colors in name, RGB, and hex formats.",
  },
  {
    id: 2,
    title: "Counter",
    href: "02-counter",
    className: "counter",
    description:
      "A simple counter that changes color based on whether the number is positive or negative.",
  },
  {
    id: 3,
    title: "Reviews",
    href: "03-reviews",
    className: "reviews",
    description: "A working reviews project",
  },
  {
    id: 4,
    title: "Sidebar",
    href: "04-sidebar",
    className: "sidebar",
    description: "A sidebar example for a portfolio",
  },
  {
    id: 5,
    title: "Modal",
    href: "05-modal",
    className: "modal",
    description: "functionality of a modal using JavaScript",
  },
  {
    id: 4,
    title: "Questions",
    href: "06-questions",
    className: "questions",
    description: "A working questions project",
  },
  {
    id: 5,
    title: "Menu",
    href: "07-menu",
    className: "menu",
    description: "A Restaurant Menu to choose from.",
  },
  {
    id: 6,
    title: "Video",
    href: "08-video",
    className: "video",
    description: "A video background with a play and pause feature.",
  },
  {
    id: 7,
    title: "Scroll",
    href: "09-scroll",
    className: "scroll",
    description:
      "A navbar that slides down when scrolling and then stays at a fixed position at a certain height.",
  },
  // {
  //   id: 8,
  //   title: "Tabs",
  //   href: "10-tabs",
  //   className: "tabs",
  //   description: "A working tabs project",
  // },
  // {
  //   id: 9,
  //   title: "Slider",
  //   href: "slider",
  //   className: "slider",
  //   description: "A working slider project",
  // },
  {
    id: 10,
    title: "Background Image Slider",
    href: "bg-img-slider",
    className: "bg-img-slider",
    description: "A Background Image Slider",
  },
  {
    id: 11,
    title: "Clock",
    href: "clock",
    className: "clock",
    description: "A real time clock",
  },
  {
    id: 12,
    title: "Drum Kit",
    href: "drum-kit",
    className: "drum-kit",
    description: "A working drum kit project",
  },
  {
    id: 13,
    title: "Pass The Message",
    href: "pass-the-message",
    className: "pass-the-message",
    description: "A project to pass the message to someone",
  },
];

const projectsContainer = document.querySelector(".projects-container");

projects.forEach((project) => {
  const { id, title, description, className, href } = project;
  const projectItem = document.createElement("div");
  projectItem.className = `card ${className}`;
  projectItem.setAttribute("data-bg", `images/${className}.webp`);
  projectItem.dataset.id = id;
  const bgImage = projectItem.getAttribute("data-bg");
  if (bgImage) {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      projectItem.style.backgroundImage = `url("images/${className}.webp")`;
      projectItem.style.backgroundSize = "cover";
      if (title === "Sidebar") {
        projectItem.style.backgroundPosition = "top left";
      } else {
        projectItem.style.backgroundPosition = "center";
      }
      projectItem.classList.add("loaded");
    };
  }

  projectItem.innerHTML = `
	<div class="content">
		<h2 class="project__title">${title}</h2>
		<p class="copy">${description}</p>
		<a href='${href}/index.html' class="btn">View Project</a>
	</div>
	`;
  projectsContainer.appendChild(projectItem);
});
