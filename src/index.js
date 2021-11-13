import logoImg from "./content/logo_1.png";

console.log("Look ma! Zero config");

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);
