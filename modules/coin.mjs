/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  
  return (Math.round(Math.random()) == 0) ? "heads" : "tails"

}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  // if (!flips){
  //   flips = 1;
  // }
  var results = [];
  for (let i = 0; i < flips; i++) {
    results.push(coinFlip());
  }
  return results;

}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {

  var object = {
    heads : 0,
    tails : 0
  }

  array.forEach(myFunction);

  function myFunction(value, index, array){
    if (value == "heads"){
      object["heads"] += 1;
    }else{
      object['tails'] += 1;
    }

    if (index = 1){
      if (object["heads"] = 1){
        return({heads: 1})
      }
      else{
        return({tails: 1})
      }
    }
  }
  return (object)
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call1) {
  let call = call1;
  let flip = coinFlip();
  let result = "";
  if (call === flip){
    result = 'win';
  }else{
    result = 'lose';
  }
  
  const object2 = {call, flip, result}
  return(object2)
}


/** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip, coinFlips, countFlips, flipACoin}