async function fetchTaskAPI(handleResponse, handleError) {
  try {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const endpoint = "/tasks";
    const url = `${baseUrl}${endpoint}`;

    console.log("Fetching tasks from:", url); // Debugging log

    const response = await fetch(url);

    // Check if the response is OK before parsing JSON
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const jsonData = await response.json(); // Corrected JSON parsing

    // Ensure responseData is valid before calling handleResponse
    if (!jsonData || !Array.isArray(jsonData.tasks)) {
      throw new Error(
        "Invalid response format: 'tasks' is missing or not an array."
      );
    }

    handleResponse(jsonData);
  } catch (error) {
    console.error("Fetch API Error:", error.message);
    handleError(error.message);
  }
}

export default fetchTaskAPI;
