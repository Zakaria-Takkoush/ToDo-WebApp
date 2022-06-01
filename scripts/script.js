window.onload = function () {
    
// let task = $("<div>", {id: "", "class": "dummy-task"});
// let top = $("<div>", {id: "", "class": "top"});
// let bottom = $("<div>", {id: "", "class": "bottom"});

let task_title = $("#input_title").val()

let task_pts = $('#pts').find(":selected").text();

var task_desc = $("#desc").val();
//var $task_date = 

var actions = '<div class="actions">' + '<i class="fa-solid fa-check"></i>' + '<i class="fa-solid fa-pen-to-square"></i>' + '<i class="fa-solid fa-trash"></i>' + '</div>'
$top_content = $("<h2>" + task_title + "</h2> <h2>Date Created: " + "</h2> <h2>Importance: " + task_pts + "</h2>" + actions)
$bottom_content = $(task_desc)


// task object
let task_object = {
    title: document.getElementById("input_title").value,
    pts: $('#pts').val(),
    desc: $("#desc").val()
}



 // $( this ).slideUp();



// task = `
// <div class="dummy-task">
// <div class="top">
// <h2>` + $("#input_title").val() + `</h2>
// <h2>Date Created: 25/5/2022</h2>
// <h2>Importance: ` + $('#pts').val() + `</h2>
// <div class="actions">
// <i class="fa-solid fa-check"></i>
// <i class="fa-solid fa-pen-to-square"></i>
// <i class="fa-solid fa-trash"></i>
// </div>
// </div>
// <div class="bottom">
// <p>` + task_desc + `</p>
// </div>
// `

$( "#add" ).click(function() {
    // $(".task-container").append(task);
    // task.append($top)
    // task.append($bottom)
    // top.append($top_content)
    // bottom.append($bottom_content)
    console.log(task_object);
  });


var delete_task = $('<i class="fa-solid fa-trash"></i>').click(function(){
    var p = $(this).parent() 
    p.fadeout(function(){
        p.remove()
    })
})

}

