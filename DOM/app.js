// document.getElementById("test").style.backgroundColor = "red";

let pageBody = document.getElementsByTagName("body");

pageBody[0].style.display = "flex";
pageBody[0].style.flexFlow = "row wrap";

var changeId = document.getElementById("test");
changeId.style.backgroundColor = "red";

var elementByTag = document.getElementsByTagName("section");
elementByTag[0].style.backgroundColor = "blue";

var changeClasselem = document.getElementsByClassName("im");
console.log(changeClasselem);
let elem = [];
for (let i = 0; i < changeClasselem.length; i++) {
  elem = changeClasselem[i];
  console.log(elem);
  elem.style.fontSize = "25px";
  elem.style.backgroundColor = "green";
}

let getIdQ = document.querySelector("#test-query");
getIdQ.style.border = "1px solid black";

let selectAll = document.querySelectorAll(".test-query-all");

selectAll.forEach(el => (el.style.fontSize = "30px"));

let circle = document.querySelector(".square");
circle.style.borderRadius = "50%";
