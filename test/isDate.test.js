import isDate from "../src/isDate.js";

describe('isDate', function(){
    it('should return true with Date object', function(){
        const date = new Date();
        expect(isDate(date)).toBe(true);
    });
});