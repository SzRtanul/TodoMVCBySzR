import TodoItem from "./view/todoitem.js";

let todoItem = new TodoItem();

let list = document.getElementsByClassName("todocontent");
let megjelenit = "";

for(let i = 0; i < 6; i++){
    megjelenit += todoItem.getTodoItem("Beadni az injekciót.", false);
}

for(let item of list){
    item.innerHTML = megjelenit;
}
todoItem.addEventToAllItem(list);