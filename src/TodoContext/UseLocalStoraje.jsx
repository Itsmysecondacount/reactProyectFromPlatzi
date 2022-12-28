import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [empty, setEmpty] = React.useState(false);

    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          let arrayTodos;
      
        if (!localStorageItem) {
          localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
          arrayTodos = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          arrayTodos = Array.from(parsedItem);
        }
        if (!arrayTodos.length) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }

          setItem(arrayTodos);
          setLoading(false);
        } catch(error) {
          console.log(error)
          setError(error);
          setLoading(false);
          setEmpty(false);
        }
      }, 1000)
    })
  
  
    const saveItem = (newTodos) => {
      try{
        const stringifyTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifyTodos);
        setItem(newTodos);
      } catch(error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      empty,
    };
  }

export { useLocalStorage };