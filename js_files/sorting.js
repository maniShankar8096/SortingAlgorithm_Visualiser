const barConatiner = document.querySelector(".bars-container");
const newArrayBtn = document.getElementById("newArrayBtn");

const barHTML = (height) =>
  `<div class="bars" style="height: ${height}px"></div>`;
const heightsArray = [150, 200, 250, 300, 50, 75, 125, 100, 175];

const generateNewArray = function () {
  let newArray = [];
  barConatiner.textContent = "";
  for (i = 0; i < 35; i++) {
    newArray.push(Math.round(Math.random() * 100) * 3);
  }
  newArray.forEach((height) => {
    barConatiner.insertAdjacentHTML("beforeend", barHTML(height));
  });
};
generateNewArray();
newArrayBtn.addEventListener("click", () => {
  generateNewArray();
});
