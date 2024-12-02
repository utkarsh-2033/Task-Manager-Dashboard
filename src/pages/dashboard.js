import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCard";
import FilterButtons from "../components/FilterButtons";
import SearchAndAddTask from "../components/SearchAndAddTask";
import TaskList from "../components/TaskList";
import Modal from "../components/Modal";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const handleAddTask = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };
  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {" "}
      <Navbar />{" "}
      <div className="p-6 space-y-6">
        {" "}
        <StatsCards /> 
        <FilterButtons />{" "}
        <SearchAndAddTask onAddTask={handleAddTask} />{" "}
        <TaskList onEditTask={handleEditTask} />{" "}
      </div>{" "}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {" "}
        <TaskForm task={selectedTask} onClose={handleCloseModal} />{" "}
      </Modal>{" "}
    </div>
  );
};
export default Dashboard;
