import React from "react";

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

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName, JSON.stringify(initialValue));
  
        let parsedItem;
  
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = [];
        } 
        else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      }
      catch(error){
        setLoading(false);
        setError(true);
      }
    }, 2000);
    
  }, []);


  const saveItem = (newItem) => {
    localStorage.setItem('TODO_V1', JSON.stringify(newItem));
      setItem(newItem);
  };
  return {
    item, 
    saveItem, 
    loading, 
    error,
  };
}

export { useLocalStorage };