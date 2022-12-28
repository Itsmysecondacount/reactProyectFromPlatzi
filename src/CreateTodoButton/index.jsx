import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton(){

    return (
        <TodoContext.Consumer>
            {({setOpenModal}) => (
                <button 
                className="finder-search"
                onClick={() => {
                    setOpenModal(true);
                }}
                >
                Agregar
                </button>
            )}
        </TodoContext.Consumer>
    );
}

export { CreateTodoButton };