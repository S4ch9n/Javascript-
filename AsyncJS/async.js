/**
 * Fetches data from a mock API and processes it
 * @returns {Promise<Object>} A promise that resolves with the fetched data
 */
async function fetchData() {
  try {
    // Step 1: Fetch data from an API (simulated using fetch)
    // 'await' pauses execution until the Promise from fetch() resolves
    const response = await fetch('https://api.example.com/data');

    // Step 2: Parse the response as JSON
    // 'await' waits for the Promise from response.json() to resolve
    const data = await response.json();

    // Log the received data
    console.log('Data received:', data);

    // Step 3: Return the data (wrapped in a resolved Promise automatically)
    return data;

  } catch (error) {
    // If any step fails (network error, invalid JSON, etc.), catch it here
    console.error('Error fetching data:', error);

    // Re-throw the error so the calling function can handle it if needed
    throw error;
  }
}

// ===== Using the async function =====

// Option 1: Using .then() and .catch() (Promise chaining)
fetchData()
  .then(data => {
    // This runs if fetchData() resolves successfully
    console.log('Processing data:', data);
  })
  .catch(error => {
    // This runs if fetchData() rejects (throws an error)
    console.error('Error in processing:', error);
  });

// Option 2: Using async/await in another function
async function processData() {
  try {
    // Wait for fetchData() to complete before proceeding
    const data = await fetchData();

    // If successful, log the processed data
    console.log('Data processed successfully:', data);

  } catch (error) {
    // Handle any errors from fetchData() here
    console.error('Failed to process data:', error);
  }
}

// Call the processing function
processData();

// Key Points Explained:
// async Function

// Always returns a Promise, even if you return a non-Promise value.

// Allows the use of await inside it.

// await Keyword

// Pauses execution until the Promise settles (resolves or rejects).

// Can only be used inside async functions.

// Error Handling

// try/catch blocks handle errors in async code like synchronous code.

// Without try/catch, unhandled rejections may crash Node.js or fail silently in browsers.

// Two Ways to Call Async Functions

// Promise-style: .then() and .catch()

// Async/Await: Inside another async function using await