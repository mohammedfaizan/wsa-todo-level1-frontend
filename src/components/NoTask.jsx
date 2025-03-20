import FolderWhite from "../assets/folder-white.svg";
import UserIcon from "../assets/user-icon.png";

const NoTask = (props) => {
  const { showCreateTaskScreen } = props;
  return (
    <div className="flex flex-col items-center justify-center content-section">
      <div className="content-section-container flex flex-col justify-center">
        <img src={UserIcon} loading="lazy" alt="User with no pending tasks" />
        <h1 className="no-task-primary-text">Woohoo, you're all done!</h1>
        <p className="no-task-secondary-text">
          There are no tasks added yet. Click button below to add a new task.
        </p>
        <button
          onClick={showCreateTaskScreen}
          className="btn btn-purple create-task-btn"
        >
          <img src={FolderWhite} alt="Create task icon" />
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default NoTask;
