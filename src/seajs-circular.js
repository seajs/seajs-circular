function clone(obj) {
  var ret = {};
  for(var i in obj) {
    if(obj.hasOwnProperty(i)) {
      ret[i] = obj[i];
    }
  }
  return ret;
}
function check(uri, history, arr) {
  history = history || {};
  arr = arr || [];
  arr.push(uri);
  if(history.hasOwnProperty(uri)) {
    console.warn('cyclic dependence:\n' + arr.join('\n'));
    var mod = seajs.cache[uri];
    mod.onload();
    return;
  }
  history[uri] = true;
  var mod = seajs.cache[uri];
  if(mod) {
    var d = mod.dependencies;
    for(var i = 0; i < d.length; i++) {
      check(seajs.Module.resolve(d[i], uri), clone(history), arr.slice(0));
    }
  }
}
seajs.on("save", function(mod) {
  if(mod.dependencies.length) {
    check(mod.uri);
  }
});