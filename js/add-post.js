const navTask = document.getElementById("nav-task"),
  navSettings = document.getElementById("nav-settings"),
  blockPost = document.getElementById("post"),
  blockSettings = document.getElementById("settings"),
  openModal = document.getElementById("openModal"),
  close = document.getElementById("close"),
  modal = document.getElementById("modal"),
  marker = document.getElementById("marker"),
  fileUploader = document.getElementById("file-uploader"),
  reader = new FileReader();

function block_visible() {
  if (navTask.classList.contains("active")) {
    blockPost.style = "display: grid";
    blockSettings.style = "display: none";
  } else {
    blockPost.style = "display: none";
    blockSettings.style = "display: block";
  }
}

navTask.onclick = function() {
  navTask.classList.toggle("active");
  navSettings.classList.toggle("active");
  block_visible();
};
navSettings.onclick = function() {
  navTask.classList.toggle("active");
  navSettings.classList.toggle("active");
  block_visible();
};

//Upload file
const img = document.getElementById("bg-head");

fileUploader.addEventListener("change", event => {
  const files = event.target.files;
  const file = files[0];

  reader.readAsDataURL(file);

  reader.addEventListener("load", event => {
    img.src = "";
    img.src = event.target.result;
    img.alt = file.name;
    localStorage.setItem("header-img", event.target.result);
    header_style;
  });
});

img.src = localStorage.getItem("header-img");

//Settings
let taskTitle = document.getElementById("task-title");
let inputTitleApp = document.getElementById("titleTaskApp");

function titleTaskApp() {
  localStorage.setItem("title-app", inputTitleApp.value);
  taskTitle.innerHTML = localStorage.getItem("title-app");
}

let image_first = document.getElementById("image-1");
let image_second = document.getElementById("image-2");
let image_three = document.getElementById("image-3");
let header = document.querySelector(".header");
let header_style = "";
let select_img_header = "";

header.style = localStorage.getItem("header-app");

image_first.onclick = function() {
  header_style = "background: url(img/downtown-690826_640.jpg);";
  localStorage.setItem("header-app", header_style);
  header.style = header_style;
  select_img_header = image_first.classList.toggle("active");
  localStorage.setItem("select_img_header", select_img_header);
  image_second.classList.remove("active");
  image_three.classList.remove("active");
};
image_second.onclick = function() {
  header_style = "background: url(img/golden-gate-fog-1545805-639x478.jpg);";
  localStorage.setItem("header-app", header_style);
  header.style = header_style;
  select_img_header = image_second.classList.toggle("active");
  localStorage.setItem("select_img_header", select_img_header);
  image_second.classList.toggle("active");
  image_three.classList.remove("active");
  image_first.classList.remove("active");
};
image_three.onclick = function() {
  header_style = "background: url(img/chicago-890349_640.jpg);";
  localStorage.setItem("header-app", header_style);
  header.style = header_style;
  select_img_header = image_three.classList.toggle("active");
  localStorage.setItem("select_img_header", select_img_header);
  image_second.classList.remove("active");
  image_first.classList.remove("active");
};

select_img_header = localStorage.getItem("select_img_header");

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
    span.addEventListener("click", function() {
      span.parentElement.remove();
      event.stopPropagation();
      localStorage.setItem("todoList", blockPost.innerHTML);
    });
  }
}

function addPost() {
  taskDescription = String(document.getElementById("descriptionTask").value);
  name = String(document.getElementById("titleTask").value);
  let postCode =
    '<div class="post"><i class="del"><img src="img/icon/delete.svg"></i><div class="post-text"><div class="post-title"><h2>' +
    name +
    '</h2></div><div class="post-description">' +
    taskDescription +
    '</div><div class="post-info"><i class=""><img src="img/icon/calendar.svg"></i>Data: ' +
    normalDate +
    '</div></div><div class="post-marker marker"><div class="' +
    colorSelect +
    '" id="marker"></div></div></div>';
  blockPost.insertAdjacentHTML("afterBegin", postCode);
  deleteTodo();
}

saveBtn.addEventListener("click", function() {
  localStorage.setItem("todoList", blockPost.innerHTML);
});

function loadTodo() {
  if (localStorage.getItem("todoList")) {
    blockPost.innerHTML = localStorage.getItem("todoList");
    taskTitle.innerHTML = localStorage.getItem("title-app");

    deleteTodo();
  }
}

// Modal window
openModal.onclick = function() {
  modal.style = "display: block; opacity: 1; transition: 2s;";
};

function closeModal() {
  modal.style = "display: none; opacity:0;";
}

// Color picker
const colorGreen = document.getElementById("color-green"),
  colorYellow = document.getElementById("color-yellow"),
  colorRed = document.getElementById("color-red");

let colorSelect = "";

colorGreen.onclick = function() {
  colorSelect = "green";
  colorYellow.style = "opacity: 0;";
  colorRed.style = "opacity: 0;";
  colorGreen.style = "opacity: 1;";
};

colorYellow.onclick = function() {
  colorSelect = "yellow";
  colorYellow.style = "opacity: 1;";
  colorRed.style = "opacity: 0;";
  colorGreen.style = "opacity: 0;";
};

colorRed.onclick = function() {
  colorSelect = "red";
  colorYellow.style = "opacity: 0;";
  colorRed.style = "opacity: 1;";
  colorGreen.style = "opacity: 0;";
};

// Social menu
const openMenu = document.getElementById("target-menu"),
  socialMenu = document.getElementById("target-menu-block"),
  closeMenu = document.getElementById("close-menu");

openMenu.onclick = function() {
  socialMenu.classList.toggle("active");
};
closeMenu.onclick = function() {
  socialMenu.classList.toggle("active");
};

deleteTodo();
loadTodo();
