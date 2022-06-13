// Unit tests for the helloWorld function

const randomBoolean = Boolean(Math.round(Math.random()))
const randomNumber = Math.ceil(Math.random() * 100)

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]

describe('helloWorld()', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello()', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return Hello, Jane! when passed the argument 'Jane'", function(){
        expect( sayHello("Jane")).toBe("Hello, Jane!");
    })
    it("should return Hello, Alex! when passed the argument 'Alex'", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it("should return Hello, Pat! when passed the argument 'Pat'", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it("should return Hello, World! when passed the argument true", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it("should return Hello, World! when passed the argument false", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    })
});

describe('isFive()', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return false when executed', function() {
        expect(isFive()).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isFive()).not.toBe(undefined);
    });
    it("should return true when 5 is called", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return false when '5' is called", function() {
        expect(isFive('5')).toBe(false);
    });
});

describe('isEven()', () => {
    it('should be a defined function', () => {
        expect(typeof isEven).toBe('function');
    })
    it('should return a boolean value when passed any number', () => {
        expect(typeof isEven(randomNumber)).toBe('boolean')
    })
    it('should return true when passed 2', () => {
        expect(isEven(2)).toBe(true)
    })
    it('should return true when passed -4', () => {
        expect(isEven(-4)).toBe(true)
    })
    it('should return true when passed "8"', () => {
        expect(isEven("8")).toBe(true)
    })
    it('should return true when passed 0', () => {
        expect(isEven(0)).toBe(true)
    })
    it('should return false when passed the number 3', () => {
        expect(isEven(3)).toBe(false)
    })
    it('should return false when passed a non-numeric string like "banana"', () => {
        expect(isEven("banana")).toBe(false)
    })
    it('should return false when passed the boolean value ' + randomBoolean, () => {
        expect(isEven(randomBoolean)).toBe(false)
    })
})

// isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false

describe('isVowel()', () => {
    it('should be a defined function', () => {
        expect(typeof isVowel).toBe('function');
    })
    it('should return a boolean value when passed any letter', () => {
        expect(typeof isVowel(randomLetter)).toBe('boolean');
    })
    it('should return true when passed the letter a', () => {
        expect(isVowel("a")).toBe(true);
    })
    it('should return true when passed the letter A', () => {
        expect(isVowel("A")).toBe(true);
    })
    it('should return false when passed the letter y', () => {
        expect(isVowel("y")).toBe(false);
    })
    it('should return false when passed the number 4', () => {
        expect(isVowel(4)).toBe(false)
    })
    it('should return false when passed the string "banana"', () => {
        expect(isVowel("banana")).toBe(false)
    })
    it('should return false when an argument is not passed', () => {
        expect(isVowel()).toBe(false)
    })
})

// add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN

describe('add()', () => {
    it('should be a defined function', () => {
        expect(typeof add).toBe('function');
    })
    it('should return a number value when passed two numbers', () => {
        expect(typeof add(1, 2)).toBe('number');
    })
    it('should returns the sum of two numbers when passed as arguments', () => {
        expect(add(2, 3)).toBe(5);
    })
    it('should returns the sum of two numbers when passed as arguments', () => {
        expect(add(2, 3)).toBe(5);
    })
    it('should returns the sum of two numbers when negative numbers are passed as arguments', () => {
        expect(add(-3, -9)).toBe(-12);
    })
    it('should returns the sum of two numbers even when a string of a number is passed as an arguement', () => {
        expect(add("5", 6)).toBe(11);
    })
    it('should returns the sum of two numbers when passed as arguments', () => {
        expect(add(2, 3)).toBe(5);
    })
    it('should returns NaN when passed the strings "banana" and "split"', () => {
        expect(add("banana", "split")).toBeNaN();
    })
    it('should returns NaN when passed 2 and "apples"', () => {
        expect(add(2, "apples")).toBeNaN();
    })
    it('should returns NaN when not passed any arguements', () => {
        expect(add()).toBeNaN();
    })
})