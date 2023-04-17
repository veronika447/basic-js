const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],
  getLength() {
    return chainMaker.chain.length
  },
  addLink(value) {
    let newValue = String(value);
    if (value === undefined)
      newValue = '';
    if (newValue.length > 0) { chainMaker.chain.push(`( ${value} )`); }
    else { chainMaker.chain.push('( )') }
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && position <= chainMaker.chain.length && position > 0) {
      chainMaker.chain.splice(position - 1, 1)
    }
    else {
      chainMaker.chain.length = 0;
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    chainMaker.chain = chainMaker.chain.reverse();
    return this
  },
  finishChain() {
    return chainMaker.chain.splice(0, chainMaker.chain.length).join('~~')
  }
};

module.exports = {
  chainMaker
};
