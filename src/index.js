import "./styles.css";
import { Saludar } from "./home";
import { Contact } from "./contact";
import { Menu } from "./menu";

Saludar();

const btnHome = document.querySelector("#btn-home");
btnHome.addEventListener("click", (e) => {
  console.log("Home")
  Saludar();
});

const btnMenu = document.querySelector("#btn-menu");
btnMenu.addEventListener("click", (e) => {
  console.log("Menu")
  Menu();
});

const btnContact = document.querySelector("#btn-contact");
btnContact.addEventListener("click", (e) => {
  console.log("Contact")
  Contact();
});
