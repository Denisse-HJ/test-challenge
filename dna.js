function dna (dnaString) {
    if (dnaString === '') {
        return '';
    }

    return dnaString.replace(/[^CTAG]/g, '');
}
module.exports = dna;