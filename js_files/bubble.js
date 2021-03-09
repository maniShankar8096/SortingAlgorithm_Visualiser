const swap = (el1, el2) => {
  const h1 = el1.style.height;
  const h2 = el2.style.height;
  el1.style.height = h2;
  el2.style.height = h1;
};
let barsArray = [];
const bubbleFunc = async function () {
  barsArray = Array.from(document.getElementsByClassName("bars"));
  const n = barsArray.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      barsArray[j].style.backgroundColor = "white";
      barsArray[j + 1].style.backgroundColor = "white";
      if (
        parseInt(barsArray[j].style.height) >
        parseInt(barsArray[j + 1].style.height)
      ) {
        let temp = barsArray[j].style.height;
        barsArray[j].style.height = barsArray[j + 1].style.height;
        barsArray[j + 1].style.height = temp;
        barsArray[j + 1].style.backgroundColor = "palegreen";
      }
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 130);
      });
      barsArray[j].style.backgroundColor = "orangered";
      barsArray[j + 1].style.backgroundColor = "orangered";
    }
    barsArray[n - i - 1].style.backgroundColor = "green";
  }
  barsArray[0].style.backgroundColor = "green";
};
setTimeout(() => {
  const bubbleBtn = document.getElementById("bubble");
  console.log(bubbleBtn);
  bubbleBtn.addEventListener("click", bubbleFunc);
}, 100);
