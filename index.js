const form = document.querySelector("form");

//Pour stocker mes todo
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

//Pour afficher mes todo
function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquer pour Validé/Suprimer</li>`;
  }
}

//je l'appeler au debut au load de ma page
window.addEventListener('load', getTodos());

//Je lui donne un evenement a l'envoi(submit)
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (item.value === "") {
    null;
  } else {
    list.innerHTML += `<li> ${item.value}</li>`;
  }

  item.value = "";
  storeList();
});

//Je lui donne un evenement au clique en lui injectant une class (checked)
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
