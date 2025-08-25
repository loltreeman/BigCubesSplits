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

const topSolversData = {
  "Yau": {
    "4x4": [
      {
        solver: "Max Park",
        time: "38.28",
        splits: {
          "F2C": "7.43",
          "F3E": "12.30",
          "L4C": "18.90",
          "L9E": "28.10",
          "3x3": "37.28"
        },
        youtube: "https://www.youtube.com/watch?v=example1",
        recon: "https://example.com/recon1"
      },
    ],

    "5x5": [
      {
        solver: "Tymon Kolasiński",
        time: "36.46",
        splits: {
          "F2C": "5.63",
          "F3E": "3.87",
          "L4C": "7.87",
          "L9E": "13.61",
          "LCE": "2.5",
          "L8E": "11.11",
          "3x3": "5.48"
        },
        youtube: "https://youtu.be/AWwKt63olZo",
        recon: "https://alg.cubing.net/?puzzle=5x5x5&setup=D2_L2_Uw-_Rw_U2_F-_B2_Fw-_Lw2_D2_Rw_D_R-_Fw_Bw2_D2_U2_Rw_U2_Rw-_U2_B2_Rw-_F2_Uw_U-_Dw2_Rw2_Bw2_F-_B2_Lw_B2_Rw2_F-_Fw-_Lw2_Rw-_B2_D_Dw2_Lw_Uw-_Dw-_Bw_Dw-_Bw-_Dw_B-_R2_Rw-_F_Lw2_B2_F_Dw_L-_U-_Lw_Dw&alg=z2_%2F%2F_inspection%0A3r2_U_r-_y_U_r-_U_r2_U-_3r_r-_U-_r_x-_l_%2F%2F_yellow%0Ay-_U_r_U_r-_y-_y-_3r_U-_3r-_R_u_d-_U2_l-_U2_l_%2F%2F_white%0Az-_U_x-_U-_U-_3r2-_D-_%2F%2F_WO%0AU_F_r-_4r_U-_3r2-_U_F-_3r2-_4r2_U-_%2F%2F_WR%0Ax-_U-_U-_r-_4r2_U-_%2F%2F_WB%0Ax-_x-_U_4r_U-_r-_4r_4r-_4r2_U_4r2-_U-_r2_U-_4r2-_4r-_U_r_4r2_U-_3r2-_U-_3r2_4r2-_r_%2F%2F_red%0AU-_U-_4r_U_4r-_r_U-_r-_4r2_r-_U_r_U_r-_U-_r-_U2-_r2_%2F%2F_green%0A4r-_4r_U-_r-_U-_r_U2-_4r-_U_r_U_r-_U-_r_U2-_r-_%2F%2F_orange%2Fblue%0Ax-_y-_x-_3u2_U_R_U-_R-_2%26%2345%3B3d_R_U_R_U-_R2-_%2F%2F_WG%0AU_y_L-_U_L_u-_U_L-_U_L_u_y-_U_L-_U_L_u_3u-_%2F%2F_YG%0AU-_L-_U_L_y-_R-_U_R_d-_R-_F_R_F-_R_U-_R-_3u-_u_%2F%2F_BO%0AU-_R_U-_R-_u_R_U-_R-_u-_%2F%2F_BR%0AU_R_U-_R-_u-_%2F%2F_YO%0AR_U-_R-_u2-_3u_R_U-_R2-_U-_R_y-_U-_U_4d_R_U-_R-_u_U_d-_%2F%2F_GO%0AR_U-_R-_u-_3u_%2F%2F_YR%0AU-_R_U-_R-_d_R-_F_R_F-_R_U-_R-_3u-_%2F%2F_GR%2FYB%0AU-_R_U2-_R2-_U-_R_%2F%2F_1st_pair%0AU-_R_U_R-_4d-_L_U_L-_%2F%2F_2nd_pair%0AF_U-_F-_R-_U-_R_%2F%2F_3rd_pair%0AU2_F-_U-_L-_U_L2_F_L2-_U-_L_%2F%2F_4th_pair%2FZBLS%0AU_U2-_R_U_R-_U_R-_U2-_R2_U_R2-_U_R2_U-_R-_U_%2F%2F_ZBLL"
      },
      {
        solver: "Seung Hyuk Nahm (남승혁)",
        time: "38.12",
        splits: {
          "F2C": "6.17",
          "F3E": "5.83",
          "L4C": "6.79",
          "L9E": "11.5",
          "LCE": "2.4",
          "L8E": "9.1",
          "3x3": "6.77"
        },
        youtube: "https://youtu.be/CPY2danDRTE?si=xcbAqj3h-4C62Enk",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "44.32",
        splits: {
          "F2C": "7.76",
          "F3E": "7.96",
          "L4C": "6.27",
          "L9E": "15.11",
          "LCE": "3.35",
          "L8E": "11.76",
          "3x3": "7.22"
        },
        youtube: "https://youtu.be/xFBpr1BViy8?si=csSxjEUstDO9GQqs",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "41.53",
        splits: {
          "F2C": "5.32",
          "F3E": "6.29",
          "L4C": "9.28",
          "L9E": "14.83",
          "LCE": "2.95",
          "L8E": "11.88",
          "3x3": "5.81"
        },
        youtube: "https://youtu.be/xFBpr1BViy8?si=fwuLmuHp9aQqV_Xq&t=69",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "42.76",
        splits: {
          "F2C": "5.85",
          "F3E": "5.02",
          "L4C": "9.88",
          "L9E": "14.93",
          "LCE": "2.3",
          "L8E": "12.63",
          "3x3": "7.08"
        },
        youtube: "https://youtu.be/xFBpr1BViy8?si=JtHAcq3uwL2OgYIr&t=130",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "40.09",
        splits: {
          "F2C": "6.99",
          "F3E": "8.12",
          "L4C": "6.19",
          "L9E": "13.07",
          "LCE": "1.8",
          "L8E": "11.27",
          "3x3": "5.72"
        },
        youtube: "https://youtu.be/xFBpr1BViy8?si=TSpdQLpwOAAQiUzZ",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "44.33",
        splits: {
          "F2C": "5.13",
          "F3E": "7.34",
          "L4C": "10.71",
          "L9E": "13.82",
          "LCE": "1.76",
          "L8E": "12.06",
          "3x3": "7.33"
        },
        youtube: "https://youtu.be/xFBpr1BViy8?si=Q90GyDKrEY7RCN1t&t=278",
        recon: ""
      },
    ],

    "6x6": [
      {
        solver: "Maxr Park",
        time: "39.28",
        splits: {
          "F2C": "7.43",
          "F3E": "12.30",
          "L4C": "18.90",
          "L9E": "28.10",
          "3x3": "37.28"
        },
        youtube: "https://www.youtube.com/watch?v=example1",
        recon: "https://example.com/recon1"
      },
    ],
    "7x7": [
      {
        solver: "Maxs Park",
        time: "40.28",
        splits: {
          "F2C": "7.43",
          "F3E": "12.30",
          "L4C": "18.90",
          "L9E": "28.10",
          "3x3": "37.28"
        },
        youtube: "https://www.youtube.com/watch?v=example1",
        recon: "https://example.com/recon1"
      },
    ]
    // I will add "4x4", "6x6", "7x7" here in the same format
  },
  "Redux": {
    "5x5": [
      {
        solver: "Some Solver",
        time: "40.55",
        splits: {
          "F2C": "9.00",
          "L4C": "15.30",
          "F8E": "25.40",
          "L4E": "34.20",
          "3x3": "40.55"
        },
        youtube: "https://www.youtube.com/watch?v=example3",
        recon: "https://example.com/recon3"
      }
    ]
  },
  "Hoya": {
    "5x5": [
      {
        solver: "Another Solver",
        time: "42.00",
        splits: {
          "F4C": "8.50",
          "F4E": "14.70",
          "L2C": "21.30",
          "L8E": "32.50",
          "3x3": "42.00"
        },
        youtube: "https://www.youtube.com/watch?v=example4",
        recon: "https://example.com/recon4"
      }
    ]
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
const darkModeToggle = document.getElementById("dark-mode-toggle");

let customSplits = {}; // e.g. { "L4C": 12.34 }

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeToggle.textContent = "🌙";
    localStorage.setItem("theme", "");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️ Light Mode";
  }
});


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

