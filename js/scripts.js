let todoList = [];

let addTodo = () => {
    let temp = localStorage.getItem("todoList");
    if (temp !== null) {
        todoList = JSON.parse(temp);
    }
    let todo  = {
        content: document.getElementById("todo").value,
        priority: document.getElementById("priority").value,
        isDone: false
    }
    document.getElementById("todo").value = null;
    if (todo.content.length > 0) todoList.push(todo);
    showList(todoList);
}

let remove = (i) => {
    todoList.splice(i, 1);
    showList(todoList);
}

let done = (i) => {
    todoList[i].isDone = !(todoList[i].isDone);
    showList(todoList);
}

let showAll = () => {
    showList(todoList);
}

let showDone = () => {
    let doneList = todoList.filter((item) => item.isDone);
    showList(doneList);
}

let showNotDone = () => {
    let notDoneList = todoList.filter((item) => (!(item.isDone)));
    showList(notDoneList);
}

let showList = (list) => {
    list.sort((a, b) => a.priority - b.priority);
    let message = list.map((item, i) => {
        let status, textStyle;
        if (item.isDone) {
            status = "Mark Not Done";
            textStyle = "text-decoration: line-through";
        } else {
            status = "Mark Done";
            textStyle = "";
        }
        return (`<li style="${textStyle};">${item.content} <a href='#' onclick='remove(${i})'>Wrong One!</a> | <a href="#" onclick='done(${i})'>${status}</a></li>`);
    }).join("");
    document.getElementById("todo-list").innerHTML = message;
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log(message);
}
