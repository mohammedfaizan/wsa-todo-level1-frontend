async function updateTaskAPI(
  values,
  taskId,
  handleResponse,
  handleError,
  setLoading
) {
  setLoading(true);
  try {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const endpoint = `/tasks/${taskId}`;
    const url = `${baseUrl}${endpoint}`;

    const requestBody = JSON.stringify({
      title: values.taskTitle,
      description: values.taskDescription,
      due_date: values.taskDueDate?.toISOString(),
    });

    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw new Error(jsonData.message || "Unknown error occurred");
    }

    handleResponse(jsonData);
  } catch (error) {
    handleError(new Error(error.message || "Unknown Error"));
  } finally {
    setLoading(false);
  }
}

export default updateTaskAPI;
