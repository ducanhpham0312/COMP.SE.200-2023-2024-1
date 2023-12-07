import reduce from '../src/reduce.js';

describe('reduce', function(){
  it('should reduce the given object correctly', function(){
    const arr = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result
        }, {})
    const expected =  { '1': ['a', 'c'], '2': ['b'] };
    expect(arr).toEqual(expected);
  });
  it('should work with different types of keys', function() {
    const arr = reduce({ 'a': 2, 'b': null, 'c': 2, 'd':'s' }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
      }, {})
    const expected =  { 2:['a','c'], null:['b'], 's':['d'] };
    expect(arr).toEqual(expected);
  });
  it('should work with different arrays', function() {
    const arr = reduce([{'a':2, 'b':2}], (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
      }, {})
    const expected =  { "[object Object]": [0] };
    expect(arr).toEqual(expected);
  });
  it('should work with no initial accumulator', function(){
    const arr = reduce([1, 2, 3], (sum, n) => sum + n)
    expect(arr).toEqual(6)
  })
  it('should work with initial accumulator different than 0', function(){
    const arr = reduce([1, 2, 3], (sum, n) => sum + n, 4)
    expect(arr).toEqual(10)
  })

  it('should work with empty array', function(){
    const arr = reduce([], (sum, n) => sum + n, 1)
    expect(arr).toEqual(1)
  })

  it('return empty object when collection is not array or object', function(){
    const arr = reduce(15, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key)
      return result
    }, {})
    expect(arr).toEqual({})
  })

  it('treats array like object with index value as key when using iteratee compatible with object', function(){
    const arr = reduce([1, 2, 3], (result, value, key) => {
      (result[value] || (result[value] = [])).push(key)
      return result
    }, {})
    expect(arr).toEqual({"1": [0], "2": [1], "3": [2]})
  })
  it('should work with accumulator of different type', function(){
    const arr = reduce([1, 2, 3], (sum, n) => sum + n, "a string")
    expect(arr).toEqual("a string123")
  })

  it('should work with typed array', function(){
    const typedArr = new Uint8Array(3)
    typedArr[0] = 20
    const arr = reduce(typedArr, (sum, n) => sum + n, 1)
    expect(arr).toEqual(21)
  })
});