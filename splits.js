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

    const f2c = document.getElementById('f2c');
    const f3e = document.getElementById('f3e');
    const l4c = document.getElementById('l4c');
    const l9e = document.getElementById('l9e');
    const threebythree = document.getElementById('3x3');

    function updateSplits() {
      const puzzleType = puzzle.value;
      const methodType = method.value;
      const average = parseFloat(avg.value);

      if (isNaN(average) || !splitsData[puzzleType] || !splitsData[puzzleType][methodType]) {
        f2c.textContent = 'N/A';
        f3e.textContent = 'N/A';
        l4c.textContent = 'N/A';
        l9e.textContent = 'N/A';
        threebythree.textContent = 'N/A';
        return;
      }

      const splits = splitsData[puzzleType][methodType];
      f2c.textContent = (splits[0] * average).toFixed(2) + ' s';
      f3e.textContent = (splits[1] * average).toFixed(2) + ' s';
      l4c.textContent = (splits[2] * average).toFixed(2) + ' s';
      l9e.textContent = (splits[3] * average).toFixed(2) + ' s';
      threebythree.textContent = (splits[4] * average).toFixed(2) + ' s';
    }


    puzzle.addEventListener('change', updateSplits);
    method.addEventListener('change', updateSplits);
    avg.addEventListener("input", updateSplits);
    updateSplits();



