import React from 'react';

const FilterButtons = ({markAllComplete,handleFilterChange}) => {
  return (
    <div className="flex space-x-4 items-center">
       <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className="text-sm bg-purple-500 text-white px-2 py-1 rounded"
        onClick={markAllComplete}
      >
        Mark All Completed
      </button>
      
    </div>
  );
};

export default FilterButtons;