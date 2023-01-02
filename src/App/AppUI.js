import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { Modal } from "../Modal";

function AppUI() {
    const {loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodos,
      openModal,
      setOpenModal,
      textOpenModal,
      setTextOpenModal,
      empty,
    } = React.useContext(TodoContext);


    return (
      <React.Fragment>
      <div className='div-flex'>
      <TodoCounter 
        completedTodos={completedTodos} 
        totalTodos={totalTodos}/>
      {/* <h2>Has completado 2 de 3 TODOs</h2> */}
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
      {/* <input type="text" placeholder='Cebolla' /> */}

      <TodoList>
        {error && <TodosError/>}
        {loading && <TodosLoading/>}
        {empty && <EmptyTodos/>}

        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
          />          
        ))}
      </TodoList>

      {!!openModal && (
        <Modal 
          textOpenModal={textOpenModal}
          setTextOpenModal={setTextOpenModal}
          setOpenModal={setOpenModal}
          addTodos={addTodos}/>
      )}

      <CreateTodoButton/>
      {/* <button>+</button> */}
      </div>
    </React.Fragment>
    );
}

export {AppUI};