import eq from "../src/eq.js";

describe('eq', function() {
    const object = {'a': 1}
    const other = {'a': 1}
    it('should return true for an object compared with itself', function() {
	expect(eq(object, object)).toBe(true);
    });
    it('should return false for 2 equivalent objects but with different references', function() {
	expect(eq(object, other)).toBe(false);
    });
    it('should return true for 2 equal strings', function() {
	expect(eq('a', 'a')).toBe(true);
    });
    it('should return false for 2 non-equal strings', function() {
	expect(eq('a', 'b')).toBe(false);
    });
    it('should return false for a string and the object based on the same string', function() {
	expect(eq('a', Object('a'))).toBe(false);
    });
    it('should return true for 2 equal integers', function() {
	expect(eq(3, 3)).toBe(true);
    });
    it('should return false for 2 non-equal integers', function() {
	expect(eq(3, 4)).toBe(false);
    });
    it('should return true for 2 equal floats', function() {
	expect(eq(3.1, 3.1)).toBe(true);
    });
    it('should return false for 2 non-equal floats', function() {
	expect(eq(3.1, 2.4)).toBe(false);
    });
    it('should return true for 2 NaN', function() {
	expect(eq(NaN, NaN)).toBe(true);
    });
    it('should return true for 2 undefined', function() {
	expect(eq(undefined, undefined)).toBe(true);
    });
});
