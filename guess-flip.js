// Import the coinFlip function from your coin.mjs file
import {coinFlip, flipACoin} from "./modules/coin.mjs";
import minimist from 'minimist';
// Call the coinFlip function and put the return into STDOUT

const args = minimist(process.argv.slice(2))
const str = args['call']
if(!(str === "heads" || str === "tails" )){
    //throw new Error("no input")
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
    process.exit();
}
console.log(flipACoin(str));