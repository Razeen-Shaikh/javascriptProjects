const colorMode = document.getElementById("color_mode");

function toggleColorMode(element) {
  const isChecked = $(element).prop("checked");
  const body = $("body");
  const nav = $("nav");

  if (isChecked) {
    body.addClass("dark-preview").removeClass("white-preview");
    nav.addClass("dark-preview").removeClass("white-preview");
  } else {
    body.addClass("white-preview").removeClass("dark-preview");
    nav.addClass("white-preview").removeClass("dark-preview");
  }
}

colorMode.addEventListener("change", toggleColorMode);
