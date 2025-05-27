const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data.json");

const readData = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch {
    return false;
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch {
    return false;
  }
};

module.exports = { readData, writeData };
