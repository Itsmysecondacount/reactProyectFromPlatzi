import React from "react";
import ReactDOM from'react-dom';
import './Modal.css';

function Modal({textOpenModal, setTextOpenModal, setOpenModal, addTodos}) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="ModalContainer">
                <span
                    onClick={() => {
                        setOpenModal(false);
                    }}>X</span>
                <h2>Agregar TODO</h2>
                <input 
                    type="text"
                    value={textOpenModal} 
                    required
                    onChange={(event) => {
                        setTextOpenModal(event.target.value);
                    }}/>
                <label>Escribir</label>
                <button
                onClick={ () => {
                    addTodos(textOpenModal);
                    setOpenModal(false);
                    setTextOpenModal('');
                }}
                >Agregar</button>
            </div>
        </div>,
        document.getElementById('modal')
    ); 
}

export {Modal};