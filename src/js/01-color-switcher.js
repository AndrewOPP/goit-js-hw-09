const elements = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),  
    body: document.querySelector("body")
}

let id = null
elements.body.classList.add("task-one")
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function color() {
    elements.body.style.backgroundColor = `${getRandomHexColor()}`

}

function swapButtonAttribute() {
    if (elements.stopButton.hasAttribute("disabled"))  {
        elements.stopButton.removeAttribute("disabled")
        elements.startButton.setAttribute("disabled", "")
    }
    else {
        elements.startButton.removeAttribute("disabled")    
        elements.stopButton.setAttribute("disabled", "")
    }
}

elements.startButton.addEventListener("click", () => { id = setInterval(color, 1000); swapButtonAttribute() })

elements.stopButton.addEventListener("click", () => { clearInterval(id); swapButtonAttribute() })

elements.stopButton.setAttribute("disabled", "")