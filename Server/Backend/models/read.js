const fs = require('fs');


const read = async () => {
    const jsonString = await fs.promises.readFile("models/data.json", "utf8");
    const data = JSON.parse(jsonString);
    return data['client'];
};
read();
exports.readFile = read;