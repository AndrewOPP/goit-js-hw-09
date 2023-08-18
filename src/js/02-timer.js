// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector("button[data-start]")
const myInput = document.querySelector("#datetime-picker");
let timerNeedTime
flatpickr("#datetime-picker", {
     enableTime: true,
     time_24hr: true,
     defaultDate: new Date(),
     minuteIncrement: 1,
    onClose(selectedDates) {
        const nowDate = new Date()
        if (selectedDates[0] - nowDate < 0) {
            startButton.setAttribute("disabled", "")
            window.alert("Please choose a date in the future")    
        } 
        else {
            timerNeedTime = Math.ceil((selectedDates[0] - nowDate) / 1000)
            startButton.removeAttribute("disabled")
        }


  },
});

const days = document.querySelector("span[data-days]")
const hours = document.querySelector("span[data-hours]")
const minutes = document.querySelector("span[data-minutes]")
const seconds = document.querySelector("span[data-seconds]")
const timer = document.querySelector(".timer")

timer.classList.add("timer-class")
startButton.addEventListener("click", handler)

function currentTime() {
    days.textContent = `${Math.floor(timerNeedTime / 86400)}`.padStart(2, "0")
    hours.textContent = `${Math.floor(timerNeedTime % 86400 / 3600)}`.padStart(2, "0")
    minutes.textContent = `${Math.floor(timerNeedTime % 86400 % 3600 / 60 )}`.padStart(2, "0")
    seconds.textContent = `${Math.floor(timerNeedTime % 86400 % 3600 % 60)}`.padStart(2, "0")
    timerNeedTime -= 1
}

function handler() {
    currentTime()
   const interval = setInterval(() => {
        currentTime() 
        if (timerNeedTime < 0) {
            clearInterval(interval)
        }
    }, 1000)
    
}

  

