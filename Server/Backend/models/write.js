const fs = require('fs');


write = async (data) => {
    const jsonString = JSON.stringify(data);
    fs.writeFile('./data.json', jsonString, err => {
      if (err) {
          console.log('models/data.json', err)
      }
    })    
}


exports.writeFile = write;
