import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/taskSlice';

const SearchAndAddTask = ({ onAddTask }) => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Search tasks..."
        className="mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-lg border border-gray-300"
        onChange={handleSearchChange}
      />
      <button onClick={onAddTask} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
       <span className='font-bold'>------Add Task------</span>
      </button>
    </div>
  );
};

export default SearchAndAddTask;
