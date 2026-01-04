import { useTodos } from '../contexts/TodoContext';
import { useFilter } from '../contexts/FilterContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <p>No todos yet! Add one above.</p>;
  }

  const hasCompleted = todos.some(todo => todo.completed);

  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
      {hasCompleted && <button onClick={clearCompleted}>Clear Completed</button>}
    </div>
  );
}
