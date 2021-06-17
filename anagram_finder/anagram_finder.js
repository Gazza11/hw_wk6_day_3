const AnagramFinder = function (word) {
    this.word = word.split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const sortOriginal = this.word.map((letter) => {
        return letter
    })
    const sortOtherWords = otherWords.every((letter) => {
        return letter
    })
    sortedOriginal = sortOriginal.sort()
    // return sortedOriginal
    return sortOtherWords.sort()
    // return otherWords
}

module.exports = AnagramFinder;
