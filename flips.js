// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from 'minimist';

// Call the coinFlip function and put the return into STDOUT

const args = minimist(process.argv.slice(2))
var arr = coinFlips(args['number'])
console.log(coinFlipsResult);
console.log(countFlips(arr));
