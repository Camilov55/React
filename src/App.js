import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
 
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso de React.js', completed: false },
  { text: 'Llorar con la llaorana', completed: false },
  { text: 'LALALALALALa', completed: false },
]; */
// localStorange.setItem('TODOS_V1' JSON.stringify(defaultTodos));  --> Agregar los datos en el almacenamiento
// localStorange.removeItem('TODO_V1');  --> Elimina lo que se guarde en el almacenamiento 


// la function useLocarStorage es un un Custom Hooks
function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName, JSON.stringify(initialValue));

  let parsedItem;

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  } 
  else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem('TODO_V1', JSON.stringify(newItem));
     setItem(newItem);
  };
  return [item, saveItem];
}


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  //const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  }
);

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text = text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <> {/* '<>' = '<React.Fragment>' */}
      
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} /> 
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}  
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
