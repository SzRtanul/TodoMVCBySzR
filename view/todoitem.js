import Todo from "../modell/Todo.js";

export default class TodoItem{
    
   /* static #todo = ;

    static #staticConstructorDummyResult = (function() {
        console.log('static constructor called') // once!
    })(); */

    constructor(){
        this.todo = new Todo();
    }

    static getTodoItem(feladat="", status=false){
        return `<div class="todoitem"><p class="feladat">${feladat}</p>` +
        `<button class="status">${TodoItem.getStatusString(status)}</button></div>`;
    }

    static getStatusString(status){
        return status ? "PIPA" : "X";
    }

    getOTodoObject(){
        return this.todo;
    }

    addEventToAllItem(classreferences = document.getElementsByClassName("#")){
        for(let i = 0; i < classreferences.length; i++){
            let itemlist = classreferences[i].getElementsByClassName("status");
            for(let item = 0; item<itemlist.length; item++){
                itemlist[item].addEventListener("click", function(e){
                    itemlist[item].innerHTML = TodoItem.getStatusString();
                    console.log("Ívönt hozzáadása sikeres.");
                });
            }

        }
    }
}

