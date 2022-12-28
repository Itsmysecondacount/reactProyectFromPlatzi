import React from "react";
import "./todoLoading.css"

function TodosLoading(){
    return ( 
            <React.Fragment>
            <li className="list-items loader-todo">
            <p className="TodoItem-p"></p>
            </li>
            <li className="list-items loader-todo">
            <p className="TodoItem-p"></p>
            </li>
            <li className="list-items loader-todo">
            <p className="TodoItem-p"></p>
            </li>
            </React.Fragment>
            )
        
}

export {TodosLoading}