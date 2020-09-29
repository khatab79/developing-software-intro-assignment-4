// import yargs to re-use code from someone else that has already
import yargs = require("yargs");

//import funtion
import { sayHi } from "./command/say-hello";

//to say hello
sayHi(yargs);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();
