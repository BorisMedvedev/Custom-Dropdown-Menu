function show(a) {
  document.querySelector('.dropdown__input').value = a;
}

const dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
  dropdown.classList.toggle('active');
}
