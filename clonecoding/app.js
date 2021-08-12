//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletCheck);

//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>'
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    //check trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fas fa-minus-square"></i>'
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";
}

function deletCheck(e){
    const item = e.target;
    //e.target = it can be any thing
    //delet to do
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
