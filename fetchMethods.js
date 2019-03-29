const requestPromise = require('request-promise');
/**
 * 
 * @param {Array} urls an array of valid URLs for resources to fetch
 * @returns {undefined} 
 */
const fetchParallelPromiseAll = function (urls) {
  console.time('promiseAll')
  const promises = [];
  for (let i = 0; i < urls.length; i++) {
    //you could manipulate your urls here 

    let modified = urls[i] + ''
    return promises.push(requestPromise(modified, { json: true })
      .then(response => response.results));
  }


  Promise.all(promises)
    .then((resources) => {
      //you could manipulate your responses here 
      console.log(resources);
      console.timeEnd('promiseAll')
    });
}



const fetchInOrder = async function (urls) {
  console.time('fetchInOrder');
  const resources = [];
  for (let i = 0; i < urls.length; i++) {
    let currResource = await requestPromise(urls[i], { json: true }).then(response => response.results);
    resources.push(currResource);
  }
  console.log(resources);
  console.timeEnd('fetchInOrder');
}

module.exports = {
  fetchParallelPromiseAll,
  fetchInOrder
};
