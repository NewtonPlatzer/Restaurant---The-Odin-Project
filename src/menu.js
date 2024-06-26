function Menu() {
  let h1 = document.createElement("h1");
  h1.textContent = "Revisa nuestro menú";
  let divContent = document.getElementById("content");
  divContent.innerHTML = "";
  divContent.append(h1);
}
export { Menu };