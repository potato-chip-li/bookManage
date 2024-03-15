const pick = (obj, usefulKeys) =>
   Object.keys(obj).reduce((acc, key) => {
      return usefulKeys.includes(key) ?
        {...acc, [key]: obj[key]} : acc
   }, {});

let o = {'a':'a','b':'b','c':'c'}

console.log(pick(o,['a','c']))