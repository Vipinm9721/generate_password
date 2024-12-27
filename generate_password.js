function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "@#?!&*";
    let characterPool = letters;
    if (includeNumbers) characterPool += numbers;
    if (includeSpecialChars) characterPool += specialChars;

    let password = "";
    let hasUppercase = false, hasNumber = false, hasSpecialChar = false;

    while (password.length < length) {
        const char = characterPool[Math.floor(Math.random() * characterPool.length)];
        password += char;
        if (char >= 'A' && char <= 'Z') hasUppercase = true;
        if (numbers.includes(char)) hasNumber = true;
        if (specialChars.includes(char)) hasSpecialChar = true;
    }

    if (!hasUppercase) password = replaceAt(password, Math.floor(Math.random() * length), randomChar(letters.toUpperCase()));
    if (includeNumbers && !hasNumber) password = replaceAt(password, Math.floor(Math.random() * length), randomChar(numbers));
    if (includeSpecialChars && !hasSpecialChar) password = replaceAt(password, Math.floor(Math.random() * length), randomChar(specialChars));

    return password;
}

function replaceAt(str, index, char) {
    return str.substring(0, index) + char + str.substring(index + 1);
}

function randomChar(pool) {
    return pool[Math.floor(Math.random() * pool.length)];
}

console.log(generatePassword(10, true, true));
