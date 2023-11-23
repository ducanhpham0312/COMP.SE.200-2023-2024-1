import get from "../src/get.js";

describe('get', function() {
    const object = {'a': [{'b': {'c': 3}}]}
    it('should return 3 when given the right path syntax', function() {
	expect(get(object, 'a[0].b.c', 'default')).toBe(3);
    });
    it("should return the default value when the path syntax's wrong", function() {
	expect(get(object, 'a[0].c.b', 'default')).toBe('default');
    });
    it('should return the default value when given an empty array', function() {
	expect(get([], 'a.b.c', 'default')).toBe('default');
    });
    it('should return the default value when given null', function() {
	expect(get(null, 'a.b.c', 'default')).toBe('default');
    });
});
