const request = require('request');

const args = process.argv.slice(2); // command line arguments
const breed = args[0]; // breed input from CLI

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  
  if (error) {
    console.log('error:', error); // logs error if present
    return;
  }

  // parse body string object into an object
  const data = JSON.parse(body);

  // edge case: breed not found/invlaid breed input
  if (data.length === 0) {
    console.log(`${breed} does not exist. Please search again.`);
    return;
  }

  const description = data[0].description;
  console.log("Description:", description);

});

