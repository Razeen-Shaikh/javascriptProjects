const secondhand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = (((minutes / 60) * 360)) + 90;
    minhand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hourDegree}deg)`;

}
setInterval(setDate, 1000);

setDate();
