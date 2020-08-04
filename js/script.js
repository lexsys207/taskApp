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
const taskTitle = document.getElementById("task-title");
function titleTaskApp() {
    const titleTaskApp = document.getElementById("titleTaskApp").value;
    taskTitle.innerHTML = titleTaskApp;
}
