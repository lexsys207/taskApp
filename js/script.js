const navTask = document.getElementById("nav-task"),
    navSettings = document.getElementById("nav-settings"),
    blockPost = document.getElementById("post"),
    blockSettings = document.getElementById("settings"),
    openModal = document.getElementById("openModal"),
    close = document.getElementById("close"),
    modal = document.getElementById("modal");

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
    blockPost.insertAdjacentHTML("afterBegin", JSON.parse(localStorage.getItem("array")));
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


function enterElement() {
    let newDiv = arr[arr.length - 1];
    blockPost.insertAdjacentHTML("afterBegin", newDiv);
    localStorage.setItem("array", JSON.stringify(arr));
}

function addElement() {
    arr.push(postCode); // Добавление нового поста в конец массива
    console.log(arr.length); // Проверка
    enterElement();
}

function deletePost() {
    arr.length = 0;
    localStorage.setItem("array", JSON.stringify(arr));
    var listPost = document.querySelectorAll("div[name=d]");
    for (var i = 0; i < listPost.length; i++) {
        listPost[i].style = "display: none;";
    }
}

//Modal window
openModal.onclick = function () {
    modal.style = "display: block;";
}

close.onclick = function () {
    modal.style = "display: none;"
}




