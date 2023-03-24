let popupEl = document.querySelector(".popup");
let buttonEl = document.querySelector(".btn--share");

buttonEl.addEventListener("click", () => {
  popupEl.classList.toggle("popup-open");
  buttonEl.classList.toggle("btn--share__open");
});
