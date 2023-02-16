const Immutable = require("immutable");

function getImmutableObject(obj) {
  return Immutable.fromJS(obj);
}

module.exports = getImmutableObject;
