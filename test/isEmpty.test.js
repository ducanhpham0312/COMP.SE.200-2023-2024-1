import isEmpty from "../src/isEmpty";

describe('isEmpty', function(){
  it('empty array is empty', function(){
      expect(isEmpty([])).toBe(true);
  });

  it('filled array is not empty', function(){
      expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('empty map is empty', function(){
      expect(isEmpty({})).toBe(true);
  });
    
  it('filled map is not empty', function(){
      expect(isEmpty({'a': 1})).toBe(false);
  });

  it('empty map object is empty', function(){
      const testMap = new Map();
      expect(isEmpty(testMap)).toBe(true);
  });

  it('filled map object is not empty', function(){
      const testMap = new Map([
          [1, 'one'],
          [2, 'two'],
          [3, 'three'],
      ]);
      expect(isEmpty(testMap)).toBe(false);
  });

  it('empty set object is empty', function(){
      const testSet = new Set();
      expect(isEmpty(testSet)).toBe(true);
  });

  it('filled set object is not empty', function(){
      const testSet = new Set([1, 2, 3]);
      expect(isEmpty(testSet)).toBe(false);
  });

  it('empty string is empty', function(){
      expect(isEmpty("")).toBe(true);
  });

  it('filled string is not empty', function(){
      expect(isEmpty("abc")).toBe(false);
  });

  it('empty char is empty', function(){
      expect(isEmpty('')).toBe(true);
  });

  it('filled char is not empty', function(){
      expect(isEmpty('a')).toBe(false);
  });

  it('empty buffer is empty', function(){
      expect(isEmpty(Buffer.alloc(0))).toBe(true);
  });

  it('filled buffer is not empty', function(){
      const buf = Buffer.alloc(6)
      expect(isEmpty(buf)).toBe(false);
  });

  it('empty arguments is empty', function(){
      function test() {
          expect(isEmpty(arguments)).toBe(true);
      };
      test();
  });

  it('filled arguments is not empty', function(){
      function test(a, b, c) {
          expect(isEmpty(arguments)).toBe(false);
      };
      test('a', 'b', 'c');
  });

  it('empty typed array is empty', function(){
      const array = new Int8Array(0)
      expect(isEmpty(array)).toBe(true);
  });

  it('filled typed array is not empty', function(){
      const array = new Int8Array(8)
      expect(isEmpty(array)).toBe(false);
  });

  it('empty prototype is empty', function(){
      const testObject = new Object()
      expect(isEmpty(Object.getPrototypeOf(testObject))).toBe(true);
  });

  it('filled prototype is not empty', function(){
      const test = {
        city: "Madrid",
        greet() {
          console.log(`Greetings from ${this.city}`);
        },
      };
      expect(isEmpty(test)).toBe(false);
  });

  it('null is empty', function(){
    expect(isEmpty(null)).toBe(true);
  });

  it('boolean is empty', function(){
      expect(isEmpty(true)).toBe(true);
  });

  it('integer is empty', function(){
      expect(isEmpty(1)).toBe(true);
  });

  it('float is empty', function(){
      expect(isEmpty(1.1)).toBe(true);
  });
})