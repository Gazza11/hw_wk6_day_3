const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase()
}

PangramFinder.prototype.isPangram = function () {
  const checkReady = this.alphabet.every((letter) => {
      return this.phrase.includes(letter)
  })
  return checkReady
};

module.exports = PangramFinder;
