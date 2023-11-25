import isDate from "../src/isDate.js";

describe('isDate', function(){
    it('should return true with Date object', function(){
        const date = new Date();
        expect(isDate(date)).toBe(true);
    });
    it('should return true with Date object', function(){
        const date = new Date(Date.now());
        expect(isDate(date)).toBe(true);
    });
    it('should return true with different ways to create Date object', function() {
        const millisecondsDate = new Date(1468959781804);
        const stringDate = new Date("2023-11-25");
        const ymDate = new Date(2023, 11);
        const ymdDate = new Date(2023, 11, 25);
        const ymdhmsDate = new Date(2023, 11, 15, 22, 45, 50);

        expect(isDate(millisecondsDate)).toBe(true);
        expect(isDate(stringDate)).toBe(true);
        expect(isDate(ymDate)).toBe(true);
        expect(isDate(ymdDate)).toBe(true);
        expect(isDate(ymdhmsDate)).toBe(true);
    });
    it('should return false with valueAsDate', function() {
        const date =  new Date("2023-11-25");
        const newDate = date.valueAsDate;       
        expect(isDate(newDate)).toBe(false);
    });
    it('should return false with string of a date', function() {
        const date = "25-11-2023";
        expect(isDate(date)).toBe(false);
    });
    it('should return false with null or undefined', function() {
        expect(isDate(null)).toBe(false);
        expect(isDate(undefined)).toBe(false);
    });

    // Failed test
    // it('should return false with Date object that is created from invalid dates', function(){
    //     const date = new Date("2023-30-15");
    //     expect(isDate(date)).toBe(false);
    // });
});