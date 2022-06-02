

function appendTask (title,pts,date,desc) {
    let task = `
    <div class="dummy-task">
    <div class="top">
    <h2>` + title + `</h2>
    <h2>Created: ${date}
    <h2>Importance: ` + pts + `</h2>
    <div class="actions">
    <i id="check" class="fa-solid fa-check" onclick="doneTask(${i})"></i>
    <i id="edit" class="fa-solid fa-pen-to-square" onclick="editTask(${i})"></i>
    <i id="delete" class="fa-solid fa-trash" onclick="deleteTask(${i})"></i>
    </div>
    </div>
    <div class="bottom">
    <p>` + desc + `</p>
    </div>
    `
    $(".task-container").append(task);
}

function clearInputs() {
    $("#input_title").val("")
    $('#pts').val("")
    $("#desc").val("")
}

// check if the local storage is not empty, then pase its content
let tasks;
if (localStorage.tasks != null) {
    tasks = JSON.parse(localStorage.tasks);
} else {    // if empty, vreate an empty array
    tasks = [];
}


//load tasks on load
function displayTasks() {
    for (i=0; i<tasks.length ; i++ ) {
        console.log(tasks[i]);
        appendTask (tasks[i].title,tasks[i].pts,tasks[i].date,tasks[i].desc)
    }
}


// Add a task
$( "#add" ).click(function() {
    let task_title = $("#input_title").val();
    let task_pts = $('#pts').val();
    let task_desc = $("#desc").val();

    // Format date
    let d = new Date();
    let time = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " at " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    if (task_title !== "" && task_pts !== "" && task_desc !== "") {
        // task object
        let task_object = {
            title: $("#input_title").val(),
            pts: $('#pts').val(),
            date: time,
            desc: $("#desc").val(),
            is_done: false
        }

        appendTask (task_object.title,task_object.pts,task_object.date,task_object.desc)

        // console.log(task_object);
        tasks.push(task_object);
        // console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks))

        clearInputs()
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        alert("Please fill in all required fields!")
 }
  });


displayTasks()

// Delete Task

function deleteTask(id) {
    tasks.splice(id, 1);
    localStorage.tasks = JSON.stringify(tasks);
    location.reload();
}

// Done Task

function doneTask(id) {
    tasks[id].is_done = true
    if (tasks[id].is_done == true ) {
        $(".top").toggleClass("top-done")
    }
}

// Sorting Tasks

function sortbyPts() {
    $(".task-container").text("");
    tasks.sort((firstItem, secondItem) => firstItem.pts - secondItem.pts);
    // console.log(tasks);
    displayTasks()
}

function sortbyDate() {
    $(".task-container").text("");
    tasks.sort((firstItem, secondItem) => firstItem.date - secondItem.date);
    location.reload();
    // console.log(tasks);
    displayTasks()
}

$( "#sort_btn" ).click(function() {
    if (document.getElementById("sort").value === "sort-date") {
        sortbyDate()
    }
    if (document.getElementById("sort").value === "sort-points") {
        sortbyPts()
    } 
})

// Clear Tasks

$( "#clear_btn" ).click(function() {
    localStorage.clear()
    location.reload();
})

// Searching for a task

function searchTask(search) {
    let found = tasks.find(a => a.title === search);
    $(".task-container").text("");
    appendTask (found.title,found.pts,found.date,found.desc)
}
$("#search_btn").click(function() {
    let search_txt =  $("#search_txt").val()
    searchTask(search_txt);
    $("#search_txt").val("")
})

// Done Task

// function doneTask (index) {
//     tasks[index].is_done = true
// }

// $(".top").each(function() {
//     if (tasks[index].is_done === true) {
//         $(this).css("background", "greeb")
//     }
// })



        