const projects = [
  {
    id: 1,
    title: "Color Flipper",
    href: "01-color-flipper",
    className: "color-flipper",
    description: "Randomly generate colors in name, RGB, and hex formats.",
    difficulty: "beginner",
    tags: ["colors", "random", "dom"],
    featured: true
  },
  {
    id: 2,
    title: "Counter",
    href: "02-counter",
    className: "counter",
    description: "A simple counter that changes color based on whether the number is positive or negative.",
    difficulty: "beginner",
    tags: ["counter", "math", "dom"],
    featured: true
  },
  {
    id: 3,
    title: "Reviews",
    href: "03-reviews",
    className: "reviews",
    description: "A working reviews project with navigation and random selection.",
    difficulty: "intermediate",
    tags: ["reviews", "navigation", "arrays"],
    featured: true
  },
  {
    id: 4,
    title: "Sidebar",
    href: "04-sidebar",
    className: "sidebar",
    description: "A responsive sidebar navigation with smooth animations.",
    difficulty: "intermediate",
    tags: ["navigation", "responsive", "animations"],
    featured: false
  },
  {
    id: 5,
    title: "Modal",
    href: "05-modal",
    className: "modal",
    description: "Interactive modal with overlay and close functionality.",
    difficulty: "beginner",
    tags: ["modal", "overlay", "events"],
    featured: true
  },
  {
    id: 6,
    title: "Questions",
    href: "06-questions",
    className: "questions",
    description: "Interactive FAQ section with expandable questions and answers.",
    difficulty: "intermediate",
    tags: ["faq", "accordion", "toggles"],
    featured: true
  },
  {
    id: 7,
    title: "Menu",
    href: "07-menu",
    className: "menu",
    description: "Dynamic restaurant menu with filtering and categorization.",
    difficulty: "intermediate",
    tags: ["menu", "filtering", "dynamic"],
    featured: true
  },
  {
    id: 8,
    title: "Video",
    href: "08-video",
    className: "video",
    description: "Video player with custom controls and background video support.",
    difficulty: "advanced",
    tags: ["video", "media", "controls"],
    featured: false
  },
  {
    id: 9,
    title: "Scroll",
    href: "09-scroll",
    className: "scroll",
    description: "Smart navigation that adapts to scroll position with smooth transitions.",
    difficulty: "advanced",
    tags: ["scroll", "navigation", "animations"],
    featured: true
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
    description: "Smooth image slider with automatic transitions and navigation controls.",
    difficulty: "intermediate",
    tags: ["slider", "images", "carousel"],
    featured: true
  },
  {
    id: 11,
    title: "Clock",
    href: "clock",
    className: "clock",
    description: "Real-time analog clock with smooth animations and modern design.",
    difficulty: "intermediate",
    tags: ["clock", "time", "animations"],
    featured: true
  },
  {
    id: 12,
    title: "Drum Kit",
    href: "drum-kit",
    className: "drum-kit",
    description: "Interactive drum kit with keyboard controls and visual feedback.",
    difficulty: "advanced",
    tags: ["audio", "keyboard", "interactive"],
    featured: true
  },
  {
    id: 13,
    title: "Pass The Message",
    href: "pass-the-message",
    className: "pass-the-message",
    description: "Message sharing application with input validation and display.",
    difficulty: "beginner",
    tags: ["forms", "validation", "dom"],
    featured: false
  },
  {
    id: 14,
    title: "Tabs",
    href:"10-tabs",
    className:"tabs",
    description:"A working tabs project",
    difficulty:"intermediate",
    tags:["tabs","navigation","dynamic"],
    featured:true
  }
  // {
  //   id: 8,
  //   title: "Tabs",
  //   href: "10-tabs",
  //   className: "tabs",
  //   description: "A working tabs project",
  // },
];

const projectsContainer = document.querySelector("#projects-container");
const paginationNav = document.getElementById("pagination");
const paginationPages = document.getElementById("pagination-pages");
const paginationSummary = document.getElementById("pagination-summary");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");

let filteredProjects = [...projects];
let currentFilter = 'all';
let currentSort = 'default';
let currentSearch = '';
let currentPage = 1;

const ROWS_PER_PAGE = 2;

function getGridColumnCount() {
  if (!projectsContainer) return 1;

  const style = getComputedStyle(projectsContainer);
  const tracks = style.gridTemplateColumns.split(/\s+/).filter(Boolean);

  if (tracks.length > 0) {
    return tracks.length;
  }

  const minColumnWidth = 320;
  const gap = parseFloat(style.columnGap || style.gap) || 32;
  const width = projectsContainer.clientWidth;
  return Math.max(1, Math.floor((width + gap) / (minColumnWidth + gap)));
}