function updateTopSolversTable() {
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;
  const steps = getStepsWithToggles(puzzle, method);

  const table = document.getElementById("top-solvers-table");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  thead.innerHTML = "";
  tbody.innerHTML = "";

  const headerRow = document.createElement("tr");
  ["Solver", "Time", ...steps, "YouTube", "Recon"].forEach(label => {
    const th = document.createElement("th");
    th.textContent = label;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  const solves = (topSolversData[method] && topSolversData[method][puzzle]) || [];
  solves.forEach(solve => {
    const tr = document.createElement("tr");

    const solverTd = document.createElement("td");
    solverTd.textContent = solve.solver;
    tr.appendChild(solverTd);

    const timeTd = document.createElement("td");
    timeTd.textContent = solve.time;
    tr.appendChild(timeTd);

    steps.forEach((step) => {
  const td = document.createElement("td");
  const actual = parseFloat(solve.splits[step]);

  if (!isNaN(actual)) {
    td.textContent = actual.toFixed(2);

    const fractions = splitsData[method]?.[puzzle];
    if (fractions) {
      const total = parseFloat(solve.time);
      const stepFraction = fractions[step];

      if (stepFraction) {
        const ideal = total * stepFraction;   // ideal per-step time
        const deviation = ((actual - ideal) / ideal) * 100;

        if (deviation >= 20) {
          td.style.color = "red";   // much slower than ideal
        } else if (deviation <= -20) {
          td.style.color = "green"; // much faster than ideal
        } else {
          td.style.color = "black"; // close to ideal
        }
      }
    }
  } else {
    td.textContent = "-";
  }

  tr.appendChild(td);
});


    const ytTd = document.createElement("td");
    if (solve.youtube) {
      const a = document.createElement("a");
      a.href = solve.youtube;
      a.target = "_blank";
      a.textContent = "Watch";
      ytTd.appendChild(a);
    }
    tr.appendChild(ytTd);

    const reconTd = document.createElement("td");
    if (solve.recon) {
      const a = document.createElement("a");
      a.href = solve.recon;
      a.target = "_blank";
      a.textContent = "Recon";
      reconTd.appendChild(a);
    }
    tr.appendChild(reconTd);

    tbody.appendChild(tr);
  });

  if (solves.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = steps.length + 4;
    td.textContent = "No solves available for this method and puzzle.";
    td.style.textAlign = "center";
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

puzzleSelect.addEventListener("change", () => {
  resetSplitsAndUpdate();
  updateTopSolversTable();
});
methodSelect.addEventListener("change", () => {
  resetSplitsAndUpdate();
  updateTopSolversTable();
});

l9eToggle.addEventListener("change", updateTopSolversTable);
f4cToggle.addEventListener("change", updateTopSolversTable);

updateTopSolversTable();
updateTables();

