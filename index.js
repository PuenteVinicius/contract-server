const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const fs = require("fs");
const dir = "./contracts/";

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running", port);
});

init();

function init() {
  fs.readdir(dir, (err, items) => {
    if (err) {
      console.log("err", errr);
    }
    items.forEach((file) => {
      fs.readFile(dir + file, "utf8", (err, contract) => {
        if (err) {
          console.log("err", errr);
        }
        return createRequest(contract);
      });
    });
  });
}

function requests() {
  return {
    GET: GET,
    POST: POST,
    PUT: PUT,
    DELETE: DELETE,
  };
}


function createRequest(data) {
  const contract = JSON.parse(data);

  requests()[contract.method](contract);
}

function GET(contract) {
  server.get(contract.path, (response) => {
    return response.status(200).json(contract.response);
  });
}

function POST(contract) {
  server.post(contract.path, (request, response) => {
    resquestMount(contract, request, response);
  });
}

function PUT(contract) {
  server.put(contract.path, (request, response) => {
    resquestMount(contract, request, response);
  });
}

function DELETE(contract) {
  server.delete(contract.path, (req, response) => {
    return response.send({success: true});
  }); 
}

function resquestMount(contract, request, response) {
  let data = contract.response;
  if(JSON.stringify(request.body) == JSON.stringify(contract.body)) {
    return response.status(200).json(data);
  }
  return response.status(400).json('Wrong Object');
}