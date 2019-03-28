/**
 * 
 * @param {Array} urls an array of valid URLs for resources to fetch
 * @returns {undefined} 
 */
export const fetchParallelPromiseAll = function(urls) {
  console.time('promiseAll')
  let promises = urls.map((url) => fetch(url).then(res => res.json()))
  Promise.all(promises)
    .then((resources) => {
      //you could manipulate your responses here 
      console.log(resources); 
      console.timeEnd('promiseAll')});
  
}
