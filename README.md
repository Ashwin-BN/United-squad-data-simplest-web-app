**README**

Hey there! This README gives you a peek into the decisions behind this football player data web app, the challenges tackled, and how I tested everything to make sure it runs smoothly.

**Design Choices:**

For this assignment, I chose to build a simple web application centered around the Manchester United squad, focusing on player data. 

1. **JSON Data Creation:** I created a JSON file named `data.json` containing player data for at least 10 Manchester United squad members. Each entry includes properties such as name, jersey number, and position.

2. **Web API Introduction & Implementation:** 
   - I developed a basic RESTful API using Node.js and Express to serve the JSON data. The API includes two endpoints: `/api/data` to retrieve all player entries and `/api/data/:id` to retrieve a single player entry by ID.

3. **AJAX Review:**
   - I created an HTML page that utilizes AJAX to fetch and display data from the API without refreshing the page.
   - Implemented a "Load All Data" button to retrieve and display all player entries from the `/api/data` endpoint.
   - Added an input field where users can enter a player's ID to fetch a specific entry from the `/api/data/:id` endpoint and display it.
   - Enhanced the user interface with CSS to improve presentation and styling.
   - Implemented error handling in AJAX calls to manage scenarios such as non-existent IDs or server issues.

**Challenges Faced:**

One challenge I encountered was with the `loadDataByJerseyNo` function initially not working as expected. The issue was resolved by ensuring proper handling of the response data and addressing any errors that occurred during the AJAX call. Debugging techniques such as console logging and examining network requests helped identify and resolve the issue.

**Testing:**

To test the application, I first ensured that the Node.js server was running and that the API endpoints were accessible. I then tested the functionality of fetching all data and retrieving specific player entries using both valid and invalid IDs. Additionally, I tested error handling scenarios to ensure that appropriate messages were displayed to the user in case of errors. Finally, I checked the responsiveness and styling of the HTML page to ensure a smooth user experience.