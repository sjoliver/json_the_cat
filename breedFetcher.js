const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body); // parse body string object into an object
  
    if (data.length === 0) {
      callback(`${breedName} does not exist. Please search again.`, null); // edge case: breed not found/invlaid breed input
      return;
    }

    const description = data[0].description;
    callback(null, description);
  
  });
};

module.exports = {
  fetchBreedDescription
};