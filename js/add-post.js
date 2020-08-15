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

let image_first = document.getElementById("image-1");
let image_second = document.getElementById("image-2");
let header = document.querySelector(".header");
image_first.onclick = function () {
    header.style = "background: url(img/header.jpg);";
}
image_second.onclick = function () {
    header.style = "background: url(img/golden-gate-fog-1545805-639x478.jpg);";
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
let saveBtn = document.getElementById("add-post");

function deleteTodo() {
    for (let span of del) {
        span.addEventListener("click", function () {
            span.parentElement.remove();
            event.stopPropagation();
            localStorage.setItem('todoList', blockPost.innerHTML);
        });
    }
}

function addPost() {
    taskDescription = String(document.getElementById("descriptionTask").value);
    name = String(document.getElementById("titleTask").value);
    let postCode = '<div class="post"><i class="del"><img src="img/icon/delete.svg"></i><div class="post-text"><div class="post-title"><h2>' + name + '</h2></div><div class="post-description">' + taskDescription + '</div><div class="post-info"><i class=""><img src="img/icon/calendar.svg"></i>Data: ' + normalDate + '</div></div><div class="post-marker marker"><div class="' + colorSelect + '" id="marker"></div></div></div>';
    blockPost.insertAdjacentHTML("afterBegin", postCode);
    deleteTodo();

}

saveBtn.addEventListener('click', function () {
    localStorage.setItem('todoList', blockPost.innerHTML);

});

function loadTodo() {
    if (localStorage.getItem('todoList')) {
        blockPost.innerHTML = localStorage.getItem('todoList');
        taskTitle.innerHTML = localStorage.getItem("title-app");
        deleteTodo();
    }
}

// Modal window
openModal.onclick = function () {
    modal.style = "display: block;";
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        modal.style = "opacity: 1;";

        if (timePassed > 30) {
            clearInterval(timer);
            modal.style = "opacity: 1;";
        };

    }, 10);
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

// Animation


deleteTodo();
loadTodo();