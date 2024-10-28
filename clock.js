let hour = document.querySelector(".hours");
let second = document.querySelector(".seconds");
let minute = document.querySelector(".minutes");


function getTime() {
  const date = new Date()
  hour.textContent = `${date.getHours()}`
  minute.textContent = `:${date.getMinutes()}`
  second.textContent = `:${date.getSeconds()}`
}

setInterval(getTime,1000)
