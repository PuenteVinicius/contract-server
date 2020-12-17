import ReadDirService from './services/readdir.service';
import RequestService from './services/requests.service';
import CreateRequestService from './services/create-request.service';

const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running", port);
});

init();

function init() {
  const createRequestService = new CreateRequestService();
  const contract = new ReadDirService().readDir();
  const resquests = new RequestService().getRequests();
  return createRequestService.createRequest(resquests, contract);
} 