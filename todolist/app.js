// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function(e) {
    // Get references to the necessary elements
    var taskInput = document.querySelector("input[type='text']");
    var addButton = document.querySelector("button");
    var allButton = document.querySelectorAll(".buttons button")[0];
    var activeButton = document.querySelectorAll(".buttons button")[1];
    var completeButton = document.querySelectorAll(".buttons button")[2];


    var todoList = document.querySelector("ul");
    e.preventDefault();

  

// Add event listener for the Add button
addButton.addEventListener("click", function() {
    var task = taskInput.value;
    if (task.trim() !== "") {
      // Create a new list item
      var listItem = document.createElement("li");
  
      // Create a checkbox for the task
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("click", function() {
        if (checkbox.checked) {
          listItem.classList.add("completed");
        } else {
          listItem.classList.remove("completed");
        }
      });
      listItem.appendChild(checkbox);
  
      // Create a span for the task text
      var taskSpan = document.createElement("span");
      taskSpan.innerText = task;
      listItem.appendChild(taskSpan);
  
      // Create a span for the delete icon
      var deleteIcon = document.createElement("span");
      deleteIcon.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`;
      deleteIcon.addEventListener("click", function() {
        listItem.remove();
      });
      listItem.appendChild(deleteIcon);
  
      todoList.appendChild(listItem);
      taskInput.value = "";
    }
  });
  
  
  
  
  
    // Add event listeners for the filter buttons
    allButton.addEventListener("click", function() {
      showAllTasks();
    });
  
    activeButton.addEventListener("click", function() {
      showActiveTasks();
    });
  
    completeButton.addEventListener("click", function() {
      showCompleteTasks();
    });
  
    // Function to show all tasks
    function showAllTasks() {
      var tasks = todoList.querySelectorAll("li");
      tasks.forEach(function(task) {
        task.style.display = "flex";
        task.style.gap = "20px";
        task.style.justifyContent = "space-between";
        task.style.alignItems = "center";
        task.style.marginBottom = "20px";
        
      });
    }
  
 // Function to show active tasks
function showActiveTasks() {
    var tasks = todoList.querySelectorAll("li");
    tasks.forEach(function(task) {
      if (task.classList.contains("completed")) {
        task.style.display = "none";
      } else {
        task.style.display = "flex";
        task.style.justifyContent = "space-between";
        task.style.gap = "20px";
        task.style.alignItems = "center";
      }
    });
  }
  
  
    // Function to show completed tasks
    function showCompleteTasks() {
      var tasks = todoList.querySelectorAll("li");
      tasks.forEach(function(task) {
        task.style.display = task.classList.contains("completed") ? "block" : "none";
      });
    }


  
  
    // Add event listener for marking a task as completed
    todoList.addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName === "LI") {
          target.classList.toggle("completed");
        }
      });
      

          // Add event listener for the Complete button
          completeButton.addEventListener("click", function() {
            var tasks = todoList.querySelectorAll("li");
            tasks.forEach(function(task) {
              if (task.querySelector("input[type='checkbox']").checked) {
                task.style.display = "flex";
                task.style.justifyContent = "space-between";
                task.style.gap = "20px";
                task.style.alignItems = "center";
                
              } else {
                task.style.display = "none";
              }
            });
          });
          


  });


  
  