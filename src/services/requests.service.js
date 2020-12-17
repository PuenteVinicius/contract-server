import { REQUESTS } from '../configs/constants';

export default class RequestService {
  GET(contract) {
    server.get(contract.path, (request, response) => {
      return response.status(200).json(contract.response);
    });
  }
  
   POST(contract) {
    server.post(contract.path, (request, response) => {
      this.resquestMount(contract, request, response);
    });
  }
  
   PUT(contract) {
    server.put(contract.path, (request, response) => {
      this.resquestMount(contract, request, response);
    });
  }
  
   DELETE(contract) {
    server.delete(contract.path, (request, response) => {
      return response.send({success: true});
    }); 
  }
  getRequests() {
    return {
      [REQUESTS.GET] : this.GET,
      [REQUESTS.POST] : this.POST,
      [REQUESTS.PUT] : this.PUT,
      [REQUESTS.DELETE] : this.DELETE,
    }
  }

  resquestMount(contract, request, response) {
    let data = contract.response;
    if (JSON.stringify(request.body) == JSON.stringify(contract.body)) {
      return response.status(200).json(data);
    }
    return response.status(400).json("Wrong Object");
  }
}