function show(a) {
  let div = document.querySelector(".box");
  let res = (document.querySelector(".dropdown__input").value = a);
  div.textContent = res;
  return res;
}
const dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};
