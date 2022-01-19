const ulDOM = document.querySelector("#list");
const liveToastAdded = document.querySelector("#liveToastAdded");
const liveToastEmpty = document.querySelector("#liveToastEmpty");

ulDOM.addEventListener("click", (item) => checkOrDelete(item));


// check or delete li 
const checkOrDelete = (item) => {
  // li checked or remove checked
  if (item.target.tagName == "LI") {
    //item.target.classList.add("checked");
    const isChecked = item.target.classList.contains('checked');
    isChecked == (true) ? item.target.classList.remove('checked') : item.target.classList.add('checked');
  }
  // li remove
  else {
    ulDOM.removeChild(item.target.parentNode);
  }
};

//Create New Element
const newElement = () => {
  const task = document.querySelector("#task");

  if (task.value.trim() == "") {
    liveTaskShow(liveToastEmpty);
  } else {
    console.log("deneme");
    liveTaskShow(liveToastAdded);
    addLi(task.value);
  }
};

const addLi = (task) => {
  let newLi = document.createElement("li");
  newLi.innerHTML = `${task}<span class="close">x</span>`;
  ulDOM.append(newLi);
};

const liveTaskShow = (liveToastDOM) => {
  liveToastDOM.classList.remove("hide");
  liveToastDOM.classList.add("show");
};

const liveTaskHide = () => {
  liveToastAdded.classList.remove("show");
  liveToastAdded.classList.add("hide");
  liveToastEmpty.classList.remove("show");
  liveToastEmpty.classList.add("hide");
};
