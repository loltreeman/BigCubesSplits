// These are the steps for each method with the puzzle type
const splitsSteps = {
  "4x4": {
    "Yau":   ["F2C", "F3E", "L4C", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "3x3"],
    "Hoya":  ["F4C", "F4E", "L2C", "L8E", "3x3"]
  },
  "5x5": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "L2C", "L8E", "3x3"]
  },
  "6x6": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "L2C", "L8E", "3x3"]
  },
  "7x7": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "L2C", "L8E", "3x3"]
  }
};

const splitsData = {
  "Yau": {
    "5x5": { "F2C": 0.1575, "F3E": 0.146, "L4C": 0.188, "L9E": 0.3475, "3x3": 0.1605 },
    "6x6": { "F2C": 0.2055, "F3E": 0.1083, "L4C": 0.2602, "L9E": 0.2905, "3x3": 0.1354 },
    "7x7": { "F2C": 0.2335, "F3E": 0.1095, "L4C": 0.2867, "L9E": 0.2936, "3x3": 0.0768 }
  },
  "Redux": {
    "5x5": { "F2C": 0.1354, "L4C": 0.1799, "F8E": 0.3475, "L4E": 0.135, "3x3": 0.2023 },
    "6x6": { "F2C": 0.1928, "L4C": 0.2454, "F8E": 0.3069, "L4E": 0.1129, "3x3": 0.142 },
    "7x7": { "F2C": 0.2295, "L4C": 0.2798, "F8E": 0.2851, "L4E": 0.1087, "3x3": 0.0968 }
  },
  "Hoya": {
    "5x5": { "F4C": 0.2802, "F4E": 0.184, "L2C": 0.0595, "L8E": 0.3105, "3x3": 0.1695 },
    "6x6": { "F4C": 0.3956, "F4E": 0.175, "L2C": 0.0627, "L8E": 0.2405, "3x3": 0.1262 },
    "7x7": { "F4C": 0.4234, "F4E": 0.1599, "L2C": 0.085, "L8E": 0.2558, "3x3": 0.0759 }
  }
};

const puzzleSelect = document.getElementById("puzzle-select");
const methodSelect = document.getElementById("method-select");
const tableHead = document.querySelector("#splits-table thead");
const tableBody = document.querySelector("#splits-table tbody");

// Create an array that represents what I want to show in the table
function buildTableArray(puzzle, method) {

  // Pull the header names from splitsSteps
  const steps = splitsSteps[puzzle][method];

  // Start building the table as an array of rows
  const tableArray = [];

  // First row will be the headers
  const headerRow = steps;
  tableArray.push(headerRow);

  // Second row will be the placeholder values (all "-")
  const defaultRow = Array(steps.length).fill("-");
  tableArray.push(defaultRow);

  return tableArray;
}


function updateTable() {
  // 1. Get the selected puzzle and method
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;

  // 2. Build the table data (first row = headers, rest = body rows)
  const tableArray = buildTableArray(puzzle, method);

  // 3. Clear any old content
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  const headerRow = document.createElement("tr");
  const headerCells = tableArray[0];  // first row: step names

  for (const stepName of headerCells) {
    const th = document.createElement("th");
    th.textContent = stepName;  // e.g. "F2C", "L4C", ...
    headerRow.appendChild(th);
  }

  tableHead.appendChild(headerRow);

  // Every row after index 0 belongs in <tbody>
  const bodyRows = tableArray.slice(1);

  for (const row of bodyRows) {
    const tr = document.createElement("tr");

    // Go cell by cell in this row
    for (const value of row) {
      const td = document.createElement("td");
      td.textContent = value;  // e.g. "-", "0.121", etc.
      tr.appendChild(td);
    }

    // Add the finished row into <tbody>
    tableBody.appendChild(tr);
  }
}

// Run once on load
updateTable();

// Update when selection changes
puzzleSelect.addEventListener("change", updateTable);
methodSelect.addEventListener("change", updateTable);