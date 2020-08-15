const navTask = document.getElementById("nav-task"),
    navSettings = document.getElementById("nav-settings"),
    blockPost = document.getElementById("post"),
    blockSettings = document.getElementById("settings"),
    openModal = document.getElementById("openModal"),
    close = document.getElementById("close"),
    modal = document.getElementById("modal"),
    marker = document.getElementById("marker");

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
// window.onload = function () {
//     taskTitle.innerHTML = localStorage.getItem("title-app");
//     blockPost.insertAdjacentHTML("afterBegin", JSON.parse(localStorage.getItem("array")));
//     se();
// }

let taskTitle = document.getElementById("task-title");
let inputTitleApp = document.getElementById("titleTaskApp");

function titleTaskApp() {
    localStorage.setItem("title-app", inputTitleApp.value);
    taskTitle.innerHTML = localStorage.getItem("title-app");

}

// Posts
let arr = [];
let name = "";
let taskDescription = "";
let date = new Date();
let dateDay = String(date.getDate());
let dateMonth = String(date.getUTCMonth());
let dateYear = String(date.getFullYear());
let normalDate = String(date.toLocaleDateString());

// function enterElement() {
//     let newDiv = arr[arr.length - 1];
//     blockPost.insertAdjacentHTML("afterBegin", newDiv);
//     localStorage.setItem("array", JSON.stringify(arr));
// }

function addElement() {
    taskDescription = String(document.getElementById("descriptionTask").value);
    name = String(document.getElementById("titleTask").value);
    let postCode = '<div class="post" id="posts"><div class="post-text"><div class="post-title"><h2>' + name + '</h2></div><div class="post-description">' + taskDescription + '</div><div class="post-info"><i class="far fa-calendar-alt"></i>Data: ' + normalDate + '</div></div><div class="post-marker marker"><div class="' + colorSelect + '" id="marker"></div></div></div>';
    blockPost.insertAdjacentHTML("afterBegin", postCode);
    // arr.push(postCode); // Добавление нового поста в конец массива
    // console.log(arr.length); // Проверка
    // enterElement();
    // se();
    deleteTodo();
}

let arrPost = '';
var arrayElem = [];
let posts = document.getElementsByClassName(".post");



function deleteTodo() {
    for (post of posts) {
        post.addEventListener("click", function () {
            post.parentElement.remove();
            event.stopPropagation();
        });
    }
}

// Modal window
let deleteModal = document.getElementById("modal-delete-post");

openModal.onclick = function () {
    modal.style = "display: block;";
}

function closeModal() {
    modal.style = "display: none;"
}

// Color picker
const colorGreen = document.getElementById("color-green"),
    colorYellow = document.getElementById("color-yellow"),
    colorRed = document.getElementById("color-red");

let colorSelect = '';

colorGreen.onclick = function () {
    colorSelect = "green";
    colorYellow.style = "opacity: 0;";
    colorRed.style = "opacity: 0;";
    colorGreen.style = "opacity: 1;";
}

colorYellow.onclick = function () {
    colorSelect = "yellow";
    colorYellow.style = "opacity: 1;";
    colorRed.style = "opacity: 0;";
    colorGreen.style = "opacity: 0;";
}

colorRed.onclick = function () {
    colorSelect = "red";
    colorYellow.style = "opacity: 0;";
    colorRed.style = "opacity: 1;";
    colorGreen.style = "opacity: 0;";
}

deleteTodo();




