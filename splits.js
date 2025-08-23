const splitsData = {
      "4x4": {
        "Yau":   [0.121, 0.113, 0.1348, 0.2616, 0.3694], 
        "Redux": [],
        "Hoya":  []
      },
      "5x5": {
        "Yau":   [0.1575, 0.146, 0.188, 0.3475, 0.1605], 
        "Redux": [0.1354, 0.1799, 0.3475, 0.135, 0.2023],
        "Hoya":  [0.2802, 0.184, 0.0595, 0.3105, 0.1695]
      },
      "6x6": {
        "Yau":   [0.2055, 0.1083, 0.2602, 0.2905, 0.1354],
        "Redux": [0.1928, 0.2454, 0.3069, 0.1129, 0.142],
        "Hoya":  []
      },
      "7x7": {
        "Yau":   [0.2335, 0.1095, 0.2867, 0.2936, 0.0768], 
        "Redux": [0.2295, 0.2798, 0.2851, 0.1087, 0.0968],
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
      const puzzleType = document.getElementById("puzzle-select").value;
      const methodType = document.getElementById("method-select").value;
      const l9eButton = document.getElementById("l9e-toggle-button");
      const f4cButton = document.getElementById("f4c-toggle-button");

      // Show checkbox only if method is Hoya
      if (methodType === "Hoya") {
        f4cButton.classList.remove("hidden");
      } else {
        f4cButton.classList.add("hidden");

        // Reset back to default F4C if user switches methods
        document.getElementById("toggle-f4c").checked = false;
        toggleF4C();
      }

      // Show checkbox only if method is Yau
      if (methodType === "Yau") {
        l9eButton.classList.remove("hidden");
      } else {
        l9eButton.classList.add("hidden");

        // Reset back to default L9E if user switches methods
        document.getElementById("toggle-l9e").checked = false;
        toggleL9E();
      }

      // For Yau
      if (
        (methodType === "Yau")
      ) {
        firstSplitHeader.textContent = "F2C";
        secondSplitHeader.textContent = "F3E";
        thirdSplitHeader.textContent = "L4C";
        fourthSplitHeader.textContent = "L9E";
        fifthSplitHeader.textContent = "3x3";
      }

      // For Reduction
      if (
        (methodType === "Redux")
      ) {
        firstSplitHeader.textContent = "F2C";
        secondSplitHeader.textContent = "L4C";
        thirdSplitHeader.textContent = "F8E";
        fourthSplitHeader.textContent = "L4E";
        fifthSplitHeader.textContent = "3x3";
      }

      // For Hoya
      if (
        (methodType === "Hoya")
      ) {
        firstSplitHeader.textContent = "F4C";
        secondSplitHeader.textContent = "F4E";
        thirdSplitHeader.textContent = "L2C";
        fourthSplitHeader.textContent = "L8E";
        fifthSplitHeader.textContent = "3x3";
      }
    }

    function updateSplits() {

    }

    function toggleL9E() {
      // This is to toggle the separate L9E columns (LCE + L8E)
      document.querySelectorAll('.yau-split-input').forEach(yauSplit => {
        yauSplit.classList.toggle('hidden');
      });

      document.getElementById("fourth-header").classList.toggle("hidden");
      document.getElementById("fourth-split").classList.toggle("hidden");
    }

    function resetL9E() {
      // This is to reset back to default L9E
      document.querySelectorAll('.yau-split-input').forEach(yauSplit => {
        yauSplit.classList.add('hidden');
      });

      document.getElementById("fourth-header").classList.remove("hidden");
      document.getElementById("fourth-split").classList.remove("hidden");
    }

    function toggleF4C() {
      // This is to toggle the separate F4C columns (F2C + M2C)
      document.querySelectorAll('.hoya-split-input').forEach(hoyaSplit => {
        hoyaSplit.classList.toggle('hidden');
      });

      document.getElementById("first-header").classList.toggle("hidden");
      document.getElementById("first-split").classList.toggle("hidden");
    }

    function resetF4C() {
      // This is to reset back to default F4C
      document.querySelectorAll('.hoya-split-input').forEach(hoyaSplit => {
        hoyaSplit.classList.add('hidden');
      });
      document.getElementById("first-header").classList.remove("hidden");
      document.getElementById("first-split").classList.remove("hidden");
    }



    puzzle.addEventListener('change', updateSplits);
    method.addEventListener('change', updateSplits);
    avg.addEventListener("input", updateSplits);
    updateSplits();



