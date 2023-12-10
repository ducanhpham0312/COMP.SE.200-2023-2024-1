import get from "../src/get.js";

describe('get', function() {
    const object = {'a': [{'b': {'c': 3}},
			  {'d': {'e': 5}}
			 ]};

    it('return 3 when given the right path syntax (string format)', function() {
        expect(get(object, 'a[0].b.c', 'default')).toBe(3);
    });

    it('return 3 when given another correct path syntax (list format)', function() {
        expect(get(object, ['a', '0', 'b', 'c'], 'default')).toBe(3);
    });

    it('return 5 when given a correct path (string) but search in another branch of the object', function() {
        expect(get(object, 'a[1].d.e')).toBe(5);
    });

    it('return 5 when given a correct path (list) but search in another branch of the object', function() {
        expect(get(object, ['a', '1', 'd', 'e'])).toBe(5);
    });
    
    it("return the default value when the path syntax's wrong", function() {
        expect(get(object, 'a[0].c.b', 'default')).toBe('default');
    });
    
    it('return the default value when given an empty array', function() {
        expect(get([], 'a.b.c', 'default')).toBe('default');
    });

    it('return undefined when given an empty array without default value', function() {
        expect(get([], 'a.b.c')).toBe(undefined);
    });
    
    it('return the default value when given null', function() {
        expect(get(null, 'a.b.c', 'default')).toBe('default');
    });

    it('return undefined when given null without default value', function() {
        expect(get(null, 'a.b.c')).toBe(undefined);
    });
});
