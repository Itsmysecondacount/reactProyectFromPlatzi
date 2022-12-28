import React from "react";
import "./TodoItem.css";
import { AiOutlineCloseCircle, AiOutlineCheckCircle, AiFillCheckCircle} from "react-icons/ai";

function TodoItem(props){

    return (
        <li className="list-items">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick= {props.onComplete}
            >
                {props.completed ? <AiFillCheckCircle size="22px"/> : <AiOutlineCheckCircle size="22px"/>}
            </span>
            <p 
                className={`TodoItem-p ${props.completed && 'TodoItem--completed'}`}
            >
                {props.text}
            </p>
            <span 
                onClick= {props.onDelete}
            >
                <AiOutlineCloseCircle size="24px"/>
            </span>
        </li>
    );
}

export { TodoItem };