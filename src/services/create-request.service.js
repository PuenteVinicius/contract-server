export default class CreateRequestService {
  createRequest(requests, contract) {
    return requests()[contract.method](contract);
  }
}
