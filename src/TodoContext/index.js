import React from "react";
import { useLocalStorage } from "./useLocalStorage";    

const TodoContext = React.createContext();

function TodoProvider({children}) {

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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            searchedTodos,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }