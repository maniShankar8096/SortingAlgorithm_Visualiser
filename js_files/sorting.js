const barConatiner = document.querySelector(".bars-container");
const newArrayBtn = document.getElementById("newArrayBtn");

const barHTML = (height) =>
  `<div class="bars" style="height: ${height}px"></div>`;

const generateNewArray = function () {
  let newArray = [];
  barConatiner.textContent = "";
  for (i = 0; i < 35; i++) {
    const height = Math.round(Math.random() * 100) * 3;
    height < 30 ? newArray.push(height + 40) : newArray.push(height);
  }
  newArray.forEach((height) => {
    barConatiner.insertAdjacentHTML("beforeend", barHTML(height));
  });
};
generateNewArray();
newArrayBtn.addEventListener("click", () => {
  generateNewArray();
});
