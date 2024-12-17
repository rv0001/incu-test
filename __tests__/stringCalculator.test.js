const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('should handle new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3); 
    expect(add("//|\n3|4|5")).toBe(12);
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[###]\n4###5###6")).toBe(15);
  });

  test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4");
  });

  test('should support multiple custom delimiters of any length', () => {
    expect(add("//[***][%]\n1***2%3")).toBe(6);
    expect(add("//[*][#][%]\n1*2#3%4")).toBe(10);
  });

});
