const fs = require("fs");
import { DIRECTORY } from "../configs/constants";

export default class ReadDirService {
  contracts = [];



  async getContracts() {
    let directory = await this.readDirectory();
    let files = await this.readFiles(directory);
    return Promise.all(files);
  }


  async readFiles(files) {
    return files.map(file => {
      return this.readFile(file);
    });
  }

  async readDirectory() {
    return fs.readdirSync(DIRECTORY, (err, files) => {
      if (err) {
        console.log("err", err);
      }
      return files;
    });
  }

  async readFile(file) {
    return fs.readFileSync(DIRECTORY + file, "utf8", (err, contract) => {
      if (err) {
        console.log("err", err);
      }
      return contract;
    });
  }
}
