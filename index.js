import ReadDirService from './src/services/readdir.service';
import RequestService from './src/services/requests.service';
import jsonServer from 'json-server'

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
class Main {
  readDirService = {};
  requestService = {};
  contracts = [];
  requests = {};

  constructor() {
    this.readDirService = new ReadDirService();
    this.requestService = new RequestService();
    this.requests = this.requestService.getRequests();
  }

  async createRequests() {
    this.contracts = await this.readDirService.getContracts();
    this.contracts = this.contracts.map((contract) => JSON.parse(contract));
    this.contracts.forEach((contract) => {
      this.requestService.verifyMethod(contract, server)
    });

    server.use(jsonServer.bodyParser);
    server.use(middlewares);

    server.listen(port, () => {
      console.log("mock server is running", port);
    });
  }
}

const main = new Main();
main.createRequests();
