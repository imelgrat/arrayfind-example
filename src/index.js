const array = ["blue", "red", "black", "white", "green"];
const app = document.getElementById("app");

const found = array.find(item => {
  return item[0] === "b";
});

app.insertAdjacentHTML("beforeend", "First matching element: " + found);