function getProjectsPerPage() {
  return getGridColumnCount() * ROWS_PER_PAGE;
}

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
  if (projectsContainer) {
    projectsContainer.style.opacity = '0';
    projectsContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      projectsContainer.style.transition = 'all 0.6s ease-out';
      projectsContainer.style.opacity = '1';
      projectsContainer.style.transform = 'translateY(0)';
    }, 100);
  }
  
  // Initialize search and filter functionality
  initializeSearchAndFilter();
  initializePagination();
  initializeResponsivePagination();
  renderProjects();
  updateStats();
});

// Search and Filter Functionality
function initializeSearchAndFilter() {
  const searchInput = document.getElementById('project-search');
  const filterSelect = document.getElementById('project-filter');
  const sortSelect = document.getElementById('project-sort');
  
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  if (filterSelect) {
    filterSelect.addEventListener('change', handleFilter);
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSort);
  }
}

function initializeResponsivePagination() {
  let resizeTimeout;

  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (currentPage > getTotalPages()) {
        currentPage = getTotalPages();
      }
      renderProjects();
      updateStats();
      renderPagination();
    }, 150);
  };

  window.addEventListener('resize', handleResize);

  if (projectsContainer && typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(handleResize);
    observer.observe(projectsContainer);
  }
}

function initializePagination() {
  if (prevPageBtn) {
    prevPageBtn.addEventListener('click', () => goToPage(currentPage - 1));
  }

  if (nextPageBtn) {
    nextPageBtn.addEventListener('click', () => goToPage(currentPage + 1));
  }
}

function handleSearch(e) {
  currentSearch = e.target.value.toLowerCase();
  currentPage = 1;
  filterAndSortProjects();
}

function handleFilter(e) {
  currentFilter = e.target.value;
  currentPage = 1;
  filterAndSortProjects();
}

function handleSort(e) {
  currentSort = e.target.value;
  currentPage = 1;
  filterAndSortProjects();
}

function getTotalPages() {
  return Math.max(1, Math.ceil(filteredProjects.length / getProjectsPerPage()));
}

function getPaginatedProjects() {
  const projectsPerPage = getProjectsPerPage();
  const start = (currentPage - 1) * projectsPerPage;
  return filteredProjects.slice(start, start + projectsPerPage);
}

function goToPage(page) {
  const totalPages = getTotalPages();
  const nextPage = Math.min(Math.max(page, 1), totalPages);

  if (nextPage === currentPage) return;

  currentPage = nextPage;
  renderProjects();
  updateStats();
  renderPagination();

  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function filterAndSortProjects() {
  // Filter projects
  filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(currentSearch) ||
                         project.description.toLowerCase().includes(currentSearch) ||
                         project.tags.some(tag => tag.toLowerCase().includes(currentSearch));
    
    const matchesFilter = currentFilter === 'all' || project.difficulty === currentFilter;
    
    return matchesSearch && matchesFilter;
  });
  
  // Sort projects
  if (currentSort === 'name') {
    filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === 'name-desc') {
    filteredProjects.sort((a, b) => b.title.localeCompare(a.title));
  } else if (currentSort === 'difficulty') {
    const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
    filteredProjects.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }

  if (currentPage > getTotalPages()) {
    currentPage = getTotalPages();
  }
  
  renderProjects();
  updateStats();
  renderPagination();
}

function updateStats() {
  const totalProjects = document.getElementById('total-projects');
  const filteredProjectsCount = document.getElementById('filtered-projects');
  const pageInfo = document.getElementById('page-info');
  const noResults = document.getElementById('no-results');
  const totalPages = getTotalPages();
  
  if (totalProjects) totalProjects.textContent = projects.length;
  if (filteredProjectsCount) filteredProjectsCount.textContent = filteredProjects.length;
  if (pageInfo) pageInfo.textContent = `${currentPage} / ${totalPages}`;
  
  if (noResults) {
    noResults.style.display = filteredProjects.length === 0 ? 'block' : 'none';
  }

  if (paginationNav) {
    paginationNav.hidden = filteredProjects.length === 0;
  }
}

