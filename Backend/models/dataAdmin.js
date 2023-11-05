const fs = require('fs');


const read = async () => {
    const jsonString = await fs.promises.readFile("models/dataAdmin.json", "utf8");
    const data = JSON.parse(jsonString);
    return data['client'];
};

write = async (data) => {
    const jsonString = JSON.stringify(data);
    fs.writeFile('./data.json', jsonString, err => {
      if (err) {
          console.log('models/data.json', err)
      }
    })    
}


exports.writeFile = write;
exports.readFile = read;