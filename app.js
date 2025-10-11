

const hours = document.getElementById("hours");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");



setInterval(() =>{
    let currentTime = new Date();
hours.innerHTML = currentTime.getHours();
minutes.innerHTML = currentTime.getMinutes();
seconds.innerHTML = currentTime.getSeconds();
}, 1000)
