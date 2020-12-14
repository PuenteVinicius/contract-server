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
    if(err) {
      console.log('err', errr);
    }
    items.forEach((file) => {
      fs.readFile(dir + file, 'utf8' , (err, contract) => {
        if(err) {
          console.log('err', errr);
        }
        return createRequest(contract);
      });
    })
  })
}

function createRequest(data) {
  const contract = JSON.parse(data);
  if(contract.method === 'GET') {
    server.get(contract.path, (request, response) => {
      if(request.method === 'GET') {
        const data = contract.response;
        return response.status(200).json(data);
      }
    })
  }
  if(contract.method === 'POST') {
    server.get(contract.path, (request, response) => {
      if(request.method === 'POST') {
        const data = contract.body;
        return response.status(200).json(data);
      }
    })
  }
  if(contract.method === 'PUT') {
    server.get(contract.path, (request, response) => {
      if(request.method === 'PUT') {
        const data = contract.body;
        return response.status(200).json(data);
      }
    })
  }
  if(contract.method === 'DELETE') {
    server.get(contract.path, (request, response) => {
      if(request.method === 'DELETE') {
        const data = contract.body;
        return response.status(200).json(data);
      }
    })
  }
}
  


