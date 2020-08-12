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


//Settings
let taskTitle = document.getElementById("task-title");
let inputTitleApp = document.getElementById("titleTaskApp");

function titleTaskApp() {
    localStorage.setItem("title-app", inputTitleApp.value);
    taskTitle.innerHTML = localStorage.getItem("title-app");

}

//Post
let name = "";
let taskDescription = "";
let date = new Date();
let dateDay = String(date.getDate());
let dateMonth = String(date.getUTCMonth());
let dateYear = String(date.getFullYear());
let normalDate = String(date.toLocaleDateString());
let del = document.getElementsByClassName("del");

function deleteTodo() {
    for (let span of del) {
        span.addEventListener("click", function () {
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

function addPost() {
    taskDescription = String(document.getElementById("descriptionTask").value);
    name = String(document.getElementById("titleTask").value);
    let postCode = '<div class="post"><i class="fas fa-trash-alt del"></i><div class="post-text"><div class="post-title"><h2>' + name + '</h2></div><div class="post-description">' + taskDescription + '</div><div class="post-info"><i class="far fa-calendar-alt"></i>Data: ' + normalDate + '</div></div><div class="post-marker marker"><div class="' + colorSelect + '" id="marker"></div></div></div>';
    blockPost.insertAdjacentHTML("afterBegin", postCode);

    deleteTodo();
}

// Modal window
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
addPost();