import toNumber from '../src/toNumber.js';

describe('toNumber', function(){
  it('integer and float should return themselves', function(){
    expect(toNumber(1)).toEqual(1)
    expect(toNumber(1.0001)).toEqual(1.0001)
  });

  it('number strings return correctly', function(){
    expect(toNumber("1")).toEqual(1)
    expect(toNumber("1.0001")).toEqual(1.0001)
  });

  it('numbered char return correctly', function(){
    expect(toNumber('1')).toEqual(1)
  });

  it('should return zero on zero', function(){
    expect(toNumber(0)).toEqual(0)
  });

  it('should return integer on booleans', function(){
    expect(toNumber(true)).toEqual(1)
    expect(toNumber(false)).toEqual(0)
  });

  it('infinity should return infinity', function(){
    expect(toNumber(Infinity)).toEqual(Infinity)
  });

  it('minimum should return "5e-324"', function(){
    expect(toNumber(Number.MIN_VALUE)).toEqual(5e-324)
  });

  it('random string should return NAN', function(){
    var isnan = Number.isNaN(toNumber('abc'))
    expect(isnan)
  });

  it('symbol should return NAN', function(){
    var isnan = Number.isNaN(toNumber(Symbol('abc')))
    expect(isnan)
  });

  it('should clear leading and trailing whitespaces', function(){
      expect(toNumber("   123 ")).toEqual(123)
  });

  it('should return number from binary string', function(){
      expect(toNumber("0b01010101")).toEqual(85)
  });

  it('should return number from hexadecimal strings', function(){
    expect(toNumber("0x55")).toEqual(85)
  });

  it('should return NaN from bad hexadecimal strings', function(){
    var isnan = Number.isNaN(expect(toNumber("0x55g")))
    expect(isnan)
  });

  it('should return number from octal string', function(){
    expect(toNumber("0o125")).toEqual(85)
  });

  it('should return NaN when value is an object', function(){
    var isnan = Number.isNaN(expect(toNumber({'a':1, 'b':2})))
    expect(isnan)
  })

  it('should return NaN when value is an array', function(){
    var isnan = Number.isNaN(expect(toNumber([1, 2, 3])))
    expect(isnan)
  })

  it('should return NaN when value is an empty array', function(){
    var isnan = Number.isNaN(expect(toNumber([])))
    expect(isnan)
  })

  it('should return NaN when value is null', function(){
    var isnan = Number.isNaN(expect(toNumber(null)))
    expect(isnan)
  })

  it('should return NaN when value is undefined', function(){
    var isnan = Number.isNaN(expect(toNumber(undefined)))
    expect(isnan)
  })
});