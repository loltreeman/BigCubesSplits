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
    "Hoya":  ["F4C", "F2C", "M2C", "F4E", "L2C", "L8E", "3x3"]
  },
  "6x6": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "F4E", "L2C", "L8E", "3x3"]
  },
  "7x7": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "F4E", "L2C", "L8E", "3x3"]
  }
};

// These are the average proportions for each step in each method
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

// This is an input for global average time in seconds
const avgInput = document.getElementById("global-average");

// Create an array that represents what I want to show in the table
function buildTableArray(puzzle, method, avgSeconds) {
  // 1. Get the step names for puzzle+method
  const steps = splitsSteps[puzzle][method];

  // 2. Start building the table rows
  const tableArray = [];

  // Row 1: Step headers
  tableArray.push(steps);

  // Row 2: Suggested times based on avgSeconds
  if (avgSeconds && splitsData[method] && splitsData[method][puzzle]) {
    const proportions = splitsData[method][puzzle];

    // Build the suggested row step by step
    const suggestedRow = steps.map(step => {
      // Find this step's proportion
      const proportion = proportions[step];

      // If we have a valid proportion, calculate the time
      if (proportion) {
        const timeForStep = proportion * avgSeconds;
        return timeForStep.toFixed(2); 
      }

      // Otherwise just return a placeholder
      return "-";
    });

    tableArray.push(suggestedRow);
  }

  return tableArray;
}


function updateTable() {
  // 1. Get the selected puzzle and method
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;

  const avgSeconds = parseFloat(avgInput.value);

  // 2. Build the table data
  const tableArray = buildTableArray(puzzle, method, avgSeconds);

  // 3. Clear any old content
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  const headerRow = document.createElement("tr");
  const headerCells = tableArray[0];

  for (const stepName of headerCells) {
    const th = document.createElement("th");
    th.textContent = stepName;
    headerRow.appendChild(th);
  }

  tableHead.appendChild(headerRow);

  const bodyRows = tableArray.slice(1);

  for (const row of bodyRows) {
    const tr = document.createElement("tr");
    for (const value of row) {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
}

// Run once on load
updateTable();

// Update when selection OR avg input changes
puzzleSelect.addEventListener("change", updateTable);
methodSelect.addEventListener("change", updateTable);
avgInput.addEventListener("input", updateTable);
