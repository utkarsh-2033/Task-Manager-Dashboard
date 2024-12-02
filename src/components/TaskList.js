import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../redux/taskSlice";
import TaskItem from "./TaskItem";
import Card from "./Card";

const TaskList = ({ onEditTask }) => {
  const tasks = useSelector(selectFilteredTasks);
  return (
    <Card>
      {" "}
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Tasks</h2>{" "}
      <div className="grid grid-cols-1 gap-6">
        {" "}
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onEditTask={onEditTask} />
        ))}{" "}
      </div>{" "}
    </Card>
  );
};

export default TaskList;
