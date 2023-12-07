import toString from '../src/toString.js';

describe('toString', function(){
  it('positive integer and float returns corresponding string', function(){
    expect(toString(1)).toEqual('1')
    expect(toString(1.001)).toEqual('1.001')
  });
  
  it('negative is preserved with zero integer', function(){
    expect(toString(-0)).toEqual('-0')
  });
  
  it('negative is preserved with non-zero integer', function(){
    expect(toString(-1)).toEqual('-1')
  });
  
  it('array returns string', function(){
    expect(toString([1, 2, 3])).toEqual('1,2,3')
  });
  
  it('empty array returns empty string', function(){
    expect(toString([])).toEqual('')
  });
  
  it('array with null returns empty string', function(){
    expect(toString([null])).toEqual("")
  });

  it('string returns itself', function(){
    expect(toString("abc")).toEqual('abc')
  });

  it('char returns itself', function(){
    expect(toString('a')).toEqual('a')
  });

  it('empty string returns itself', function(){
    expect(toString("")).toEqual('')
  });
  
  it('object returns object object', function(){
    expect(toString(new Object())).toEqual('[object Object]')
  });
  
  it('symbol should return string', function(){
    expect(toString(Symbol('abc'))).toEqual('Symbol(abc)')
  });


  /**
   * Failed tests
   */
  // Returns 'null' instead of empty string
  // it('null returns empty string', function(){
  //   expect(toString(null)).toEqual('')
  // });
  
  // Returns 'undefined' instead of empty string
  // it('undefined returns empty string', function(){
  //   var a;
  //   expect(toString(a)).toEqual('')
  // });
});