"use strict";
// index.ts
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Log a message to the console
    console.log("Hello, Welcome to ApexSuite Blossom!");
    // Optionally update the DOM if an element with the id 'app' exists
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = `<h1>Hello, ApexSuite Blossom my amazing friends and investors!</h1>
                              <p>Welcome to the front-end PoC of our revolutionary business management platform.</p>`;
    }
});
