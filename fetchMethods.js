const requestPromise = require('request-promise');
/**
 * 
 * @param {Array} urls an array of valid URLs for resources to fetch
 * @returns {undefined} 
 */
const fetchParallelPromiseAll = function(urls) {
  console.time('promiseAll')
  let promises = urls.map((url, i) => {
    if( i === 2 /** your logic would be something like this ```url.indexOf('elements') !== -1*/) {

      return requestPromise(url, {json: true}).then(response => {

        //assume i get some stuff from response
        let { someStuff } = response.results;

        let nestedPromises = [];
        for(let i = 0; i < 2 /** assume this 2 is from previous response */; i++) {
          
          nestedPromises.push(
            requestPromise(url, {json: true})
              .then(response => response.results)
              .catch(error => { let {name, message, statusCode, options} = error; console.log({name, message, statusCode, options})})
          )
          
        }
                
        return Promise.all(nestedPromises).then(responses => responses);
        //                                                      /^\ 
        //                                      this is important to get nested array 
      })

    } 
    
    return requestPromise(url, {json: true})
      .then(response => response.results)
      .catch(error => { let {name, message, statusCode, options} = error; console.log({name, message, statusCode, options})})
  })
  Promise.all(promises)
    .then((resources) => {
      //you could manipulate your responses here 
      console.log(resources); 
      console.timeEnd('promiseAll')});
  
}
const fetchInOrder = async function(urls) {
  console.time('fetchInOrder');
  const resources = [];
  for(let i = 0; i < urls.length; i++) {
    let currResource = await requestPromise(urls[i], {json: true}).then(response => response.results);
    resources.push(currResource);
  }
  console.log(resources);
  console.timeEnd('fetchInOrder');
}

module.exports = {
  fetchParallelPromiseAll,
  fetchInOrder
};
