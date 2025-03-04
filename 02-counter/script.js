let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    styles.contains("decrease")
      ? count--
      : styles.contains("increase")
      ? count++
      : (count = 0);
    count > 0
      ? (value.style.color = "green")
      : count < 0
      ? (value.style.color = "red")
      : (value.style.color = "#222");
    value.textContent = count;
  });
});
