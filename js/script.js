let clockNums = document.querySelector('.clock-nums');
let clockHandle = document.querySelector('.clock-handle');
function printNums(nums) {
  for (let i = 1; i <= nums; i++) {
    let num = document.createElement('div');
    tmp = i / 5
      if(tmp!==12 && tmp!==1 && tmp!==2 && tmp!==3 && tmp!==4 && tmp!==5 && tmp!==6 && tmp!==7 && tmp!==8 && tmp!==9 && tmp!==10 && tmp!==11){
        tmp = "."
      }
    num.innerHTML = `<div style="transform: rotate(${-i * 6}deg)">${tmp}</div>`;
    num.classList.add(`clock-num`, `clock-num-${i}`)
    clockNums.append(num)
    let numRotate = document.querySelector(`.clock-num-${i}`)
    numRotate.style.transform = `rotate(${i * 6}deg)`;
  }
}
printNums(60);