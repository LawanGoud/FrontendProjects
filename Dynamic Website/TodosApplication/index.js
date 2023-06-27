let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById('addTodoButton');
let saveTodoButton = document.getElementById("saveTodoButton");

saveTodoButton.onclick = function(){
    localStorage.setItem("todoList",JSON.stringify(todoList));
};

function getTodoListFromLocalStorage(){
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null){
        return [];
    }else{
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();

function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElement = document.getElementById(labelId);
    // if (checkboxElement.checked === true){
    //     labelElement.classList.add("checked");
    // }else{
    //     labelElement.classList.remove("checked");
    // }
    labelElement.classList.toggle("checked");
}


//Deleting a Todo Item
function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    let deleteElementIndex = todoList.findIndex(function(eachTodo){
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId){
            return true;
        }else{
            return false;
        }
    });
    todoList.splice(deleteElementIndex,1);
}

let todosCount = todoList.length;
//Access User Input Value
function onAddTodo(){
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue ===""){
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo:todosCount,
        isChecked:false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

//Add Todo Item
addTodoButton.onclick = function(){
    onAddTodo();
}

//reusable function
function createAndAppendTodo(todo){
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId,labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex","flex-row","label-container");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("li");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

// creating Multiple Todos
for(let todo of todoList){
    createAndAppendTodo(todo);
}

