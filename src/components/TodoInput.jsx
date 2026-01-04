import { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';

export function TodoInput() {
  const [input, setInput] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
