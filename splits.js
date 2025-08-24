const splitsData = {
      "4x4": {
        "Yau":   [], 
        "Redux": [],
        "Hoya":  []
      },
      "5x5": {
        "Yau":   [0.1492, 0.1402, 0.1957, 0.0616, 0.1625, 0.1302, 0.1607], 
        "Redux": [],
        "Hoya":  []
      },
      "6x6": {
        "Yau":   [],
        "Redux": [],
        "Hoya":  []
      },
      "7x7": {
        "Yau":   [], 
        "Redux": [],
        "Hoya":  []
      }
    };

    const puzzle = document.getElementById('puzzle-select');
    const method = document.getElementById('method-select');
    const avg = document.getElementById('global-average');

    const firstSplitHeader = document.getElementById('first-header');
    const secondSplitHeader = document.getElementById('second-header');
    const thirdSplitHeader = document.getElementById('third-header');
    const fourthSplitHeader = document.getElementById('fourth-header');
    const fifthSplitHeader = document.getElementById('fifth-header');

    const firstSplit = document.getElementById('first-split');
    const secondSplit = document.getElementById('second-split');
    const thirdSplit = document.getElementById('third-split');
    const fourthSplit = document.getElementById('fourth-split');
    const fifthSplit = document.getElementById('fifth-split');

    function updateTableHeaders() {
      const methodType = method.value;

      

      // Hide all method-specific headers and inputs initially
      document.querySelectorAll('.yau-header').forEach(e => e.classList.add('hidden'));
      document.querySelectorAll('.hoya-header').forEach(e => e.classList.add('hidden'));
      document.querySelectorAll('.yau-split-input').forEach(e => e.classList.add('hidden'));
      document.querySelectorAll('.hoya-split-input').forEach(e => e.classList.add('hidden'));
      document.getElementById("first-header").classList.remove("hidden");
      document.getElementById("second-header").classList.remove("hidden");
      document.getElementById("third-header").classList.remove("hidden");
      document.getElementById("fourth-header").classList.remove("hidden");
      document.getElementById("fifth-header").classList.remove("hidden");

      document.getElementById("first-split").classList.remove("hidden");
      document.getElementById("second-split").classList.remove("hidden");
      document.getElementById("third-split").classList.remove("hidden");
      document.getElementById("fourth-split").classList.remove("hidden");
      document.getElementById("fifth-split").classList.remove("hidden");

      document.getElementById("l9e-toggle-button").classList.add("hidden");
      document.getElementById("f4c-toggle-button").classList.add("hidden");


      if (methodType === "Yau") {
      
        document.getElementById("l9e-toggle-button").classList.remove("hidden");

        if (document.getElementById("toggle-l9e").checked) {
          // Checked: F2C, F3E, L4C, LCE, L8E, 3x3
          firstSplitHeader.textContent = "First 2 Centers";

          // Show F3CE header and split
          document.getElementById("yau-header-1").classList.remove("hidden");
          document.getElementById("yau-split-1").classList.remove("hidden");

          // Show L4C header and split
          secondSplitHeader.textContent = "Last 4 Centers";
          
          // Hide F8E header and split
          document.getElementById("third-header").classList.add("hidden");
          document.getElementById("third-split").classList.add("hidden");

          // Hide L9E header and split
          document.getElementById("yau-header-2").classList.add("hidden");

          // Show LCE and L8E headers and splits
          document.getElementById("yau-header-3").classList.remove("hidden");
          document.getElementById("yau-header-4").classList.remove("hidden");

          fifthSplitHeader.textContent = "3x3";

        } else {
          // Default: F2C, F3E, L4C, L9E, 3x3
          firstSplitHeader.textContent = "First 2 Centers";

          // Show F3CE header and split
          document.getElementById("yau-header-1").classList.remove("hidden");

          secondSplitHeader.textContent = "Last 4 Centers";

          // Show L9E header and split
          document.getElementById("yau-header-2").classList.remove("hidden");

          // Hide F8E and L4E header and split
          document.getElementById("third-header").classList.add("hidden");
          document.getElementById("fourth-header").classList.add("hidden");

          // Hide LCE and L8E headers and splits
          document.getElementById("yau-header-3").classList.add("hidden");
          document.getElementById("yau-header-4").classList.add("hidden");
          
          fifthSplitHeader.textContent = "3x3";
        }

      } else if (methodType === "Redux") {
        // Always F2C, L4C, F8E, L4E, 3x3
        firstSplitHeader.textContent = "First 2 Centers";
        secondSplitHeader.textContent = "Last 4 Centers";
        thirdSplitHeader.textContent = "First 8 Edges";
        fourthSplitHeader.textContent = "Last 4 Edges";
        fifthSplitHeader.textContent = "3x3";

      } else if (methodType === "Hoya") {
        document.getElementById("f4c-toggle-button").classList.remove("hidden");

        if (document.getElementById("toggle-f4c").checked) {
          // Checked: F2C, M2C, F4C, L2C, L8E, 3x3
          
          // Show F2C and M2C headers and splits
          document.getElementById("hoya-header-1").classList.remove("hidden");
          document.getElementById("hoya-header-2").classList.remove("hidden");

          firstSplitHeader.textContent = "First 4 Centers";

          // Show F4C header and split
          document.getElementById("hoya-header-3").classList.remove("hidden");

          secondSplitHeader.textContent = "Last 2 Centers";

          // Show L2C header and split
          document.getElementById("hoya-header-4").classList.remove("hidden");

          // Hide L8E header and split
          thirdSplitHeader.textContent = "Last 8 Edges";

          // Hide 4th header and split
          document.getElementById("fourth-header").classList.add("hidden");
          document.getElementById("fourth-split").classList.add("hidden");

          fifthSplitHeader.textContent = "3x3";

        } else {
          // Default: F4C, F4E, L2C, L8E, 3x3
          
          // Hide F2C and M2C headers and splits
          document.getElementById("first-header").classList.add("hidden");
          document.getElementById("hoya-header-2").classList.add("hidden");

          // Show F4C header and split
          document.getElementById("hoya-header-1").classList.remove("hidden");
          
          // Hide L4C, F8E, and L4E headers and splits
          document.getElementById("second-header").classList.add("hidden");
          document.getElementById("third-header").classList.add("hidden");
          document.getElementById("fourth-header").classList.add("hidden");

          // Show instead F4E, and L2C headers and splits
          document.getElementById("hoya-header-3").classList.remove("hidden");
          document.getElementById("hoya-header-4").classList.remove("hidden");

          fifthSplitHeader.textContent = "3x3";
        } 
      }
    }  


    function toggleL9E() {
      const checked = document.getElementById("toggle-l9e").checked;
      if (checked) {
        document.querySelectorAll('.yau-split-input').forEach(e => e.classList.remove('hidden'));
        document.getElementById("fourth-header").classList.add("hidden");
        document.getElementById("fourth-split").classList.add("hidden");

      } else {
        updateTableHeaders();
      }
      updateSplits();
    }

    function toggleF4C() {
      const checked = document.getElementById("toggle-f4c").checked;
      if (checked) {
        document.querySelectorAll('.hoya-split-input').forEach(e => e.classList.remove('hidden'));
        document.getElementById("first-header").classList.add("hidden");
        document.getElementById("first-split").classList.add("hidden");

      } else {
        updateTableHeaders();
      }
      updateSplits();
    }

    function updateSplits() {
      const puzzleType = puzzle.value;
      const methodType = method.value;
      const avgValue = parseFloat(avg.value);

      if (!avgValue || !splitsData[puzzleType] || !splitsData[puzzleType][methodType].length) {
        // Clear the 5 main split cells
        [firstSplit, secondSplit, thirdSplit, fourthSplit, fifthSplit]
          .forEach(cell => {
            cell.textContent = "-";
          });

        // Clear any method-specific split inputs
        const methodSplitInputs = document.querySelectorAll(".yau-split-input, .hoya-split-input");
        methodSplitInputs.forEach(input => {
          input.textContent = "-";
        });

        return;
      }

      const splits = splitsData[puzzleType][methodType];

      if (methodType === "Yau") {
        if (document.getElementById("toggle-l9e").checked) {
          // Checked: F2E, F3E, L4C, LCE, L8E, 3x3
          firstSplit.textContent  = (avgValue * splits[0]).toFixed(2); // F2C
          secondSplit.textContent = (avgValue * splits[1]).toFixed(2); // F3E
          thirdSplit.textContent  = (avgValue * splits[2]).toFixed(2); // L4C
          document.getElementById("yau-split-1").textContent = (avgValue * splits[3]).toFixed(2); // LCE
          document.getElementById("yau-split-2").textContent = (avgValue * (splits[4] + splits[5])).toFixed(2); // L8E
          fifthSplit.textContent  = (avgValue * splits[6]).toFixed(2); // 3x3
        } else {
          // Default: F2C, L4C, F8E, L4E, 3x3
          firstSplit.textContent  = (avgValue * splits[0]).toFixed(2);
          secondSplit.textContent = (avgValue * splits[1]).toFixed(2);
          thirdSplit.textContent  = (avgValue * splits[2]).toFixed(2);
          fourthSplit.textContent = (avgValue * (splits[3] + splits[4] + splits[5])).toFixed(2);
          fifthSplit.textContent  = (avgValue * splits[6]).toFixed(2);
        }
      }

      /*
      if (methodType === "Redux") {
        // Always F2C, L4C, F8E, L4E, 3x3
        firstSplit.textContent  = (avgValue * splits[0]).toFixed(2);
        secondSplit.textContent = (avgValue * splits[1]).toFixed(2);
        thirdSplit.textContent  = (avgValue * splits[2]).toFixed(2);
        fourthSplit.textContent = (avgValue * splits[3]).toFixed(2);
        fifthSplit.textContent  = (avgValue * splits[4]).toFixed(2);
      }
      */

      /*
      if (methodType === "Hoya") {
        if (document.getElementById("toggle-f4c").checked) {
          // Checked: F2C, M2C, F4C, L2C, L8E, 3x3
          document.getElementById("hoya-split-1").textContent = (avgValue * splits[0]).toFixed(2); // F2C
          document.getElementById("hoya-split-2").textContent = (avgValue * splits[1]).toFixed(2); // M2C
          firstSplit.textContent  = (avgValue * splits[2]).toFixed(2); // F4C
          secondSplit.textContent = (avgValue * splits[3]).toFixed(2); // L2C
          thirdSplit.textContent  = (avgValue * splits[4]).toFixed(2); // L8E
          fourthSplit.textContent = (avgValue * splits[5] || 0).toFixed(2); 

          // Default: F2C, F4E, L2C, L8E, 3x3
          firstSplit.textContent  = (avgValue * splits[0]).toFixed(2);
          secondSplit.textContent = (avgValue * splits[1]).toFixed(2);
          thirdSplit.textContent  = (avgValue * splits[2]).toFixed(2);
          fourthSplit.textContent = (avgValue * splits[3]).toFixed(2);
          fifthSplit.textContent  = (avgValue * splits[4]).toFixed(2);
        }
      }
      */
    }

  
    puzzle.addEventListener('change', () => {
      updateTableHeaders();
      updateSplits();
    });

    method.addEventListener('change', () => {
      updateTableHeaders();
      updateSplits();
    });

    avg.addEventListener("input", updateSplits);

    updateTableHeaders();
    updateSplits();