function renderPagination() {
  if (!paginationPages || !paginationNav) return;

  const totalPages = getTotalPages();
  const projectsPerPage = getProjectsPerPage();
  const showPagination = filteredProjects.length > projectsPerPage;

  paginationNav.hidden = !showPagination || filteredProjects.length === 0;
  paginationPages.innerHTML = '';

  if (!showPagination) {
    if (paginationSummary) paginationSummary.textContent = '';
    return;
  }

  getVisiblePageNumbers(currentPage, totalPages).forEach((page) => {
    if (page === '...') {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'pagination-ellipsis';
      ellipsis.textContent = '…';
      ellipsis.setAttribute('aria-hidden', 'true');
      paginationPages.appendChild(ellipsis);
      return;
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = `pagination-page${page === currentPage ? ' active' : ''}`;
    button.textContent = page;
    button.setAttribute('aria-label', `Go to page ${page}`);
    button.setAttribute('aria-current', page === currentPage ? 'page' : 'false');

    if (page === currentPage) {
      button.disabled = true;
    } else {
      button.addEventListener('click', () => goToPage(page));
    }

    paginationPages.appendChild(button);
  });

  if (prevPageBtn) prevPageBtn.disabled = currentPage <= 1;
  if (nextPageBtn) nextPageBtn.disabled = currentPage >= totalPages;

  if (paginationSummary) {
    const projectsPerPage = getProjectsPerPage();
    const start = (currentPage - 1) * projectsPerPage + 1;
    const end = Math.min(currentPage * projectsPerPage, filteredProjects.length);
    paginationSummary.textContent = `Showing ${start}–${end} of ${filteredProjects.length} projects`;
  }
}

function getVisiblePageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set([1, total, current]);
  if (current > 2) pages.add(current - 1);
  if (current < total - 1) pages.add(current + 1);
  if (current <= 3) pages.add(2).add(3);
  if (current >= total - 2) pages.add(total - 1).add(total - 2);

  const sorted = [...pages].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      result.push('...');
    }
    result.push(sorted[i]);
  }

  return result;
}

function renderProjects() {
  if (!projectsContainer) return;
  
  // Clear existing projects
  projectsContainer.innerHTML = '';
  
  getPaginatedProjects().forEach((project, index) => {
    const { id, title, description, className, href, difficulty, tags, featured } = project;
    const projectItem = document.createElement("div");
    projectItem.className = `card ${className} loading`;
    projectItem.setAttribute("data-bg", `images/${className}.webp`);
    projectItem.dataset.id = id;
    projectItem.dataset.difficulty = difficulty;
    
    // Add staggered animation delay
    projectItem.style.animationDelay = `${index * 0.1}s`;
    
    const bgImage = projectItem.getAttribute("data-bg");
    if (bgImage) {
      const img = new Image();
      img.src = bgImage;
      img.onload = () => {
        // Set background image on the card's ::before pseudo-element
        projectItem.style.setProperty('--bg-image', `url("images/${className}.webp")`);
        if (title === "Sidebar") {
          projectItem.style.setProperty('--bg-position', 'top left');
        } else {
          projectItem.style.setProperty('--bg-position', 'center');
        }
        projectItem.classList.remove("loading");
        projectItem.classList.add("loaded");
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${bgImage}`);
        // Set a fallback gradient background
        projectItem.style.setProperty('--bg-image', 'none');
        projectItem.style.background = `linear-gradient(135deg, var(--clr-primary), var(--clr-primary-light))`;
        projectItem.classList.remove("loading");
        projectItem.classList.add("loaded");
      };
    } else {
      projectItem.classList.remove("loading");
      projectItem.classList.add("loaded");
    }

    // Create difficulty badge
    const difficultyBadge = getDifficultyBadge(difficulty);
    
    // Create tags
    const tagsHtml = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Create featured badge
    const featuredBadge = featured ? '<span class="featured-badge">Featured</span>' : '';

    projectItem.innerHTML = `
      <div class="content">
        <div class="card-header">
          ${featuredBadge}
          ${difficultyBadge}
        </div>
        <h2 class="project__title">${title}</h2>
        <p class="copy">${description}</p>
        <div class="tags-container">
          ${tagsHtml}
        </div>
        <a href='${href}/index.html' class="btn">View Project</a>
      </div>
    `;
    
    projectsContainer.appendChild(projectItem);
  });

  renderPagination();
}

function getDifficultyBadge(difficulty) {
  const badges = {
    'beginner': '<span class="difficulty-badge beginner">Beginner</span>',
    'intermediate': '<span class="difficulty-badge intermediate">Intermediate</span>',
    'advanced': '<span class="difficulty-badge advanced">Advanced</span>'
  };
  return badges[difficulty] || '';
}
