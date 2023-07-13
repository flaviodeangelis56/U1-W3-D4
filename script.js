const createTab = function (event) {
  const main = document.querySelector("main");
  for (let i = 1; i < 77; i++) {
    const div = document.createElement("div");
    main.appendChild(div);
    const number = document.createElement("h3");
    number.innerText = i;
    div.appendChild(number);
    div.classList.add("cards");
  }
};
const createMytab = function (event) {
  const article = document.querySelector("article");
  const myTab = document.createElement("h2");
  myTab.innerText = "My tab";
  article.appendChild(myTab);
  for (let i = 1; i < 25; i++) {
    const div = document.createElement("div");
    article.appendChild(div);
    const number = document.createElement("h3");
    number.innerText = Math.floor(Math.random() * 75 + 1);
    div.appendChild(number);
    div.classList.add("cards");
  }
};
const arrayExtractNum = [];
const extractNumber = function (event) {
  const h3 = document.querySelectorAll("h3");
  const randomNum = Math.floor(Math.random() * 75 + 1);
  arrayExtractNum.push(randomNum);
  console.log(randomNum);
  console.log(arrayExtractNum);
  for (let i = 0; i < arrayExtractNum.length; i++) {
    if (randomNum !== arrayExtractNum[i]) {
      for (let i = 0; i < h3.length; i++) {
        if (parseInt(h3[i].innerText) === randomNum) {
          h3[i].classList.add("selected");
        }
      }
    }
  }
};
