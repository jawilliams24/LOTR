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

function createGimli() {
    let gimli = document.createElement("div");
    gimli.id = "gimli";
    gimli.style.position = "absolute"
    let gimliZoom = document.createElement("div");
    gimliZoom.id = "gimliZoom";
    let image = document.createElement("img");
    image.style.width = "100%";
    image.src = "https://media.tenor.com/images/244d54e0b9e9aac0bdb6c9fd78b0f6f1/tenor.gif";
    gimliZoom.appendChild(image);
    gimli.appendChild(gimliZoom);
    document.getElementById("container").appendChild(gimli);
    let posGimli = () => {
        gimli.style.top = Math.random() * screen.height - 100 + "px";
        gimli.style.left = Math.random() * screen.width - 100 + "px";
    }
    setInterval(() => {
        posGimli();
    }, 800);
}
createGimli();

function createMush() {
    let mush = document.createElement("div");
    mush.id = "mush";
    mush.style.position = "absolute"
    let image = document.createElement("img");
    image.style.mush = "100%";
    image.src = "http://www.legendariummedia.com/wp-content/uploads/2016/07/mushrooms-01-1.gif";
    mush.appendChild(image);
    document.getElementById("container").appendChild(mush);
    let posMush = () => {
        gimli.style.top = Math.random() * screen.height - 100 + "px";
        gimli.style.left = Math.random() * screen.width - 100 + "px";
    }
    setInterval(() => {
        posMush();
    }, 100);
}
createMush();

function listCreator() {
    let listy = document.createElement("div");
    listy.id = "chrisy";
    let head = document.createElement("h1");
    head.className = "headers";
    head.innerText = "List goes here";
    let lists = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = "This is item number " + (i + 1);
        lists.append(listItem);
    }

    listy.append(head);
    listy.append(lists);
    document.body.append(listy);
    console.log(thingList);
}

function zoomin() {
    var myImg = document.getElementById("gollum");
    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;
    myImg.style.width = (currWidth + 50) + "px";
    myImg.style.height = (currHeight + 50) + "px";
}
function zoomout() {
    var myImg = document.getElementById("gollum");
    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;
    myImg.style.width = (currWidth - 50) + "px";
    myImg.style.height = (currHeight - 50) + "px";
}

body.addEventListener("keydown", event => {
    if (event.keyCode == 38) {
        zoomin();
    } else if (event.keyCode == 40) {
        zoomout();
    }
})
function addGollum() {
    let image = document.createElement("img");
    image.className = "gollum";
    image.src = "/gollum.gif";
    image.style.display = "block";
    image.alt = "gollumz";
    image.style.position = "absolute";
    body.append(image);
}


function myMove(gollumId) {
    var elem = document.getElementById(gollumId);
    var pos = -100;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == screen.clientX) {
            clearInterval(id);
            let remove = document.getElementById(gollumId);
            remove.parentNode.removeChild(remove);
        } else {
            pos += 2;
            elem.style.left = pos + 'px';
        }
    }
}

var count = 0;
body.addEventListener("click", (e) => {
    let myImg = document.createElement("img");
    myImg.src = "gollum.gif";
    myImg.alt = "gollum";
    myImg.className = "bottomGollum";
    myImg.id = ("bottomGollum" + count);
    count++;
    body.append(myImg);
    myMove(myImg.id);
})

let showData = (event) => {
    event.preventDefault();
    let form = event.target;
    let objy = {};
    for (let input of form) {
        if (input.name) {
            objy[input.name] = input.value;
            console.log(input.name, input.value);
        }
    }
    // console.log(objy);
}

// let image = document.createElement("image");
// document.keydown = checkKey;
// image.src= "https://i.ytimg.com/vi/3xYXUeSmb-Y/maxresdefault.jpg";
// image.alt="Image moving";
// image.style.position = "absolute";
// image.style.top="300px";
// image.style.left="300px";
// body.append(image);

// function checkKey(){
//     body.addEventListener("keydown", (q) => {
//         var currWidth = image.clientWidth;
//         if (event.keyCode == 17) {
//             if(currWidth == 500){
//                 alert("Maximum zoom-in level reached.");
//             } else{
//                 image.style.width = (currWidth + 50) + "px";
//          }
//         } else if(event.keyCode == 16){
//             if(currWidth == 50){
//                 alert("Maximum zoom-out level reached.");
//             } else{
//                 image.style.width = ((currWidth - 50) + "px");
//             }
//         }
//     });
// }

// listCreator();

// let dogs=document.getElementById("dogs");
// let title=dogs.getElementsByClassName("title")[0];
// title.innerText="Four";
// let dogList=dogs.getElementsByTagName("ul")[0];
// let listItem=document.createElement("li");
// listItem.innerText="Four";
// dogList.append(listItem);
// console.log(dogList);


