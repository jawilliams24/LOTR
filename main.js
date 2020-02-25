"use strict";
let obj = document.createElement("div");
obj.id = "object";
obj.style.position = "absolute"
let image = document.createElement("img");
image.style.width = "100%";
image.src = "https://external-preview.redd.it/oul7ylGIXLkqHAhkKe9wKtHAsrdfTycDawCzSy3zxX4.jpg?width=640&crop=smart&auto=webp&s=301549ad644d7abb2658eb4d2b5a80f3e2d3a67c";

let para = document.createElement("p");
para.innerText = "AAAAAAAAH";
para.style.color = "white";
para.style.fontSize = 1000;

obj.appendChild(image);
obj.appendChild(para);

document.getElementById("container").appendChild(obj);

let body = document.body
body.addEventListener("mousemove", function (e) {

    obj.style.top = e.clientY + "px";
    obj.style.left = e.clientX + "px";
});


function printHello(texty) {
    console.log("Legolas, what do your elf eyes see?");
    console.log("They run as if the very whips of their masters are behind them");
    console.log("They turn north-east");
    console.log("They're taking the hobbits to Isengard!");

}

printHello();

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function createGimli(){
    let gimli = document.createElement("div");
    gimli.id = "gimli";
    gimli.style.position="absolute"
    let image = document.createElement("img");
    image.style.width= "100%";
    image.src= "https://media.tenor.com/images/244d54e0b9e9aac0bdb6c9fd78b0f6f1/tenor.gif";
    gimli.appendChild(image);
    document.getElementById("container").appendChild(gimli);
    gimli.style.top = Math.random()*300+"px";
    gimli.style.left = Math.random()*500+"px";
}
    createGimli();

function listCreator() {
    let listy = document.createElement("div");
    listy.id = "chrisy";
    let head = document.createElement("h1");
    head.className = "headers";
    head.innerText = "List goes here";
    let lists = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = "This is item number " + (i+1);
        lists.append(listItem);
    }

    listy.append(head);
    listy.append(lists);
    document.body.append(listy);
    console.log(thingList);
}

listCreator();

// let dogs=document.getElementById("dogs");
// let title=dogs.getElementsByClassName("title")[0];
// title.innerText="Four";
// let dogList=dogs.getElementsByTagName("ul")[0];
// let listItem=document.createElement("li");
// listItem.innerText="Four";
// dogList.append(listItem);
// console.log(dogList);



