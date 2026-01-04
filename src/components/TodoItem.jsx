import { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';

export function TodoItem({ id, text, completed }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  const handleEdit = () => {
    if (editText.trim()) {
      editTodo(id, editText.trim());
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="todo-item">
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}
