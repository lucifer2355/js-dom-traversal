const grandparent = document.getElementById("grandparent-id");
const grandparentQuerySelector = document.querySelector(".grandparent");
const parent = Array.from(document.getElementsByClassName("parent"));
const parentQuerySelectorAll = document.querySelectorAll(".parent");

const parents = Array.from(grandparentQuerySelector.children);
const parentOne = parents[0];
const children = parentOne.children;

const childOne = document.querySelector(".child");
const childrens = document.querySelectorAll(".child");

const childOne1 = document.querySelector("#child-one");
const childOne1Parent = childOne1.parentElement;
const childOne1ParentGrandparent = childOne1Parent.parentElement;

const childTwo = childOne.nextElementSibling;

// changeColor(grandparent);
// parent.forEach(changeColor);
// changeColor(children[0]);
// changeColor(childOne);
// childrens.forEach(changeColor);
// changeColor(childOne1Parent);
// changeColor(childOne1ParentGrandparent);
// changeColor(childTwo);
changeColor(childTwo.previousElementSibling);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
