// Step 1: Initialize the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Step 3: Select the data container element
  const dataContainer = document.getElementById("api-data");

  try {
    // Step 4: Fetch data using try-catch
    const response = await fetch(apiUrl);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    // Step 5: Clear the loading message
    dataContainer.innerHTML = "";

    // Step 6: Create and append user list
    const userList = document.createElement("ul"); // Create a <ul> element

    users.forEach((user) => {
      const listItem = document.createElement("li"); // Create a <li> element
      listItem.textContent = user.name; // Set the text content to the user's name
      userList.appendChild(listItem); // Append the <li> to the <ul>
    });

    dataContainer.appendChild(userList); // Append the <ul> to the container
  } catch (error) {
    // Step 7: Error handling
    dataContainer.innerHTML = ""; // Clear existing content
    dataContainer.textContent = "Failed to load user data."; // Display error message
    console.error("Error fetching user data:", error); // Log the error for debugging
  }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);
