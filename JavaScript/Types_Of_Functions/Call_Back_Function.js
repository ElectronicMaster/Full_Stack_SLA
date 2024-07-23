function fetchData(callback) {
    setTimeout(() => {
      // Simulating data fetching
      callback("Data fetched");
    }, 1000);
  }
  
  fetchData((data) => {
    console.log(data);  // Output after 1 second: Data fetched
  });
  