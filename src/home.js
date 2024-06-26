function Saludar() {
  let h1 = document.createElement("h1");
  h1.textContent = "Bienvenidos a nuestro Restaurante!!!";
  let divContent = document.getElementById("content");
  divContent.innerHTML = "";
  divContent.append(h1);
}
export { Saludar };
