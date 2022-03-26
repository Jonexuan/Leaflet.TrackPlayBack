export function isArray (arr) {
  return Array.isArray ? Array.isArray(arr) : Object.prototype.toString.call(arr) === '[object Array]'
}

export function isFunction (func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}
