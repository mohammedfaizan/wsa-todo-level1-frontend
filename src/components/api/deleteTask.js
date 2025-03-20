async function deleteTaskAPI(taskId, handleResponse, handleError, setLoading) {
  setLoading(true);
  try {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const endpoint = `/tasks/${taskId}`;
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }

    handleResponse("Task deleted successfully");
  } catch (error) {
    handleError(new Error(error.message || "Unknown Error"));
  } finally {
    setLoading(false);
  }
}

export default deleteTaskAPI;
