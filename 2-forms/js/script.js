const formDOM = document.querySelector("#userFrom");
const alertDOM = document.querySelector('#alert');
const alertFunction = (title, message, className = 'warning') => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}: </strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

formDOM.addEventListener('submit', formSubmit);

function formSubmit(event){
    event.preventDefault();
    let userName = document.querySelector('#userName');
    let userScore = document.querySelector('#userScore');
    if(userName.value && userScore.value){
        addList(userName.value, userScore.value);
        userName.value = '';
        userScore.value = '';
    }
    else{
        alertDOM.innerHTML = alertFunction("Hata","eksik bilgi girdiniz","danger");
    }

}

const addList = (userName,userScore) =>{
    let ulElement = document.querySelector('#userList');
    let newLiElement = document.createElement('li');
    newLiElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    newLiElement.innerHTML = `${userName}<span class="badge bg-primary rounded-pill">${userScore}</span>`;
    ulElement.append(newLiElement);
}