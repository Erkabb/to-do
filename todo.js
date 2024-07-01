// const taskbtn = document.getElementById("taskbtn");
// const task = document.getElementById("exampleModal");

// taskbtn.addEventListener("click", () => {});

const taskTodoList = document.getElementById("taskTodoList");
const taskInprogressList = document.getElementById("taskInprogressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addtaskbtn = document.getElementById("newtaskbtn");
const addstatusbtn = document.getElementById("status-name");
// const taskinput = document.getElementById("newtaskbtn");

const tasks = [
  {
    name: "Task One",
    status: "TODO",
  },
  {
    name: "Task Two",
    status: "INPROGRESS",
  },
  {
    name: "Task Three",
    status: "DONE",
  },
  {
    name: "Task Four",
    status: "BLOCKED",
  },
];

function draw() {
  taskTodoList.innerHTML = "";
  taskInprogressList.innerHTML = "";
  taskTodoList.innerHTML = "";
  taskTodoList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const newtaskcard = `<div class="d-flex justify-content-between align-items-center text-bg-dark rounded p-2 mt-3 mx-3">
    
   
            <div class="ps-3">
              <input
                class="form-check-input"
                type="radio"
                value="checklist"
                aria-label="..."
              />
              <label for="todo"></label>
            </div>
            <div class="title fs-4 text-secondary ">
              <span>${tasks[i].name}</span> 
            </div>
            <div class="icons d-flex flex-nowrap column-gap-2 ">
              <i class="fa-solid fa-pencil fa-lg" style="color: #fafafa"></i>
              <i
                class="fa-solid fa-trash-can fa-lg ps-2"
                style="color: #cb061a"
              ></i>
            </div>
         
    </div>
 `;
    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newtaskcard;
        break;
      }
      case "INPROGRESS": {
        taskInprogressList.innerHTML += newtaskcard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newtaskcard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newtaskcard;
        break;
      }
      default: {
      }
    }
  }
}
addtaskbtn.addEventListener("click", function () {
  //   tasks[1].status = "INPROGRESS";
  const newtask = {
    name: taskinput.value,
    status: addstatusbtn.status,
  };
  tasks.push(newtask);
  draw();
});

draw();
