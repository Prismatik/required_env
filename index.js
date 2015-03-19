module.exports = function(required) {
  required = required.map(function(item) {
    if (typeof item === 'string') return { var: item };
    return item;
  });

  required.forEach(function(item) {
    if (!process.env[item.var]) {
      if(!item.default) {
        throw new Error("Env variable " + item.var + " is required to be set.");
      };
      process.env[item.var] = item.default;
    };
  });

  return true;
};
