const addtask = document.getElementById("taskbtn");
const taskTodoList = document.getElementById("taskTodoList");
const taskInprogressList = document.getElementById("taskInprogressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("recipient-name");
const statusbtn = document.getElementById("status");

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
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const newtaskcard = `
    <div class="border d-flex justify-content-between align-items-center text-bg-dark rounded p-2 mt-3 mx-3">
      <span>${tasks[i].name}</span> 
        <div class="icons ">
            <button class="btn-sm bg-dark">
              <i class="fa-solid fa-pencil fa-lg" style="color: #fafafa"></i> </button>
              <button class="btn-sm bg-dark" onclick="deleteTask()">
              <i
                class="fa-solid fa-trash-can fa-lg ps-2"
                style="color: #cb061a"
              ></i>${[i]}
              </button>
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
submitBtn.addEventListener("click", function () {
  //   tasks[1].status = "INPROGRESS";
  const newtask = {
    name: input.value,
    status: statusbtn.value,
  };
  tasks.push(newtask);
  draw();
});

draw();

const deleteTask = (tasksIndex) => {
  tasks.splice(tasksIndex, 1);
  draw();
};

// const whiteborder = () => {
//   taskTodoList.classList.add("border-white");
// };
// const yellowborder = () => {
//   taskInprogressList.classList.add("border-warning");
// };
// const greenborder = (green) => {
//   taskDoneList.classList.add("border-success");
// };
// const redborder = (red) => {
//   taskBlockedList.classList.add("border-danger");
// };
