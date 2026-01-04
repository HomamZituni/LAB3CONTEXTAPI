import { createContext, useContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export function TodoProvider({ children }) {
const [todos, setTodos] = useState(() => {
const saved = localStorage.getItem('todos');
return saved ? JSON.parse(saved) : []; 
});

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);

