// Import the coinFlip function from your coin.mjs file
import {coinFlip, flipACoin} from "./modules/coin.mjs";
import minimist from 'minimist';
// Call the coinFlip function and put the return into STDOUT
console.log(flipACoin("heads"));
console.log(flipACoin("tails"));


// Call the coinFlip function and put the return into STDOUT

const args = minimist(process.argv.slice(2))
const str = args['call']
if(!(str === "heads" || str === "tails" )){
    throw new Error("User not found")
}
console.log(flipACoin(str));