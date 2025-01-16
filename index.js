import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import './index.css'; // Global styles (optional)
import Calculator from "./Calculator"; // Import the Calculator component
import Button from "./Button"; 
// Create a root for the app and render the Calculator component into it
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root using ReactDOM.createRoot
root.render(
  <React.StrictMode>
    <Calculator />  {/* Render the Calculator component */}
    <Button/>
  </React.StrictMode>
);


