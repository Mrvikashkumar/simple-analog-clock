let clockNums = document.querySelector('.clock-nums');
let clockHandle = document.querySelector('.clock-handle');
function printNums() {
  for (let i = 1; i <= 12; i++) {
    let num = document.createElement('div');
    num.innerHTML = `<div style="transform: rotate(${-i * 30}deg)">${i}</div>`;
    num.classList.add('clock-num')
    num.classList.add(`clock-num-${i}`)
    clockNums.append(num)
    if (num.textContent == i) {
      let numRotate = document.querySelector(`.clock-num-${i}`)
      numRotate.style.transform = `rotate(${i * 30}deg)`
    }
  }
}
printNums();