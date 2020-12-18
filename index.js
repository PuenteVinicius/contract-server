import ReadDirService from "./src/services/readdir.service";
import RequestService from "./src/services/requests.service";

const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

class Main {
  createRequestService = {};
  readDirService = {};
  requestService = {};
  contracts = [];
  resquests = {};

  constructor() {
    this.readDirService = new ReadDirService();
    this.requestService = new RequestService();
    this.resquests = this.requestService.getRequests();
  }

  async createRequests() {
    this.contracts = await this.readDirService.getContracts();
    this.contracts = this.contracts.map(contract => JSON.parse(contract));
    this.contracts.forEach(contract => {
      this.requests[contract.method](contract);
    })
  }
}

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running", port);
});

const main = new Main();
main.createRequests();
