import filter from "../src/filter.js";

describe('filter', function() {
    const users = [
	{'user': 'barney', 'active': true, 'truevalue': true},
	{'user': 'fred', 'active': false, 'truevalue': true}
    ]
    it('should filter objects which fulfill the predicate', function() {
	expect(filter(users, ({active}) => active)).toEqual([{'user': 'barney', 'active': true, 'truevalue': true}]);
    });
    it('should not filter anything out when all objects fulfill the predicate', function() {
	expect(filter(users, ({truevalue}) => true)).toEqual(users);
    });
    it('should return a list of empty array when no object fulfills the predicate', function() {
	expect(filter(users, ({truevalue}) => false)).toEqual([[]]);
    });
    it('should return a list of empty array when filtering an empty array', function() {
	expect(filter([], ({active}) => active)).toEqual([[]]);
    });
    it('should return a list of empty array when filtering null value', function() {
	expect(filter(null, ({active}) => active)).toEqual([[]]); 
    });
});
