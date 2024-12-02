import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTask, markAsCompleted } from '../redux/taskSlice';
import Card from './Card';

const TaskItem = ({ task, onEditTask }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(markAsCompleted({ id: task.id, completed: !task.completed }));
  };

  return (
    <Card>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4" >
        <div className="w-full md:w-4/5" onClick={()=>navigate(`/tasks/${task.id}`)}>
          <h3 className="text-2xl font-bold">{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0 w-full md:w-auto justify-end">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <button
            className="bg-yellow-500 text-white py-1 px-2 rounded-lg hover:bg-yellow-600"
            onClick={() => onEditTask(task)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white py-1 px-2 rounded-lg hover:bg-red-700"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
