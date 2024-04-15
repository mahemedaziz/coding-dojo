import React, { useState } from "react";

const Tasks = ({ tasks, setTasks }) => {
  const [taskText, setTaskText] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;
    const newTask = { text: taskText };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  //! completed = false
  const toggleCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(index)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
