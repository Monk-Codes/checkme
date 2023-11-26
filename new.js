"use strict";

//for adding item//
function addItem(targetClass) {
 var li = document.createElement("li");
 var inputElement = document.querySelector("." + targetClass + "T");
 var inputValue = inputElement.value;
 var text = document.createTextNode(inputValue);
 //appending text
 li.appendChild(text);

 if (inputValue === "") {
  alert("Enter the text!");
 } else {
  document.querySelector("." + targetClass).appendChild(li);
 }
 //keeping value
 inputElement.value = "";
 //  for x btn
 var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 li.appendChild(span);
 var i;
 for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
   var div = this.parentElement;
   div.style.display = "none";
  };
 }
 //close btn
 var closebtns = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
   this.parentElement.style.display = "none";
  });
 }
 //strike through//
 var strike = document.querySelector("." + targetClass);
 strike.addEventListener(
  "click",
  function (ev) {
   if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
   }
  },
  false
 );
}
function addToday() {
 addItem("today");
}
function addTom() {
 addItem("tomorrow");
}
function addUpcom() {
 addItem("upcom");
}
