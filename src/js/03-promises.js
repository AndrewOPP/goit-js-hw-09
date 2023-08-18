
const buttonSubmit = document.querySelector("button")
const form = document.querySelector("form")
const { delay, step, amount } = form.elements
buttonSubmit.addEventListener("click", createPromise)
let position = 0
let stepValue = 0

function createPromise() {
  setTimeout(() => {
    for (let index = 0; index < amount.value; index += 1) {
      position += 1
      stepValue += Number(step.value)
      newPromise(position, stepValue)
    }
  }, delay.value)
  setTimeout(() => {
    position = 0
    stepValue = 0
  }, step.value * amount + delay.value)
}

function newPromise(position, stepValue) {
let a = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
       resolve()
  } else {
       reject()
    }
  }) 
  setTimeout(() => {
    returnResult(a, position, stepValue)
    stepValue = 0
  }, stepValue)
}

function returnResult(a, position, stepValue) {
  a.then(() => {
    console.log(`✅ Fulfilled promise ${position} in ${stepValue}ms`);
  }).catch(() => {
    console.log(`❌ Rejected promise ${position} in ${stepValue}ms`);
  });
}