import { useFilter } from '../contexts/FilterContext';

export function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="filter-buttons">
      <button 
        className={filter === 'all' ? 'active' : ''} 
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={filter === 'active' ? 'active' : ''} 
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button 
        className={filter === 'completed' ? 'active' : ''} 
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}
