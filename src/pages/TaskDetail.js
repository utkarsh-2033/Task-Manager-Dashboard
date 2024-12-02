import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectTasks, deleteTask, markAsCompleted } from "../redux/taskSlice";
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const TaskDetail = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    selectTasks(state).find((task) => task.id === Number(taskId))
  );

  if (!task) {
    return <p className="text-center text-blue-500 py-3">Task not found</p>;
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    navigate("/tasks");
  };

  const handleToggleComplete = () => {
    dispatch(markAsCompleted({ id: task.id, completed: !task.completed }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="p-6 space-y-6">
        <button
          className="flex items-center text-blue-600 hover:text-blue-800"
          onClick={() => navigate("/tasks")}
        >
          {" "}
          <FaArrowLeft className="mr-2" /> Back to Tasks{" "}
        </button>
        <Card>
          <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
          <p className="mb-4">{task.description}</p>
          <p className="mb-4">Due Date: {task.dueDate}</p>
          <p className="mb-4">
            Status: {task.completed ? "Completed" : "Pending"}
          </p>
          <div className="flex space-x-4">
            {/* <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
              onClick={() => navigate(`/tasks/edit/${task.id}`)}
            >
              Edit
            </button> */}
            <button
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={handleToggleComplete}
            >
              {task.completed ? "Mark as Pending" : "Mark as Completed"}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TaskDetail;
