const addtask = document.getElementById("taskbtn");
const taskTodoList = document.getElementById("taskTodoList");
const taskInprogressList = document.getElementById("taskInprogressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("recipient-name");
const statusbtn = document.getElementById("status");
const countofList = document.getElementById("countofList");
const countofIPList = document.getElementById("countofIPList");
const countofDoneList = document.getElementById("countofDoneList");
const countofBlockedList = document.getElementById("countofBlockedList");

let isEdit = false;
let editedIndex = -1;

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
  let todoCount = 0,
    ipCount = 0,
    doneCount = 0,
    blockedCount = 0;
  taskTodoList.innerHTML = "";
  taskInprogressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const newtaskcard = `
    <div class="d-flex flex-row justify-content-between align-items-center rounded  mt-3 mx-3 ">
      <span>${tasks[i].name}</span> 
        <div class="icons ">
            <button class="btn-sm bg-dark" onclick="editTask(${i})"   data-bs-toggle="modal"
          data-bs-target="#exampleModal">
              <i class="fa-solid fa-pencil fa-lg" style="color: #fafafa"></i> </button>
              <button class="btn-sm bg-dark" onclick="deleteTask(${i})">
              <i
                class="fa-solid fa-trash-can fa-lg ps-2"
                style="color: #cb061a"
              ></i>
              </button>
            </div>
          </div>
       
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newtaskcard;
        todoCount++;
        countofList.innerText = todoCount;
        break;
      }
      case "INPROGRESS": {
        taskInprogressList.innerHTML += newtaskcard;
        taskInprogressList.classList.add("border-warning");
        ipCount++;
        countofIPList.innerText = ipCount;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newtaskcard;
        taskDoneList.classList.add("border-success");
        doneCount++;
        countofDoneList.innerText = doneCount;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newtaskcard;
        taskBlockedList.classList.add("border-danger");
        blockedCount++;
        countofBlockedList.innerText = blockedCount;
        break;
      }
      default: {
      }

      // document.getElementById("countofNum").innerHTML = count;
    }
  }
}
submitBtn.addEventListener("click", function () {
  if (isEdit) {
    tasks[editedIndex].name = input.value;
    tasks[editedIndex].status = statusbtn.value;
    isEdit = false;
  } else {
    // tasks[1].status = "INPROGRESS";
    const newtask = {
      name: input.value,
      status: statusbtn.value,
    };
    tasks.push(newtask);
  }
  input.value = "";
  statusbtn.value = "TODO";
  draw();
});

draw();

const deleteTask = (tasksIndex) => {
  tasks.splice(tasksIndex, 1);

  draw();
};

const editTask = (tasksIndex) => {
  input.value = tasks[tasksIndex].name;
  statusbtn.value = tasks[tasksIndex].status;
  isEdit = true;
  editedIndex = tasksIndex;
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
