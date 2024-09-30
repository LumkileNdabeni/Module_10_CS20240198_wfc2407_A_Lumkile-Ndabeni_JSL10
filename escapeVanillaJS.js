document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json')  // Fetch the list of books from the JSON file
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books); // Find the most recent book from the fetched data
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`; // Display the title of the most recent book in the designated element
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']); // Define a set of JavaScript concepts
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']); // Define a set of React concepts
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts); // Finds common concepts between two sets
        // Display the common concepts in the designated element
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => { // Attach click event to the "solveRoom3" button
        fetch('directions.json')  // Fetch directions from the JSON file
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions) // Navigate through the labyrinth using the fetched directions
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").textContent = message; // Display the final message in the designated element
                    });
            });
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

// Function to find the most recent book from the list
function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA].filter(item => setB.has(item))); // Logic to find intersection of two sets
    return intersection;
}

// Function to find the intersection of two sets
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        await new Promise(resolve => setTimeout(resolve, 1000)); // Introduce a delay to simulate navigation time
        console.log(`Navigating: ${direction.step}`);
    }
    // Return a completion message after navigating through the labyrinth
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

