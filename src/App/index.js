import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


function App() {

  const {
    item: todos, // Se llamo a item. Para no cambiar el nombre a todos los 'todos' tambien se renombraron a item
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  //const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;


  // Efectos, nos permiten ejecutar cierta parte del código de nuestros componentes para que no se ejecuten cada vez que hacemos render de nuestro componente
  //console.log('Log 1');
  /* React.useEffect(() => {
    console.log('Loooooog 2')
  }); */
  /* React.useEffect(() => { // hace que el estado se ejecute una sola vez por el array vacio
    console.log('Loooooog 2')
  }, [] ); */
  /* React.useEffect(() => { // Hace que se ejecute esta parte del codigo solo cuando se ejecuta el estado totalTodos
    console.log('Loooooog 2')
  }, [totalTodos] );
  console.log('Log 3'); */


  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  }
);

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( (todo) => todo.text === text);
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
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}  
    />
  );
}

export default App;
