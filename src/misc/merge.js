function merge(target, ...sources) {
    console.log("target: ", target);
    for (const source of sources) {
      if (isObject(target) && isObject(source)) {
        console.log("is an object");
        for (const key in source) {
          if (isObject(source[key])) {
            if (!target[key] || !isObject(target[key])) {
              target[key] = {};
            }
            console.log("target[key]", target[key]);
            console.log("source[key]", source[key]);
            merge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
    }
    console.log("target returned: ", target);
    return target;
  }
  
  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }