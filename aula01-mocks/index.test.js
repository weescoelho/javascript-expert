const { error } = require("./src/constants.js");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        name: "Weslley Coelho",
        id: 123,
        profession: "Developer",
        birthDay: 1997,
      },
      {
        name: "Chico Cunha",
        id: 124,
        profession: "Developer Java",
        birthDay: 1952,
      },
      {
        name: "João Tomate",
        id: 125,
        profession: "Developer Javascript",
        birthDay: 1982,
      },
    ];
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
