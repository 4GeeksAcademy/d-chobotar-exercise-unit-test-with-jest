const { default: expect } = require('expect');
const { convertDollarToYen, convertEuroToDollar, convertYenToPound } = require('./app.js');

describe('convertEuroToDollar happy path input validation', () => {
    const testData = [
        { 
            testCase: 'expect result to be 1.07', 
            input: 1, 
            expected: 1.07 
        },
        { 
            testCase: 'expect result to be 428.65', 
            input: 399, 
            expected: 426.93 
        },
        { 
            testCase: 'expect result to be 0.54', 
            input: 0.5, 
            expected: 0.54
        },
        { 
            testCase: 'expect result to be 0.11', 
            input: 0.1, 
            expected: 0.11 
        }
    ]

    test.each(testData)('$testCase', ({ testCase, input, expected }) => {
        expect(convertEuroToDollar(input)).toBeCloseTo(expected);
    });
});

describe('convertDollarToYen happy path input validation', () => {
    const testData = [
        {
            testCase: 'expect result to be 155.61',
            input: 1,
            expected: 155.61
        },
        {
            testCase: 'expect result to be 7780.5',
            input: 50,
            expected: 7780.5
        },
        {
            testCase: 'expect result to be 15561',
            input: 100,
            expected: 15561
        },
        {
            testCase: 'expect result to be 933.66',
            input: 6,
            expected: 933.66
        }
    ]

    test.each(testData)('$testCase', ({ testCase, input, expected }) => {
        expect(convertDollarToYen(input)).toBeCloseTo(expected);
    });
});

describe('convertYenToPound happy path input validation', () => {
    const testData = [
        {
            testCase: 'expect result to be 0.0051',
            input: 1,
            expected: 0.0051
        },
        {
            testCase: 'expect result to be 0.26',
            input: 50,
            expected: 0.26
        },
        {
            testCase: 'expect result to be 0.51',
            input: 100,
            expected: 0.51
        },
        {
            testCase: 'expect result to be 0.0306',
            input: 6,
            expected: 0.031
        },
        {
            testCase: 'expect result to be 257.18',
            input: 50000,
            expected: 255
        }
    ]

    test.each(testData)('$testCase', ({ testCase, input, expected }) => {
        expect(convertYenToPound(input)).toBeCloseTo(expected);
    });
});

describe('nagative input validation', () => {
    const testData = [
        {
            testCase: 'expect result to be Invalid Input with a string',
            input: "10",
            expected: "Invalid Input: Amount cannot be negative."
        },
        { 
            testCase: 'expect result to be Invalid Input with a negative number', 
            input: -100, expected: 
            "Invalid Input: Amount should be a number." 
        },
        { 
            testCase: 'expect result to be Invalid Input with a blank', 
            input: "", 
            expected: "Invalid Input: Amount cannot be negative." 
        },
        { 
            testCase: 'expect result to be Invalid Input with a boolean', 
            input: true, 
            expected: "Invalid Input: Amount cannot be negative." 
        },
        { 
            testCase: 'expect result to be Invalid Input with a undefined', 
            input: true, 
            expected: "Invalid Input: Amount cannot be negative." 
        }
    ]

    test.each(testData)('$testCase', ({ testCase, input, expected }) => {
        expect(() => convertEuroToDollar(input)).toThrow(expected);
        expect(() => convertDollarToYen(input)).toThrow(expected);
        expect(() => convertYenToPound(input)).toThrow(expected);
    });
});
