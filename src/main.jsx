import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoProvider } from './contexts/TodoContext';
import { FilterProvider } from './contexts/FilterContext';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  </StrictMode>
);
