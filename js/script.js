const navTask = document.getElementById("nav-task"),
    navSettings = document.getElementById("nav-settings"),
    blockPost = document.getElementById("post"),
    blockSettings = document.getElementById("settings");

function block_visible() {
    if (navTask.classList.contains("active")) {
        blockPost.style = "display: grid";
        blockSettings.style = "display: none";
    } else {
        blockPost.style = "display: none";
        blockSettings.style = "display: block";
    }
}

navTask.onclick = function () {
    navTask.classList.toggle("active");
    navSettings.classList.toggle("active");
    block_visible();
};
navSettings.onclick = function () {
    navTask.classList.toggle("active");
    navSettings.classList.toggle("active");
    block_visible();
};

// Settings
window.onload = function () {
    taskTitle.innerHTML = localStorage.getItem("title-app");
}

let taskTitle = document.getElementById("task-title");
let inputTitleApp = document.getElementById("titleTaskApp");

function titleTaskApp() {
    localStorage.setItem("title-app", inputTitleApp.value);
    taskTitle.innerHTML = localStorage.getItem("title-app");
}

// Posts
let arr = [];
let name = ['Max', 'Andrei']
let postCode = '<div class="post"><div class="post-text"><div class="post-title"><h2>' + name[0] + '</h2></div><div class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,nisi!Lorem ipsum dolor sit amet consectetur adipisicing elit.</div><div class="post-info"><i class="far fa-calendar-alt"></i>Data: 3.08.2020</div></div><div class="post-marker"><div class="green" id="marker"></div></div></div>';


function addElement() {
    arr.push(postCode);
    blockPost.insertAdjacentHTML("afterBegin", arr[arr.length - 1]);
    checkPost();
}

function checkPost() {
    arr.forEach(function (item, i, arr) {
        console.log(arr[i]);
    })
}



