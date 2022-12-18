let clockNums = document.querySelector('.clock-nums');
let secondHandle = document.querySelector('.second-handle')
let minuteHandle = document.querySelector('.minute-handle')
let hourHandle = document.querySelector('.hour-handle')
function printNums(nums) {
  for (let i = 1; i <= nums; i++) {
    let dots = document.createElement('div');
    tmp = i / 5
      if(tmp!==12 && tmp!==1 && tmp!==2 && tmp!==3 && tmp!==4 && tmp!==5 && tmp!==6 && tmp!==7 && tmp!==8 && tmp!==9 && tmp!==10 && tmp!==11){
        tmp = `<b></b>`
      }
    dots.innerHTML = `<div style="transform: rotate(${-i * 6}deg)">${tmp}</div>`;
    dots.classList.add(`clock-num`, `clock-num-${i}`)
    clockNums.append(dots)
    let numRotate = document.querySelector(`.clock-num-${i}`)
    numRotate.style.transform = `rotate(${i * 6}deg)`;
  }
}
printNums(60);

// Add functionality to clock
// window.addEventListener('DOMContentLoaded', setTime)
function setTime(){
  setInterval(()=>{
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    secondHandle.setAttribute("style", `transform:rotate(${seconds*6}deg)`)
    minuteHandle.setAttribute("style", `transform:rotate(${minutes*6+(seconds/10)}deg)`)
    hourHandle.setAttribute("style", `transform:rotate(${30*hours+(minutes/2)}deg)`)
  }, 1000)
}
setTime()