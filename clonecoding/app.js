//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletCheck);
filterOption.addEventListener("click", filterTodo);


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
    //Add todo to localstorage
    saveLocalTodos(todoInput.value);
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
        removeLocalTodos(todo);
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

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }    
                break;
                
        }
    });
}


function saveLocalTodos(todo) {
    //check--Hey do I already have thing in there?
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
 }

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
            //todoDiv
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
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
    });
}

function removeLocalTodos (todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1);
   localStorage.setItem("todos", JSON.stringify(todos));

}

