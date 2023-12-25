const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isReverse) {
    if (isReverse === false) {
      this.isReverse = true;
    } else this.isReverse = false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const spaces = [];
    for (let i = 0; i < message.length; i += 1) {
      if (message[i] === " ") spaces.push(i);
    }
    message = message.toUpperCase().replace(/\s/g, "");
    key = key.toUpperCase();
    const arr = message.split("").map((el, i) => {
      if (this.alphabet.includes(el)) {
        const newI =
          this.alphabet.indexOf(key[i % key.length]) +
          this.alphabet.indexOf(el);
        return this.alphabet[newI % this.alphabet.length];
      }
      return el;
    });
    spaces.forEach((el) => arr.splice(el, 0, " "));
    if (!this.isReverse) {
      return arr.join("");
    }
    return arr.reverse().join("");
  }
  decrypt(encryptmessage, key) {
    if (!encryptmessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    const spaces = [];
    for (let i = 0; i < encryptmessage.length; i += 1) {
      if (encryptmessage[i] === " ") spaces.push(i);
    }
    encryptmessage = encryptmessage.toUpperCase().replace(/\s/g, "");
    key = key.toUpperCase();
    const arr = encryptmessage.split("").map((el, i) => {
      if (this.alphabet.includes(el)) {
        const newI =
          this.alphabet.indexOf(el) -
          this.alphabet.indexOf(key[i % key.length]);
        if (newI < 0) {
          return this.alphabet[this.alphabet.length + newI];
        }
        return this.alphabet[newI];
      }
      return el;
    });
    spaces.forEach((el) => arr.splice(el, 0, " "));
    if (!this.isReverse) {
      return arr.join("");
    }
    return arr.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
