const form = document.querySelector("form")
const { delay, step, amount } = form.elements
form.addEventListener("submit", createPromise)
let position = 0
let stepValue = 0

//Функция для решения задания
function createPromise(event) {
  event.preventDefault()

// Вызов первого элемента в нужное время
  setTimeout(() => {
    newPromise(position, Number(delay.value))
    stepValue += Number(delay.value)
  }, delay.value)
// Вызов остальных элементов в нужное время
  setTimeout(() => {
    for (let index = 0; index < amount.value - 1; index += 1) {
      position += 1
      stepValue +=  Number(step.value)
      newPromise(position, stepValue)
    }
  }, delay.value)
// Обновление значений после конца действия 
  setTimeout(() => {
    position = 1
    stepValue = 0
  }, step.value * amount + delay.value)

}

//Функция для создания промисов
function newPromise(position, stepValue) {
// Создание промисов и обработка промисов
  setTimeout(() => {
    let a = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
       resolve()
  } else {
       reject()
    }
  }) 
    returnResult(a, position, stepValue)
  }, stepValue - Number(delay.value))
}


  //Функция для обработки промисов
function returnResult(a, position, stepValue) {
  a.then(() => {
    console.log(`✅ Fulfilled promise ${position} in ${stepValue}ms`);
  }).catch(() => {
    console.log(`❌ Rejected promise ${position} in ${stepValue}ms`);
  });
}