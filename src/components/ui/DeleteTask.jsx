import Modal from "./Modal";
import Cross from "../../assets/cross-icon.svg";
import Info from "../../assets/info.svg";
import { useCallback, useState } from "react";
import deleteTaskAPI from "../api/deleteTask";
import clsx from "clsx";

const DeleteTask = (props) => {
  const { isOpen, onClose, task, fetchAllTasks } = props;
  const [loading, setLoading] = useState(false);

  const handleResponse = useCallback(
    function () {
      fetchAllTasks();
      onClose();
    },
    [fetchAllTasks, onClose]
  );
  const handleError = useCallback(function (errorMsg) {
    console.error(errorMsg);
    alert(errorMsg);
  }, []);
  const deleteTask = useCallback(
    function () {
      deleteTaskAPI(task._id, handleResponse, handleError, setLoading);
    },
    [handleError, handleResponse, task._id]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="delete-task-container">
        <div className="text-right delete-task-header">
          <img src={Info} className="delete-popup-info-icon" alt="Info icon" />
          <div className="close-modal-btn" onClick={onClose}>
            <img src={Cross} alt="Close popup icon" />
          </div>
        </div>
        <div className="delete-popup-content">
          <p className="delete-task-text">
            Are You Sure You Want to delete <br />{" "}
            <span className="delete-task-title"> {task.title}? </span>{" "}
          </p>
          <div className="delete-action-btns">
            <button className="btn cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button
              className={clsx(
                "btn",
                "delete-btn",
                loading && "disabled-delete-btn"
              )}
              onClick={deleteTask}
              disabled={loading}
            >
              {loading ? "Deleting" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTask;
