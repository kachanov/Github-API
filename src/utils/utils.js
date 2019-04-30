import isFunction from 'lodash/isFunction';

export function shallowEqual(objectA, objectB) {
  if (objectA === objectB) return true;

  for (let index = 0; index < Object.keys(objectA).length; index++) {
    const key = Object.keys(objectA)[index];

    if (objectA[key] !== objectB[key]) {
      return false;
    }
  }

  if (Object.keys(objectA).length !== Object.keys(objectB).length) {
    return false;
  }

  return true;
}

export function isPromise(object = {}) {
  return object !== null && isFunction(object.then);
}

export const formatDate = date => new Date(date).toLocaleDateString();
