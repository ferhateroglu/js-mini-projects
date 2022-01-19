const ulDOM = document.querySelector('#list');
const liveToastAdded = document.querySelector('#liveToastAdded');
const liveToastEmpty = document.querySelector('#liveToastEmpty');

//Select li Elment
ulDOM.addEventListener('click', (item) => {
    if(item.target.tagName == 'LI'){
        
    }
});



//Create New Element
function newElement(){
    const task = document.querySelector('#task');

    if(task.value.trim() == ''){
        liveTaskShow(liveToastEmpty);
    }else{
        console.log('deneme');
        liveTaskShow(liveToastAdded);
        addLi(task.value);
    }
}

const addLi = (task) =>{
    let newLi = document.createElement('li');
    newLi.innerHTML = `${task}<span class="close">x</span>`;
    ulDOM.append(newLi);
}

const liveTaskShow = (liveToastDOM) =>{
    liveToastDOM.classList.remove('hide');
    liveToastDOM.classList.add('show');
}

const liveTaskHide = () =>{
    liveToastAdded.classList.remove('show');
    liveToastAdded.classList.add('hide');
    liveToastEmpty.classList.remove('show');
    liveToastEmpty.classList.add('hide');
}

