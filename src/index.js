module.exports = function check(str, bracketsConfig) {
    var result,
        lengthOfString,
        openSign,
        closeSign,
        maxCounter = 300,
        counter = 0;
    do {
        for (var i = 0; i < bracketsConfig.length; i++) {
            counter = counter + 1;
            openSign = bracketsConfig[i][0];
            closeSign = bracketsConfig[i][1];

            for (var k = 0; k < str.length; k++) {
                if (str.charAt(k) == openSign && str.charAt(k + 1) == closeSign) {
                    str = str.replace(openSign + closeSign, '');
                }
            }
            lengthOfString = str.length;
        }
        if (counter > maxCounter) {
            break;
        }

    } while (lengthOfString !== 0);
    if (lengthOfString === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
