import fs from "fs/promises";
import path from "path";

const dataPath = path.join(__dirname, "../data.json");

const readData = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Erreur lors de la lecture des données:", error);
    return false;
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error("Erreur lors de l'écriture des données:", error);
    return false;
  }
};

export { readData, writeData };
