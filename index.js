const {fetchParallelPromiseAll, fetchInOrder} = require('./fetchMethods.js');

//parallel fetcher useage
urls = ['https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/'];
fetchParallelPromiseAll(urls);
//sequential fetching 
fetchInOrder(urls);