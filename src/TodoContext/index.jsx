import React from "react";
import { useLocalStorage } from "./UseLocalStoraje";


const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        empty,
      } = useLocalStorage('TODOS_V1',[]);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const [textOpenModal, setTextOpenModal] = React.useState('');
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (! searchValue.length >= 1){
        searchedTodos = todos; 
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })   
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // };
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        // const todoNew = todos.filter(todo => todo.text !== text); método 1
        //Método 2
        const todoIndx =  todos.findIndex(todo => todo.text === text);
        const todoNew = [...todos];
        todoNew.splice(todoIndx, 1);
        //no me sale con el método 2 xd
    
        saveTodos(todoNew);
      };
    
      const addTodos = (text) => {
        console.log(text + ' agregado :V');
        const todoNew = [...todos];
        const nuevoDic = {text: text, completed: false};
        todoNew.push(nuevoDic);
    
        saveTodos(todoNew);
      };
    
    
    
      // console.log('Render (antes de el use effect)');
    
      // React.useEffect(() => {
      //   console.log('use effect');
      // }, [totalTodos])
    
      // console.log('Render (despues de el use effect)');
    

    return (
        <TodoContext.Provider value={{
            loading,
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
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};