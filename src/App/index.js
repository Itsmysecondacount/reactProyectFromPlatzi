// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';

  // const defaultTodos = [
  // {text: 'Cortar cebolla', completed: true},
  // {text: 'Tomar curso de react', completed: false},
  // {text: 'Ordenar cuarto', completed: false},
  // {text: 'Lavar Ropa', completed: true},
  // ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
