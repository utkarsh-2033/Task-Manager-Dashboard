import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../redux/taskSlice';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  const filters = [
    { label: 'All Tasks', value: 'all' },
    { label: 'Completed Tasks', value: 'completed' },
    { label: 'Pending Tasks', value: 'pending' },
    { label: 'Overdue Tasks', value: 'overdue' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-4">
      <p className="text-lg font-bold mb-2 md:mb-0">Filters:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={`py-2 px-4 rounded-lg ${
              currentFilter === filter.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
            } hover:bg-blue-700 font-bold`}
            onClick={() => dispatch(setFilter(filter.value))}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
