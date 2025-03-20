import CreateTask from "./CreateTask";
import NoTask from "./NoTask";
import TaskList from "./TaskList";
import EditTask from "./EditTask";
import ViewTask from "./ViewTask";
import { useCallback, useEffect, useState } from "react";
import fetchTasksAPI from "./api/fetchTasks";
import Loading from "./ui/Loading";

const TaskMain = () => {
  // We manage current screen/routing thorugh state in a Single Page Application (SPA)
  const [currComponent, setCurrComponent] = useState("loading");
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState();

  // The below functions are passed as props to the child components. If they are recreated,
  // the child components will render again, decreasing performance.
  // We memoize functions using useCallback so that they are not recreated on every render.
  const showNoTaskScreen = useCallback(function () {
    setCurrComponent("noTask");
  }, []);
  const showCreateTaskScreen = useCallback(function () {
    setCurrComponent("createTask");
  }, []);
  const showTaskListScreen = useCallback(function () {
    setCurrComponent("taskList");
  }, []);
  const showEditTaskScreen = useCallback(function () {
    setCurrComponent("editTask");
  }, []);
  const showViewTaskScreen = useCallback(function () {
    setCurrComponent("viewTask");
  }, []);

  const handleResponse = useCallback(
    function (responseData) {
      if (!responseData || !Array.isArray(responseData.tasks)) {
        showNoTaskScreen();
        return;
      }

      setTasks(responseData.tasks);
      if (responseData.tasks.length) {
        showTaskListScreen();
      } else {
        showNoTaskScreen();
      }
    },
    [showNoTaskScreen, showTaskListScreen]
  );

  const handleError = useCallback(function (errorMsg) {
    // Alert the user with the error message and log it to the console
    alert(errorMsg);
    console.error(errorMsg);
  }, []);

  const fetchAllTasks = useCallback(
    function () {
      // These two functions are memoized using useCallback and won't change on re-renders
      // Therefore, it's safe to include them in the dependency array
      fetchTasksAPI(handleResponse, handleError);
    },
    [handleError, handleResponse]
  );

  // Initial effect
  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);

  return (
    // The empty JSX tag <></> is shorthand for <React.Fragment></React.Fragment> in most cases
    <>
      {currComponent === "loading" && <Loading />}
      <div id="container-div">
        {currComponent === "noTask" && (
          <NoTask showCreateTaskScreen={showCreateTaskScreen} />
        )}
        {currComponent === "taskList" && (
          <TaskList
            tasks={tasks}
            setActiveTask={setActiveTask}
            fetchAllTasks={fetchAllTasks}
            showCreateTaskScreen={showCreateTaskScreen}
            showViewTaskScreen={showViewTaskScreen}
            showEditTaskScreen={showEditTaskScreen}
          />
        )}
        {currComponent === "createTask" && (
          <CreateTask
            fetchAllTasks={fetchAllTasks}
            showTaskListScreen={showTaskListScreen}
          />
        )}
        {currComponent === "viewTask" && (
          <ViewTask
            task={activeTask}
            showTaskListScreen={showTaskListScreen}
            fetchAllTasks={fetchAllTasks}
            setActiveTask={setActiveTask}
            showEditTaskScreen={showEditTaskScreen}
          />
        )}
        {currComponent === "editTask" && (
          <EditTask
            task={activeTask}
            fetchAllTasks={fetchAllTasks}
            showTaskListScreen={showTaskListScreen}
          />
        )}
      </div>
    </>
  );
};

export default TaskMain;
