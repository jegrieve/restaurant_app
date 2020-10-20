export function pageLoad() {
let header = document.createElement("h1");
header.innerHTML = "Restaurant Spaghettio";
let content = document.getElementById("content")
content.appendChild(header);
let img = document.createElement("img");
img.src = "/assets/spaghetti.jpg"
img.width = "300"
img.height = "300"
content.appendChild(img);
let bodyInfo = document.createElement("p");
bodyInfo.innerHTML = "Best Spaghetti in the world!!!"
content.appendChild(bodyInfo);
}