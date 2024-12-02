import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/taskSlice';

const TaskForm = ({ task, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      dispatch(editTask({ id: task.id, title, description, dueDate }));
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false,
      };
      dispatch(addTask(newTask));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
          Cancel
        </button>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          {task ? 'Edit Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
