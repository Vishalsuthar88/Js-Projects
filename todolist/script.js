

const button1 = document.querySelector('#addButton');
const button2 =document.getElementById("deleteAll")
const todolist = document.querySelector('.todolist')

    const todoList = document.getElementById("todolist");
    if(localStorage.length === 0) {
        const noItem = document.createElement("li");
        noItem.textContent = "Empty Todo List";
        todoList.appendChild(noItem)
    } else {
        for(let i =0; i<localStorage.length;i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key);
            const li = document.createElement("li");
            const button = document.createElement("button")
            button.textContent ="Delete"
            li.textContent = value;
            todoList.appendChild(li);
            todoList.appendChild(button);
        }
    }


const addTodo =() =>{
    // const deletetodo = "Delete"
    const inputValue = document.getElementById('myInput').value
    // const li = document.createElement('li')
    // const button = document.createElement('button')
    // const value = document.createTextNode(deletetodo)
    // button.appendChild(value)
    // const t = document.createTextNode(inputValue);
    
    // li.appendChild(button)
    // li.appendChild(t);

    //checking input validation
    if(inputValue === ""){
        alert("Please enter a valid value.")
    } else{
        localStorage.setItem( inputValue,inputValue)
        location.reload();
        // todolist.appendChild(li)

    }

    document.getElementById('myInput').value = "";
    
}
const deleteAllfunc =()=>{
    const action =confirm("Are you sure, You want to delete all todo?")
    if(action){
        localStorage.clear()
        location.reload();
    }
}
button1.addEventListener('click', addTodo)
button2.addEventListener('click', deleteAllfunc)





























// const buttonEl = document.querySelector("#button");
// const todoList = document.querySelector("#todo_list");

// function addTodo() {
//     const li = document.createElement("li");
//     let inputValue = document.querySelector(".input").value;
//     const t = document.createTextNode(inputValue);
//     li.appendChild(t);

//     // Cheack input validation
//     if (inputValue === "") {
//         alert("Please enter a valid value");
//     } else {
//         todoList.appendChild(li);
//     }
//     console.log(inputValue);
//     document.querySelector("input").value = "";
// }

// buttonEl.addEventListener("click", addTodo);