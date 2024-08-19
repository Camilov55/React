
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from  '../TodosLoading'
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    searchedTodos,
    deleteTodo,
}) {
    return (
        <> {/* '<>' = '<React.Fragment>' */}
      
            <TodoCounter 
                completed={completedTodos} 
                total={totalTodos} 
            /> 
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        
            <TodoList>
                {loading && < TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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

export { AppUI };