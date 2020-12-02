const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running", port);
});

server.get("/timeline", (request, response) => {
  if (request.method === "GET") {
    const timeline = require("./timeline/index");
    response.status(200).json(timeline());
  }
});
