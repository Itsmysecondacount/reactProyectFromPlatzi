import React from "react";
import "./TodoSearch.css";


function TodoSearch({searchValue, setSearchValue}){  

    return (
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
    );
}

export { TodoSearch };