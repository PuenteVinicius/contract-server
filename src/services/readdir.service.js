import fs from "fs";
import { DIRECTORY } from "../configs/constants";

export default class ReadDirService {
  static async getContracts() {
    let directory;
    let files;

    if (fs.existsSync(DIRECTORY)) {
      directory = await this.readDirectory();
      files = await this.readFiles(directory);
    } else {
      fs.mkdir(DIRECTORY, (err) => {
        if (err) {
          throw err;
        }
        console.log("Directory is created.");
      });
    }

    return Promise.all(files);
  }

  static async readFiles(files) {
    return files.map((file) => {
      return this.readFile(file);
    });
  }

  static async readDirectory() {
    return fs.readdirSync(DIRECTORY, (err, files) => {
      if (err) {
        console.log("err", err);
      }
      return files;
    });
  }

  static async readFile(file) {
    return fs.readFileSync(DIRECTORY + file, "utf8", (err, contract) => {
      if (err) {
        console.log("err", err);
      }
      return contract;
    });
  }
}
