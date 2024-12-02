import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { selectTasks } from '../redux/taskSlice';
import { isTaskOverdue } from '../redux/taskSlice';


const StatsCards = () => {
  const tasks = useSelector(selectTasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;
  const overdueTasks = tasks.filter(task => !task.completed && isTaskOverdue(task.dueDate)).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card >
        <h2 className="text-xl font-bold">Total Tasks</h2>
        <p className="text-3xl">{totalTasks}</p>
      </Card>
      <Card>
        <h2 className="text-xl font-bold">Completed Tasks</h2>
        <p className="text-3xl">{completedTasks}</p>
      </Card>
      <Card>
        <h2 className="text-xl font-bold">Pending Tasks</h2>
        <p className="text-3xl">{pendingTasks}</p>
      </Card>
      <Card>
        <h2 className="text-xl font-bold">Overdue Tasks</h2>
        <p className="text-3xl">{overdueTasks}</p>
      </Card>
    </div>
  );
};

export default StatsCards;
