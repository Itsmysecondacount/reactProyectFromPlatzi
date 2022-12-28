import React from "react";
import "./todoError.css";

function TodosError() {
    return (
        <li className="list-items">
            <p className="TodoItem-p error-todo">Error vuelva a intentarlo más tarde</p>
        </li>
    );
}

export {TodosError}
