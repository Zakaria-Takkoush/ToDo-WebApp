

function appendTask (title,pts,date,desc) {
    let task = `
    <div class="dummy-task">
    <div class="top">
    <h2>` + title + `</h2>
    <h2>Date Created: ${date}>
    <h2>Importance: ` + pts + `</h2>
    <div class="actions">
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
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

// let task = $("<div>", {id: "", "class": "dummy-task"});
// let top = $("<div>", {id: "", "class": "top"});
// let bottom = $("<div>", {id: "", "class": "bottom"});

// let task_date = new Date
// let actions = '<div class="actions">' + '<i class="fa-solid fa-check"></i>' + '<i class="fa-solid fa-pen-to-square"></i>' + '<i class="fa-solid fa-trash"></i>' + '</div>'
// let top_content = $("<h2>" + task_title + "</h2> <h2>Date Created: " + "</h2> <h2>Importance: " + task_pts + "</h2>" + actions)
// let bottom_content = $(task_desc)

let tasks = [];

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

        console.log(task_object);
        tasks.push(task_object);
        console.log(tasks);
        localStorage.setItem("tasks", tasks)
        // alert(new Date($.now()));

        clearInputs()
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        alert("Please fill in all required fields!")
 }
  });


var delete_task = $('<i class="fa-solid fa-trash"></i>').click(function(){
    var p = $(this).parent() 
    p.fadeout(function(){
        p.remove()
    })
})

document.onload = function() {
    let reload_tasks = localStorage.getItem(tasks)
    console.log(reload_tasks)
    // for (let i =0; i< reload_tasks.length; i++) {
    //     $(".task-container").append(reload_tasks);
    //   }
}

 // $( this ).slideUp();