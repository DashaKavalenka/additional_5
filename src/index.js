module.exports = function check(str, bracketsConfig) {
    // your solution
    var openChars = [],
        closeChars = [],
        openBracket,
        closeBracket,
        openCharIndex,
        closeCharIndex,
        stack = [],
        stringArray = str.split('');
    if (stringArray.length % 2 !== 0) {
       return false;
    }
    for (var i = 0, len = bracketsConfig.length; i<len; i++){
        openBracket = bracketsConfig[i][0];
        closeBracket = bracketsConfig[i][1];
        if (openBracket !== closeBracket) {
            openChars.push(openBracket);
            closeChars.push(closeBracket);
        }
    } //Разбиваем второй параметр на 2 масива( открывающие, закрывающие) сохраняя соответствие индексов открывающих закрывающим
    for (var i = 0, len = stringArray.length; i < len; i++) {
        openCharIndex = openChars.indexOf(stringArray[i]);
        if (openCharIndex !== -1) {
            stack.push(openCharIndex);
            continue;
        }

        closeCharIndex = closeChars.indexOf(stringArray[i]);
        if (closeCharIndex !== -1) {
            openCharIndex = stack.pop();
            if (closeCharIndex !== openCharIndex) {
                return false;
            }
        }
    }
    return stack.length === 0;

}
