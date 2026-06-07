// ======================
// SIDEBAR NAVIGATION
// ======================

const navItems = document.querySelectorAll(".nav-menu li");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav =>
            nav.classList.remove("active")
        );

        item.classList.add("active");

        const pageId =
        item.getAttribute("data-page");

        pages.forEach(page =>
            page.classList.remove("active-page")
        );

        document
        .getElementById(pageId)
        .classList.add("active-page");

    });

});


// ======================
// CHAT SYSTEM
// ======================

const sendBtn =
document.getElementById("sendBtn");

const chatInput =
document.getElementById("chatInput");

const chatBox =
document.getElementById("chatBox");

function sendMessage() {

    const text =
    chatInput.value.trim();

    if(text === "") return;

    const msg =
    document.createElement("div");

    msg.className = "message";

    msg.innerHTML =
    "🧑 " + text;

    chatBox.appendChild(msg);

    chatInput.value = "";

    chatBox.scrollTop =
    chatBox.scrollHeight;
}

sendBtn.addEventListener(
"click",
sendMessage
);

chatInput.addEventListener(
"keypress",
function(e){

if(e.key === "Enter"){
sendMessage();
}

});


// ======================
// TASK BOARD
// ======================

const addTaskBtn =
document.getElementById("addTaskBtn");

const taskInput =
document.getElementById("taskInput");

const taskList =
document.getElementById("taskList");

addTaskBtn.addEventListener(
"click",
function(){

const taskText =
taskInput.value.trim();

if(taskText === "")
return;

const task =
document.createElement("div");

task.className = "task";

task.innerHTML = `
${taskText}
<button class="delete-btn">
❌
</button>
`;

taskList.appendChild(task);

taskInput.value = "";

updateTaskCount();

});


// ======================
// DELETE TASK
// ======================

document.addEventListener(
"click",
function(e){

if(
e.target.classList.contains(
"delete-btn"
)
){

e.target.parentElement.remove();

updateTaskCount();

}

});


// ======================
// MIC BUTTON
// ======================

const micBtn =
document.getElementById("micBtn");

let micOn = true;

micBtn.addEventListener(
"click",
function(){

micOn = !micOn;

if(micOn){

micBtn.innerHTML =
"🎤 Mic ON";

micBtn.style.background =
"#2563eb";

}else{

micBtn.innerHTML =
"🔇 Mic OFF";

micBtn.style.background =
"#dc2626";

}

});


// ======================
// CAMERA BUTTON
// ======================

const cameraBtn =
document.getElementById(
"cameraBtn"
);

let camOn = true;

cameraBtn.addEventListener(
"click",
function(){

camOn = !camOn;

if(camOn){

cameraBtn.innerHTML =
"📷 Camera ON";

cameraBtn.style.background =
"#2563eb";

}else{

cameraBtn.innerHTML =
"🚫 Camera OFF";

cameraBtn.style.background =
"#dc2626";

}

});


// ======================
// NOTIFICATION SYSTEM
// ======================

const notifications =
document.getElementById(
"notifications"
);

function addNotification(
text
){

const note =
document.createElement("div");

note.className =
"notification";

note.innerHTML =
text;

notifications.appendChild(
note
);

}

setTimeout(() => {

addNotification(
"🎉 New AI Summary Generated"
);

}, 5000);


// ======================
// ANALYTICS ANIMATION
// ======================

const cards =
document.querySelectorAll(
".card h2"
);

cards.forEach(card => {

const target =
parseInt(
card.innerText
);

if(isNaN(target))
return;

let count = 0;

const speed =
target / 60;

const update = () => {

count += speed;

if(count < target){

card.innerText =
Math.floor(count);

requestAnimationFrame(
update
);

}else{

card.innerText =
target;

}

};

update();

});


// ======================
// TASK COUNT UPDATE
// ======================

function updateTaskCount(){

const totalTasks =
document.querySelectorAll(
"#taskList .task"
).length;

console.log(
"Total Tasks:",
totalTasks
);

}


// ======================
// DEMO NOTIFICATION
// ======================

console.log(
"🚀 IntellMeet Loaded Successfully"
);