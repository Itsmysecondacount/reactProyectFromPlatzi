import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";


function TodoSearch(){  

    return (
        <TodoContext.Consumer>
            {({searchValue, setSearchValue}) => (
                <form>
                <div className="box">
                    <input
                        value={searchValue} 
                        className="finder-todosearch finder" 
                        type="text" 
                        required="True"
                        onChange={(event) => {
                            setSearchValue(event.target.value)
                        }}
                    />
                    <label>Buscar</label>
                </div>
            </form>
            )}
        </TodoContext.Consumer>
    );
}

export { TodoSearch };