function Contact() {
  let h1 = document.createElement("h1");
  h1.textContent = "Contactanos";
  let divContent = document.getElementById("content");
  divContent.innerHTML = "";
  divContent.append(h1);
}
export { Contact };