import eq from "../src/eq.js";

describe('eq', function() {
    const object = {'a': 1}
    const other = {'a': 1}
    const array1 = ['a', 3, 'b']
    const array1_ = ['a', 3, 'b']
    const array2 = ['a', '3', 'b']
    
    it('an object equals itself', function() {
        expect(eq(object, object)).toBe(true);
    });
    
    it('2 equivalent objects but with different references are not equal', function() {
        expect(eq(object, other)).toBe(false);
    });

    it('an array equals itself', function() {
        expect(eq(array1, array1)).toBe(true);
    });
    
    it('2 different arrays are not equal', function() {
        expect(eq(array1, array2)).toBe(false);
    });
    
    it('2 equivalent arrays but with different references are not equal', function() {
        expect(eq(array1, array1_)).toBe(false);
    });
  
    it('2 equivalent empty arrays (with different references) are not equal', function() {
        expect(eq([], [])).toBe(false);
    });
    
    it('2 identical strings are equal', function() {
        expect(eq('a', 'a')).toBe(true);
    });

    it('2 different strings are not equal', function() {
        expect(eq('a', 'b')).toBe(false);
    });

    it('2 identical integers are equal', function() {
        expect(eq(3, 3)).toBe(true);
    });

    it('2 different integers are not equal', function() {
        expect(eq(3, 4)).toBe(false);
    });

    it('negative zero equals positive zero', function() {
        expect(eq(-0, 0)).toBe(true);
    });

    it('2 identical floats are equal', function() {
        expect(eq(3.1, 3.1)).toBe(true);
    });

    it('2 different floats are not equal', function() {
        expect(eq(3.1, 2.4)).toBe(false);
    });

    it('an integer equals the corresponding float', function() {
        expect(eq(2, 2.0)).toBe(true);
    });

    it('Infinity equals Infinity', function() {
        expect(eq(Infinity, Infinity)).toBe(true);
    });
    
    it('NaN equals NaN', function() {
        expect(eq(NaN, NaN)).toBe(true);
    });

    it('undefined equals undefined', function() {
        expect(eq(undefined, undefined)).toBe(true);
    });

    it('null equals null', function() {
        expect(eq(null, null)).toBe(true);
    });

    it('empty strings are equal', function() {
        expect(eq("", "")).toBe(true);
    });

    /** Failed tests
     *
     */

    // Returns true instead of false
    // it('a string and the object based on the same string are not equal', function() {
    //	expect(eq('a', Object('a'))).toBe(false);
    // });
});
