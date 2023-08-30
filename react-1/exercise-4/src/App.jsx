import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <RunningForm />
      <TableDisplay />
    </div>
  );
}

function RunningForm() {
  return (
    <div id="data-form">
      <h1>Enter Data</h1>
      <form id="form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" class="inp" /><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" class="inp"/><br /><br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" class="inp"/><br /><br />

        <label htmlFor="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" class="inp"/><br /><br />

        <button type="button">Add Data</button>
      </form>
    </div>
  );
}

function TableDisplay() {
  return (
    <div>
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Current Running (Minutes)</th>
            <th>Good Running</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}


export default App;
