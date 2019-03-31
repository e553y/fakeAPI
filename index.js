const {fetchParallelPromiseAll, fetchInOrder} = require('./fetchMethods.js');

//parallel fetcher useage
urls = ['https://randomuser.me/api/', 'https://randomuser.me/api/', 'https://randomuser.me/api/'];
fetchParallelPromiseAll(urls);
// make second url fail
urls[1] += 'add_Gybrish_to_fail'
fetchParallelPromiseAll(urls);
//sequential fetching 
//fetchInOrder(urls);