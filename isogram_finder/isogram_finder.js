const IsogramFinder = function (word) {
    this.word = word.split('')
}

IsogramFinder.prototype.isIsogram = function () {
    const uniqueLetter = this.word.map((letter) => {
        return letter.toLowerCase()
    })
    return uniqueLetter.every((value, index) => uniqueLetter.indexOf(value) === index)
}


module.exports = IsogramFinder;