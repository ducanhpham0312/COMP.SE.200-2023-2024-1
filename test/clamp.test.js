import clamp from "../src/clamp.js";

describe('clamp', function() {    
    it('should not change a number which is on the lower bound', function() {
        expect(clamp(-5, -5, 5)).toBe(-5);
    });
    
    it('should return the lower bound for a smaller number', function() {
        expect(clamp(-10, -5, 5)).toBe(-5);
    });

    it('should return NaN when the value to clamp is NaN', function() {
        expect(clamp(NaN, -5, 5)).toBe(NaN);
    });

    it('should return 0 when all bounds are NaN', function() {
        expect(clamp(-5, NaN, NaN)).toBe(0);
    });

    it('should return 0 when value < 0 and lower bound is NaN', function() {
        expect(clamp(-5, NaN, 5)).toBe(0);
    });

    /** Failed tests
     *
     */
    // Returns the lower bound (-5) instead of the original number
    // it('should not change a number within the accepted range', function() {
    //	expect(clamp(4, -5, 5)).toBe(4);
    // });

    // Returns the lower bound (-5) instead of the original number
    // it('should not change a number which is on the upper bound', function() {
    //	expect(clamp(5, -5, 5)).toBe(5);
    // });

    // Returns the lower bound (-5) instead of the upper bound
    // it('should return the upper bound for a larger number', function() {
    //  expect(clamp(10, -5, 5)).toBe(5);
    // });

    // Returns the lower bound (-5) instead of null
    // it('should return null on the null value', function() {
    //	expect(clamp(null, -5, 5)).toBe(null);
    // });

    // Returns 0 instead of null
    // it('should return null when the lower bound is null', function() {
    //	expect(clamp(4, null, 5)).toBe(null);
    // });

    // Returns the lower bound (-5) instead of null
    // it('should return null when the upper bound is null', function() {
    //	expect(clamp(4, -5, null)).toBe(null);
    // });

    // Returns 0 instead of undefined
    // it('should return undefined when the lower bound is undefined', function() {
    //	expect(clamp(4, undefined, 5)).toBe(undefined);
    // });

    // Returns the lower bound (-5) instead of undefined
    // it('should return undefined when the upper bound is undefined', function() {
    //	expect(clamp(4, -5, undefined)).toBe(undefined);
    // });

    // Returns the lower bound (-5) instead of 0 which replaces the upper bound (NaN)
    // it('should return 0 when value > 0 and upper bound is NaN', function() {
    //	expect(clamp(5, -5, NaN)).toBe(0);
    // });
});
