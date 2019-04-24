export default querystring => {
  if (querystring.length < 1) return {};

  // If querystring length is greater than zero, make querystring an object.
  if (querystring.slice(0, 1) === "&") {
    querystring = querystring.substr(1);
  }

  let qs = querystring.replace("?", "");
  qs = qs.split("&");

  let obj = {};
  qs.forEach(function(property) {
    let t = property.split("=");
    obj[t[0]] = t[1];
  });

  return obj;
};
