var $task = $("<div>", {id: "", "class": "dummy-task"});
var $top = $("<div>", {id: "", "class": "top"});
var $bottom = $("<div>", {id: "", "class": "bottom"});

$(".task-container").append($task);
$task.append($top)
$task.append($bottom)

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

