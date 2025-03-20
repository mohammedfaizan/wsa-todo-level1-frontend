import { useCallback } from "react";
import FolderImg from "../assets/folder-white.svg";
import TaskTile from "./TaskTile";

const TaskList = (props) => {
  const {
    setActiveTask,
    tasks,
    fetchAllTasks,
    showCreateTaskScreen,
    showViewTaskScreen,
    showEditTaskScreen,
  } = props;

  const viewTask = useCallback(
    (task) => {
      setActiveTask(task);
      showViewTaskScreen();
    },
    [setActiveTask, showViewTaskScreen]
  );

  return (
    <div className="task-list-screen content-section">
      <div className="content-section-container">
        <div className="task-list-header-main">
          <p className="task-heading">🔥 Task</p>
          <button
            onClick={showCreateTaskScreen}
            className="add-task-btn cursor-pointer"
          >
            <img src={FolderImg} alt="Add task icon" />
            Add New Task
          </button>
        </div>
        <div className="task-list-container">
          {tasks.map((task) => (
            <TaskTile
              key={task._id + "-task-tile"}
              task={task}
              onClick={() => viewTask(task)}
              fetchAllTasks={fetchAllTasks}
              setActiveTask={setActiveTask}
              showEditTaskScreen={showEditTaskScreen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
