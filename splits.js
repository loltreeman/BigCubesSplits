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

const splitsData = {
  "Yau": {
    "4x4": { "F2C": 0.1027, "F3E": 0.1357, "L4C": 0.1498, "LCE": 0.0758, "L8E": 0.2025, "3x3": 0.3335 },
    "5x5": { "F2C": 0.1486, "F3E": 0.1448, "L4C": 0.1962, "L9E": 0.3509, "LCE": 0.0606, "L8E": 0.2902, "3x3": 0.1596 },
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
const avgInput = document.getElementById("global-average");
const tableHead = document.querySelector("#splits-table thead");
const tableBody = document.querySelector("#splits-table tbody");

const customSplitsTableHead = document.querySelector("#custom-splits-table thead");
const customSplitsTableBody = document.querySelector("#custom-splits-table tbody");
const estimatedSplitsTableHead = document.querySelector("#estimated-splits-table thead");
const estimatedSplitsTableBody = document.querySelector("#estimated-splits-table tbody");
const variationTableHead = document.querySelector("#variation-table thead");
const variationTableBody = document.querySelector("#variation-table tbody");

const l9eToggleDiv = document.getElementById("l9e-toggle-button");
const l9eToggle = document.getElementById("toggle-l9e");
const f4cToggleDiv = document.getElementById("f4c-toggle-button");
const f4cToggle = document.getElementById("toggle-f4c");

let customSplits = {}; // e.g. { "L4C": 12.34 }

function getStepsWithToggles(puzzle, method) {

  // .slice() returns selected elements in a new array (in case I want to add more splits)
  let steps = splitsSteps[puzzle][method].slice();

  // For Yau on 5x5/6x6/7x7, toggle between L9E and (LCE, L8E)
  if (method === "Yau" && ["5x5", "6x6", "7x7"].includes(puzzle)) {
    l9eToggleDiv.classList.remove("hidden");
    if (l9eToggle.checked) {
      // Show LCE and L8E, hide L9E
      steps = steps.filter(step => step !== "L9E");
    } else {
      // Show L9E, hide LCE and L8E
      steps = steps.filter(step => step !== "LCE" && step !== "L8E");
    }
  } else {
    l9eToggleDiv.classList.add("hidden");
  }

  // For Hoya on 5x5/6x6/7x7, toggle between F4C and (F2C, M2C) 
  if (method === "Hoya" && ["5x5", "6x6", "7x7"].includes(puzzle)) {
    f4cToggleDiv.classList.remove("hidden");
    if (f4cToggle.checked) {
      // Show F2C and M2C, hide F4C
      steps = steps.filter(step => step !== "F4C");
    } else {
      // Show F4C, hide F2C and M2C
      steps = steps.filter(step => step !== "F2C" && step !== "M2C");
    }
  } else {
    f4cToggleDiv.classList.add("hidden");
  }

  return steps;
}

function buildTableArray(puzzle, method, avgSeconds) {
  // Get the steps we need to show (taking into account the toggle)
  const steps = getStepsWithToggles(puzzle, method);

  // Start building the table (first row will always be the steps themselves)
  const tableArray = [];
  tableArray.push(steps);

  // Only continue if we have an average solve time AND data for this method + puzzle
  if (avgSeconds && splitsData[method] && splitsData[method][puzzle]) {
    const proportions = splitsData[method][puzzle];

    // Figure out how much time the user has already "reserved" with custom values,
    // and how much time is left for the steps that use proportions.
    let totalCustom = 0;   // total of all user-entered times
    let totalProp = 0;     // total weight of proportion-based steps
    let propSteps = [];    // list of steps that will use proportions

    steps.forEach(step => {
      if (customSplits[step] !== undefined && customSplits[step] !== "") {
        // If the user typed a time, add it to the "custom total"
        totalCustom += parseFloat(customSplits[step]);
      } else if (proportions[step]) {
        // Otherwise, this step will share the leftover time proportionally
        totalProp += proportions[step];
        propSteps.push(step);
      }
    });

    // Now build the "suggested times" row for the table
    const suggestedRow = steps.map(step => {
      if (customSplits[step] !== undefined && customSplits[step] !== "") {
        // Use the exact time the user typed in
        return customSplits[step];
      }
      const prop = proportions[step];
      if (prop && totalProp > 0) {
        // Give this step a share of the leftover time based on its proportion
        return (((avgSeconds - totalCustom) * prop) / totalProp).toFixed(2);
      }
      // If we don’t know what to do, just put a dash
      return "-";
    });

    // Add that row under the steps
    tableArray.push(suggestedRow);
  }

  // Return the full table
  return tableArray;
}

function updateTable() {
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;
  const avgSeconds = parseFloat(avgInput.value);

  const steps = getStepsWithToggles(puzzle, method);
  const proportions = splitsData[method]?.[puzzle] || {};

  // This will calculate custom and/or proportional splits
  let totalCustom = 0;
  let totalProp = 0;
  let propSteps = [];
  steps.forEach(step => {
    if (customSplits[step] !== undefined && customSplits[step] !== "") {
      totalCustom += parseFloat(customSplits[step]);
    } else if (proportions[step]) {
      totalProp += proportions[step];
      propSteps.push(step);
    }
  });

  // This will compute the split values for display
  const splitValues = steps.map(step => {
    if (customSplits[step] !== undefined && customSplits[step] !== "") {
      return customSplits[step];
    }
    const prop = proportions[step];
    if (prop && totalProp > 0 && avgSeconds) {
      return (((avgSeconds - totalCustom) * prop) / totalProp).toFixed(2);
    }
    return "";
  });

  // This will render the table
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  const headerRow = document.createElement("tr");
  steps.forEach(stepName => {
    const th = document.createElement("th");
    th.textContent = stepName;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);

  const inputRow = document.createElement("tr");
  steps.forEach((stepName, idx) => {
    const td = document.createElement("td");
    td.textContent = splitValues[idx];

    td.style.cursor = "pointer";
    td.addEventListener("click", function handleClick() {
      // The user can replace the cell with input field to type a custom value
      const input = document.createElement("input");
      input.type = "number";
      input.step = "0.01";
      input.min = "0";
      input.value = splitValues[idx];
      input.style.width = "60px";
      td.textContent = "";
      td.appendChild(input);
      input.focus();

      function save() {
        customSplits[stepName] = input.value;
        updateTable();
      }
      input.addEventListener("blur", save);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });

      td.removeEventListener("click", handleClick);
    });

    inputRow.appendChild(td);
  });
  tableBody.appendChild(inputRow);
}

function resetSplitsAndUpdate() {
  customSplits = {};
  updateTables();
}

puzzleSelect.addEventListener("change", resetSplitsAndUpdate);
methodSelect.addEventListener("change", resetSplitsAndUpdate);
l9eToggle.addEventListener("change", updateTables);
f4cToggle.addEventListener("change", updateTables);
avgInput.addEventListener("input", updateTables);
document.getElementById("reset-splits-btn").addEventListener("click", resetSplitsAndUpdate);

updateTables();

function updateTables() {
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;
  const avgSeconds = parseFloat(avgInput.value);

  const steps = getStepsWithToggles(puzzle, method);
  const proportions = splitsData[method]?.[puzzle] || {};

  customSplitsTableHead.innerHTML = "";
  customSplitsTableBody.innerHTML = "";

  const customHeaderRow = document.createElement("tr");
  steps.forEach(step => {
    const th = document.createElement("th");
    th.textContent = step;
    customHeaderRow.appendChild(th);
  });
  customHeaderRow.appendChild(document.createElement("th")).textContent = "Average";
  customSplitsTableHead.appendChild(customHeaderRow);

  const customInputRow = document.createElement("tr");
  let userSum = 0;
  steps.forEach((step, idx) => {
    const td = document.createElement("td");
    td.style.background = "#fffbe6";
    td.style.cursor = "pointer";
    td.textContent = customSplits[step] !== undefined ? customSplits[step] : "";

    td.addEventListener("click", function handleClick() {
      const input = document.createElement("input");
      input.type = "number";
      input.step = "0.01";
      input.min = "0";
      input.value = customSplits[step] !== undefined ? customSplits[step] : "";
      input.style.width = "60px";
      td.textContent = "";
      td.appendChild(input);
      input.focus();

      function save() {
        customSplits[step] = input.value;
        updateTables();
      }
      input.addEventListener("blur", save);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") input.blur();
      });

      td.removeEventListener("click", handleClick);
    });

    if (customSplits[step] && !isNaN(parseFloat(customSplits[step]))) {
      userSum += parseFloat(customSplits[step]);
    }
    customInputRow.appendChild(td);
  });

  const avgTd = document.createElement("td");
  avgTd.textContent = userSum ? userSum.toFixed(2) : "";
  avgTd.style.fontWeight = "bold";
  customInputRow.appendChild(avgTd);

  customSplitsTableBody.appendChild(customInputRow);

  estimatedSplitsTableHead.innerHTML = "";
  estimatedSplitsTableBody.innerHTML = "";

  const estHeaderRow = document.createElement("tr");
  steps.forEach(step => {
    const th = document.createElement("th");
    th.textContent = step;
    estHeaderRow.appendChild(th);
  });
  estHeaderRow.appendChild(document.createElement("th")).textContent = "Average";
  estimatedSplitsTableHead.appendChild(estHeaderRow);

  const estRow = document.createElement("tr");
  let estSum = 0;
  steps.forEach(step => {
    let val = "";
    if (proportions[step] && avgSeconds) {
      val = (proportions[step] * avgSeconds).toFixed(2);
      estSum += parseFloat(val);
    }
    const td = document.createElement("td");
    td.textContent = val;
    estRow.appendChild(td);
  });
  const estAvgTd = document.createElement("td");
  estAvgTd.textContent = estSum ? estSum.toFixed(2) : "";
  estAvgTd.style.fontWeight = "bold";
  estRow.appendChild(estAvgTd);

  estimatedSplitsTableBody.appendChild(estRow);

  variationTableHead.innerHTML = "";
  variationTableBody.innerHTML = "";

  const varHeaderRow = document.createElement("tr");
  steps.forEach(step => {
    const th = document.createElement("th");
    th.textContent = step;
    varHeaderRow.appendChild(th);
  });
  variationTableHead.appendChild(varHeaderRow);

  const varRow = document.createElement("tr");
  steps.forEach(step => {
    let percent = "";
    let percentValue = null;
    if (
      proportions[step] &&
      avgSeconds &&
      customSplits[step] !== undefined &&
      customSplits[step] !== ""
    ) {
      const ideal = proportions[step] * avgSeconds;
      const user = parseFloat(customSplits[step]);
      percentValue = ((user - ideal) / ideal) * 100;
      percent = percentValue.toFixed(1) + "%";
    }
    const td = document.createElement("td");
    td.textContent = percent;

    if (percentValue !== null) {
      if (percentValue > 20) {
        td.style.color = "#e57373"; // red for >20%
        td.style.fontWeight = "bold";
      } else if (percentValue < -20) {
        td.style.color = "#388e3c"; // green for < -20%
        td.style.fontWeight = "bold";
      } else {
        td.style.color = ""; // normal
        td.style.fontWeight = "";
      }
    }
    varRow.appendChild(td);
  });
  variationTableBody.appendChild(varRow);

  const tipsList = document.getElementById("specific-tips");
  tipsList.innerHTML = ""; 

  steps.forEach(step => {
    if (
      proportions[step] &&
      avgSeconds &&
      customSplits[step] !== undefined &&
      customSplits[step] !== ""
    ) {
      const ideal = proportions[step] * avgSeconds;
      const user = parseFloat(customSplits[step]);
      const percent = ((user - ideal) / ideal) * 100;
      if (percent > 20) {
        const li = document.createElement("li");
        li.textContent = `Your '${step}' split is ${percent.toFixed(1)}% higher than the suggested split – this stage is something to focus on in your practice.`;
        tipsList.appendChild(li);
      }
    }
  });

  if (!tipsList.hasChildNodes()) {
    const li = document.createElement("li");
    li.textContent = "No splits are more than 20% above the suggested splits. Keep it up!";
    tipsList.appendChild(li);
  }
}

updateTables();

