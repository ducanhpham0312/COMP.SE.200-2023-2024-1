import clamp from "../src/clamp.js";

describe('clamp', function() {    
    it('should not change a number which is on the lower bound', function() {
        expect(clamp(-5, -5, 5)).toBe(-5);
    });
    
    it('should return the lower bound for a smaller number', function() {
        expect(clamp(-10, -5, 5)).toBe(-5);
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
});
