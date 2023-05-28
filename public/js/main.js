fetch('/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);

  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
