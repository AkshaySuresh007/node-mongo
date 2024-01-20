const strReplace = (input, replacements) => {
    let result = input;

    for (const [search, replaceWith] of replacements) {
        const regex = new RegExp(search, 'g');
        result = result.replace(regex, replaceWith);
    }

    return result;
}

module.exports = strReplace;