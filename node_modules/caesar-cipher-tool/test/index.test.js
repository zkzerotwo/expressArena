const caesar = require('../index');

test('caesar must return proper output when shift equal 0.', () => {
    const input = "Hello, World."
    const expectedOutput = "Hello, World."
    const shift = 0;
    expect(caesar.caesar(input, shift)).toBe(expectedOutput);
});

test('caesar must return proper output when shift equal 13.', () => {
    const input = "Hello, World."
    const expectedOutput = "Uryyb, Jbeyq."
    const shift = 13;
    expect(caesar.caesar(input, shift)).toBe(expectedOutput);
});

test('caesar must return proper output when shift equal 25.', () => {
    const input = "Hello, World."
    const expectedOutput = "Gdkkn, Vnqkc."
    const shift = 25;
    expect(caesar.caesar(input, shift)).toBe(expectedOutput);
});

test('caesar must return error when shift equal 26.', () => {
    const input = "Hello, World."
    const shift = 26;
    try {
        caesar.caesar(input, shift);
    } catch(err) {
        expect(err.message).toBe("Shift must be 0-25.");
    }
});

test('caesar must return error when shift is not integer.', () => {
    const input = "Hello, World."
    const shift = "hoge";
    try {
        caesar.caesar(input, shift);
    } catch(err) {
        expect(err.message).toBe("Shift must be a integer greater than or equal to 0.");
    }
});