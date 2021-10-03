const brackets = {
    "<": ">",
    "(": ")",
    "[": "]",
    "{": "}",
};

/**
 * @param {string} code
 */
const splitCode = code => {
    let current = "";
    const bracketStack = [];
    const parts = [];

    for (const char of code) {
        if (bracketStack.length) {
            current += char;

            const lastBracket = bracketStack.at(-1);
            if (char === brackets[lastBracket]) bracketStack.pop();
            continue;
        }
        if (char === "/") {
            current && parts.push(current);
            current = "";
            continue;
        }
        current += char;
        if (char in brackets) bracketStack.push(char);
    }
    current && parts.push(current);

    return parts;
};

/**
 * @param {string} code
 * @return {Array<[ key: string, value: string]>}
 */
export const parseCode = code => {
    const parts = splitCode(code);
    return parts.reduce((params, part) => {
        const [opCode, ...others] = part.split("=");
        const value = others?.join("=");

        if (opCode && value) params.push([opCode, value]);
        return params;
    }, []);
};
