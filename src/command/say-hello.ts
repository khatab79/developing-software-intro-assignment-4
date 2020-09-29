//import Arguments, Argv from yargs
import { Arguments, Argv } from "yargs";
//import calculateHouseRequirements from wallCalculator
import { sayHello } from "../hello";

import yargs = require("yargs");

export function sayHi(yargs: Argv): void {
    // build interactive command line by using yargs to pass user arguments
    yargs.command(
        //alice to apply yargs
        "say-hello",

        //--help flag for user
        "say hello to any name, take a string variable",

        //yargs parameters
        {
            //alice for user parsing
            name: {
                type: "string",
                description: "name to call",
                alias: "name",
            },
        },
        function (
            args: Arguments<{
                name: string;
            }>
        ) {
            sayHello(args.name);
        }
    );
}

//Have the help flag return help
yargs.help();

//Parse the arguments.
yargs.parse();
