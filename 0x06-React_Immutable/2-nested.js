import { from JS } from immtable;

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);

return mappedObj.getIn(array, undefined);
