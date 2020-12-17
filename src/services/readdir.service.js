const fs = require("fs");
import { DIRECTORY } from '../configs/constants';

export default class ReadDirService {
  readDir() {
    fs.readdir(DIRECTORY, (err, items) => {
      if (err) {
        console.log("err", errr);
      }
      items.forEach((file) => {
        fs.readFile(DIRECTORY + file, "utf8", (err, contract) => {
          if (err) {
            console.log("err", errr);
          }
          return JSON.parse(data);
        });
      });
    });
  }
}