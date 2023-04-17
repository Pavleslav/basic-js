const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = String(n);
  // console.log(num)
  let numArr = num.split('')
    // console.log(numArr);
  let sum = 0;
  for ( i = 0; i<numArr.length; i++){
    // console.log('hello')
    sum = sum + Number(numArr[i]);
    // console.log(sum.toString()[0]);
  }
  console.log('sum = '+ sum) ;
      if ((Number(n.toString()[0]) + Number(n.toString()[1])) <= 10){
        console.log('first case'+ sum.toString().length)
      return Number(sum.toString()[0]);
    } else {
        console.log('second case'+ sum.toString().length)
      return (Number(n.toString()[0]));
    }
}

module.exports = {
  getSumOfDigits
};
