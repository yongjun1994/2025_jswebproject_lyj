//HTMLCollection
const fruitsByTag = document.getElementsByTagName("li");
console.log(fruitsByTag);

//NodeList
const fruitsByQuery = document.querySelectorAll("li");
console.log(fruitsByQuery);

//버튼 클릭시 li 추가
document.getElementById("addBtn").addEventListener("click", () => {
  const newFruit = document.createElement("li");
  newFruit.textContent = "오렌지";
  document.getElementById("fruit-list").appendChild(newFruit);

  console.log("HTMLCollection길이 : ", fruitsByTag.length);
  console.log("NodeList 길이 : ", fruitsByQuery.length);
});
