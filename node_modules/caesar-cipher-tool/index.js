module.exports.caesar = function(input, shift) {
    if (!/^([1-9]\d*|0)$/.test(shift)) {
        throw new Error('Shift must be a integer greater than or equal to 0.')
    }
    if (shift < 0 || 26 <= shift) {
        throw new Error('Shift must be 0-25.')
    }

    let output = "";

    for (let i = 0; i < input.length; i++) {
        const code = input.charCodeAt(i);

        if (code >= 65 && 90 >= code) {
            output += String.fromCharCode((code + shift - 65) % 26 + 65);
        }
        else if (code >= 97 && 122 >= code) {
            output += String.fromCharCode((code + shift - 97) % 26 + 97);
        }
        else {
            output += input.charAt(i);
        }
    }

    return output;
}