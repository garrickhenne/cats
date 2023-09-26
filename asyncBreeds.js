// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToCallWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data or error.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      functionToCallWhenDone(data);
    } else {
      functionToCallWhenDone(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;