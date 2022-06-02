

function appendTask (title,pts,date,desc) {
    let task = `
    <div class="dummy-task">
    <div class="top">
    <h2>` + title + `</h2>
    <h2>Date Created: ${date}>
    <h2>Importance: ` + pts + `</h2>
    <div class="actions">
    <i id="check" class="fa-solid fa-check"></i>
    <i id="edit" class="fa-solid fa-pen-to-square"></i>
    <i id="delete" class="fa-solid fa-trash"></i>
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

    if (task_title !== "" && task_pts !== "" && task_desc !== "") {
        // task object
        let task_object = {
            title: $("#input_title").val(),
            pts: $('#pts').val(),
            date: new Date($.now()),
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


// window.onload = function() {
//     let reload_tasks = localStorage.getItem("tasks")
//     console.log(reload_tasks)
//     console.log(reload_tasks[0])
//     for (let i =0; i< reload_tasks.length; i++) {
//         $(".task-container").append(reload_tasks);
//       }
// }


displayTasks()

// Delete task
// var delete_task = $('<i class="fa-solid fa-trash"></i>').click(function(){
//     var p = $(this).parent() 
//     p.fadeout(function(){
//         p.remove()
//     })
// })

// function deleteTask(index) {
//     tasks.splice(index, 1)
//     displayTasks()
// }

// for (i=0; i<tasks.length ; i++ ) {
//     $('# delete').click(function(){
//         tasks.splice(i, 1);
//         // localStorage.tasks = JSON.stringify(tasks);
//         // location.reload();
//     })
// }

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