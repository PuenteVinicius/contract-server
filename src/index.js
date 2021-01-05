import ReadDirService from './services/readdir.service';
import RequestService from './services/requests.service';
import jsonServer from 'json-server'

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

async function createRequests() {
  let contracts = [];
  contracts = await ReadDirService.getContracts();
  contracts = contracts.map((contract) => JSON.parse(contract));
  contracts.forEach((contract) => {
    RequestService.verifyMethod(contract, server)
  });

  server.use(jsonServer.bodyParser);
  server.use(middlewares);
  server.listen(port, () => {
    console.log("mock server is running", port);
  });
}

createRequests();