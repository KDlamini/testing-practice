const lib = require('./src/index');
const calculator = require('./src/calculator');
const stringLength = lib.stringLength;
const reverseString = lib.reverseString;
const capitalize = lib.capitalize;

test('length of hello to equal 5', () => {
    expect(stringLength('hello')).toBe(5);
});

test('count is greater than 1 but not more than 10', () => {
    expect(stringLength('foo')).toBeGreaterThan(0);
    expect(stringLength('magnetic')).toBeLessThanOrEqual(10);
    expect(() => stringLength('')).toThrow(Error);
    expect(() => stringLength('cosmopolitan')).toThrow(Error);
});

test('string is reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Let me be')).toBe('eb em teL');
});

describe('addition', () => {
    test('2 + 2 must equal 4', () => {
      expect(calculator.add(2, 2)).toBe(4);
    });
  
    test('5 + 3 must equal 8', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    test('2100 + 201 must equal 2301', () => {
      expect(calculator.add(2100, 201)).toBe(2301);
    });
});

describe('subtraction', () => {
    test('1 - 4 must equal -3', () => {
      expect(calculator.subtract(1, 4)).toBe(-3);
    });
  
    test('12 - 3 must equal 9', () => {
      expect(calculator.subtract(12, 3)).toBe(9);
    });

    test('21 - 21 must equal 0', () => {
      expect(calculator.subtract(21, 21)).toBe(0);
    });
});

describe('division', () => {
    test('10 / 2 must equal 5', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
  
    test('12 / 3 must equal 4', () => {
      expect(calculator.divide(12, 3)).toBe(4);
    });

    test('62 / 5 must equal 12.4', () => {
      expect(calculator.divide(62, 5)).toBe(12.4);
    });
});

describe('multiplication', () => {
    test('22 * 2 must equal 44', () => {
      expect(calculator.multiply(22, 2)).toBe(44);
    });
  
    test('40 * 0 must equal 0', () => {
      expect(calculator.multiply(40, 0)).toBe(0);
    });

    test('5 * 5 must equal 25', () => {
      expect(calculator.multiply(5, 5)).toBe(25);
    });
});

describe('capitalize string', () => {
    test('good morning must equal Good morning', () => {
        expect(capitalize('good morning')).toBe('Good morning');
    });
});