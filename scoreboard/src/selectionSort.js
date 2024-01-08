 // Selection Sort
 const selectionSort = (dataList, key) => {
    const n = dataList.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (dataList[j][key] < dataList[minIndex][key]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Swap elements
        const temp = dataList[i];
        dataList[i] = dataList[minIndex];
        dataList[minIndex] = temp;
      }
    }

    return dataList;
  };