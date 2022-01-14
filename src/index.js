module.exports = function reverse(n) {
    var strReverse = String(n);
    var mirrorNumber = '';
    for (var i = 0; i < strReverse.length; i++) {
        mirrorNumber = `${strReverse[i]}${mirrorNumber}`;
    }
    return parseInt(mirrorNumber);
}