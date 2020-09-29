import yargs = require("yargs");


import { argv } from "yargs";

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
    function (args) {
    
        console.log("Hello",argv.name);
    }
);

//Have the help flag return help
yargs.help();

//Parse the arguments.
yargs.parse();
