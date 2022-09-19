function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find(item => item.hash === hash);
    if(objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({hash, result});
    if(cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result; 
  }
  return wrapper;
}



function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  
  function wrapper(...args) {
    if(!timeoutId) {
      wrapper.count++
      func(...args);
    }
    else {
      clearTimeout(timeoutId);
      wrapper.allCount++;
    }
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
      }, delay);
  }
  wrapper.allCount = 0;
  wrapper.count = 0;
  return wrapper;
}