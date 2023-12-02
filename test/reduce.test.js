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
});