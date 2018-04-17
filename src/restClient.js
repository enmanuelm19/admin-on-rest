import { jsonServerRestClient } from 'admin-on-rest';


const restClient = jsonServerRestClient('http://localhost:3001');
//export default restClient;
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 500));
