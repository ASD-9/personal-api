const fs = require("fs");
const path = require("path");
const { readData, writeData } = require("../src/dataUtils");

jest.mock("fs");

const mockData = {
  "testData": "testData",
  "testData2": "testData2",
  "testData3": "testData3",
}

const dataPath = path.join(__dirname, "../data.json");

describe("dataUtils", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("readData", () => {
    it("should return the data from the file", () => {
      fs.readFileSync.mockReturnValue(JSON.stringify(mockData));
      const result = readData();

      expect(fs.readFileSync).toHaveBeenCalledWith(dataPath, "utf8");
      expect(result).toEqual(mockData);
    });

    it("should return false if an error occurs", () => {
      fs.readFileSync.mockImplementation(() => { throw new Error("test error") });
      const result = readData();

      expect(fs.readFileSync).toHaveBeenCalledWith(dataPath, "utf8");
      expect(result).toBe(false);
    });
  });

  describe("writeData", () => {
    it("should return true if the data is written successfully", () => {
      const result = writeData(mockData);

      expect(fs.writeFileSync).toHaveBeenCalledWith(dataPath, JSON.stringify(mockData, null, 2), "utf8");
      expect(result).toBe(true);
    });

    it("should return false if an error occurs", () => {
      fs.writeFileSync.mockImplementation(() => { throw new Error("test error") });
      const result = writeData(mockData);

      expect(fs.writeFileSync).toHaveBeenCalledWith(dataPath, JSON.stringify(mockData, null, 2), "utf8");
      expect(result).toBe(false);
    });
  });
});
