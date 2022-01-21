const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');
const filterOption=document.querySelector(".filter-todo")
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deletecheck);
filterOption.addEventListener('click',filterTodo)
// todoButton.addEventListener('click',addTodo);
function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo")
    const newTodo=document.createElement('li');
    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    // check mark button
    const completedButton= document.createElement('button')
    completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton);

    //Check trash Button
    const trashButton= document.createElement("button")
    trashButton.innerHTML='<i class="fas fa-trash"> </i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton);


    //Append to List
    todoList.appendChild(todoDiv)
    //Clear todo input vlaue
    todoInput.value=""

    //Create the Element and attaching the listner
    
}
function deletecheck(e)
{
    const item=e.target;
    if(item.classList[0]==='trash-btn'){
        // item.remove();
        const todo=item.parentElement;
        //animation here
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
        todo.classList.add("fall");
        // todo.remove();

    }
    
    //check mark
    if(item.classList[0]==='complete-btn'){
        // item.remove();
        const todo=item.parentElement;
        todo.classList.toggle("completed");;
    }
}
function filterTodo(e)
{
    const todos =todoList.childNodes;
    // console.log(todos)
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
                case "completed":
                    if(todo.classList.contains("completed"))
                    {
                        todo.style.display="flex";
                    }
                    else{
                        todo.style.display="none";
                    }
                    break;
                    case "uncompleted":
                        if(!todo.classList.contains('completed'))
                        {
                            todo.style.display="flex";
                        }
                        else{
                            todo.style.display="none";
                        }
                        break;

        }
    });
}
