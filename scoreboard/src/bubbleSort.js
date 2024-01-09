// descending order Bubble sort
const bubbleSort = (arr, key) => {
	const n = arr.length;
  
	for (let i = 0; i < n - 1; i++) {
	  for (let j = 0; j < n - i - 1; j++) {
		if (arr[j][key] < arr[j + 1][key]) {
		  // Swap elements
		  const temp = arr[j];
		  arr[j] = arr[j + 1];
		  arr[j + 1] = temp;
		}
	  }
	}
  
	return arr;
  };
  
  // Example usage
//   const data = [
// 	{ name: 'b1', wickets: 21 },
// 	{ name: 'a2', wickets: 15 },
// 	{ name: 'c3', wickets: 30 },
//   ];
  
//   const sortedData = bubbleSort(data, 'wickets');
//   console.log(sortedData);

export default bubbleSort