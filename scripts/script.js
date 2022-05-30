var $task = $("<div>", {id: "", "class": "dummy-task"});
var $top = $("<div>", {id: "", "class": "top"});
var $bottom = $("<div>", {id: "", "class": "bottom"});
//var $actions = $("<div>", {id: "", "class": "actions"});

$(".task-container").append($task);
$task.append($top)
$task.append($bottom)

var $actions = '<div class="actions">' + '<i class="fa-solid fa-check"></i>' + '<i class="fa-solid fa-pen-to-square"></i>' + '<i class="fa-solid fa-trash"></i>' + '</div>'
$top_content = $("<h2>This is the title</h2> <h2>Date Created: 25/5/2022</h2> <h2>Importance: 3</h2>" + $actions)

$top.append($top_content)


/*
<div class="dummy-task">
    <div class="top">
        <h2>This is the title</h2>
        <h2>Date Created: 25/5/2022</h2>
        <h2>Importance: 3</h2>
        <div class="actions">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
    <div class="bottom">
        <p>This the task description</p>
    </div>
*/

