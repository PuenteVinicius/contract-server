
export default class RequestService {
  get(contract) {
    server.get(contract.path, (request, response) => {
      return response.status(200).json(contract.response);
    });
  }

  post(contract) {
    server.post(contract.path, (request, response) => {
      this.resquestMount(contract, request, response);
    });
  }

  put(contract) {
    server.put(contract.path, (request, response) => {
      this.resquestMount(contract, request, response);
    });
  }

  delete(contract) {
    server.delete(contract.path, (request, response) => {
      return response.send({ success: true });
    });
  }
  getRequests() {
    return {
      GET: this.get,
      POST: this.post,
      PUT: this.put,
      DELETE: this.delete,
    };
  }

  resquestMount(contract, request, response) {
    let data = contract.response;
    if (JSON.stringify(request.body) == JSON.stringify(contract.body)) {
      return response.status(200).json(data);
    }
    return response.status(400).json("Wrong Object");
  }
}
