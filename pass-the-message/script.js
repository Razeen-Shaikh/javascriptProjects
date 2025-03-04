const submit = document.getElementById('submit');
const input = document.getElementById('message');
const display = document.getElementById('display');

submit.addEventListener('click', () => {
    if(input.value === "") { 
        display.textContent = "Please Enter Something";
        display.style.color = "red";
    }
    else display.textContent = input.value;
})