document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  document.querySelector("#new-item-form").addEventListener('submit', handleEvent);
  
  document.querySelector("#new-item-form").addEventListener('select', handleEvent);

  document.querySelector("#delete-button").addEventListener('click', handleDelete);
});
let list = document.querySelector("#reading-list")
list.style.display = "flex";

const handleEvent = function (e) {
  e.preventDefault()
  const newListItem = document.createElement("li")
  newListItem.textContent = `${e.target.title.value} ${e.target.author.value} ${e.target.category.value}`
  const list = document.querySelector("#reading-list")
  list.appendChild(newListItem)
  document.querySelector("#new-item-form").reset()
}

const handleDelete = function (event) {
  const list = document.querySelector("#reading-list");
  list.reset()
}