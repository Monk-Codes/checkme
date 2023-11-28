"use strict";

// Load items from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
 loadItems("today");
 loadItems("tomorrow");
 loadItems("upcom");
});

// Function to add item to the list
function addItem(targetClass) {
 var li = document.createElement("li");
 var inputElement = document.querySelector("." + targetClass + "T");
 var inputValue = inputElement.value;
 var text = document.createTextNode(inputValue);
 li.appendChild(text);

 if (inputValue === "") {
  alert("Enter the text!");
 } else {
  document.querySelector("." + targetClass).appendChild(li);
  saveItem(targetClass, inputValue);
 }

 inputElement.value = "";

 var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 li.appendChild(span);

 // Remove item on close button click
 span.addEventListener("click", function () {
  removeItem(targetClass, inputValue);
  var div = this.parentElement;
  div.style.display = "none";
 });

 // Add click event to toggle 'checked' class
 li.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
   ev.target.classList.toggle("checked");
  }
 });
}

// Function to save item to localStorage
function saveItem(targetClass, item) {
 var items = JSON.parse(localStorage.getItem(targetClass)) || [];
 items.push(item);
 localStorage.setItem(targetClass, JSON.stringify(items));
}

// Function to load items from localStorage
function loadItems(targetClass) {
 var items = JSON.parse(localStorage.getItem(targetClass)) || [];
 var ul = document.querySelector("." + targetClass);
 items.forEach(function (item) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  ul.appendChild(li);

  // Add click event to toggle 'checked' class for dynamically loaded items
  li.addEventListener("click", function (ev) {
   if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
   }
  });

  // Remove item on close button click for dynamically loaded items
  span.addEventListener("click", function () {
   removeItem(targetClass, item);
   var div = this.parentElement;
   div.style.display = "none";
  });
 });
}

// Function to remove item from localStorage
function removeItem(targetClass, item) {
 var items = JSON.parse(localStorage.getItem(targetClass)) || [];
 items = items.filter(function (value) {
  return value !== item;
 });
 localStorage.setItem(targetClass, JSON.stringify(items));
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
