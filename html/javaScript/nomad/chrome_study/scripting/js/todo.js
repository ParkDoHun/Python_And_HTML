const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

// LocalStorage
const TODOS_LS = 'toDos';

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');

    // 이모지 : 윈도우키 + 세미콜론
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // 입력 후 텍스트 리셋 (submit(?))
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {
        
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();