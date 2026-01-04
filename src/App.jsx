import { useTheme } from './contexts/ThemeContext';
import { TodoInput } from './components/TodoInput';
import { FilterButtons } from './components/FilterButtons';
import { TodoList } from './components/TodoList';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Todo App</h1>
      <ThemeToggleButton />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;
