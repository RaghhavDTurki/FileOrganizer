#!/usr/bin/env node
const { send } = require("process");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");


let inputcommand = process.argv.slice(2);

// node main.js tree "DirectoryPath"
// node main.js organize "DirectoryPath"
// node main.js help



let command = inputcommand[0];
switch(command)
{
    case "tree":
        treeObj.treeKey(inputcommand[1]);
        break;
    case "organize":
        organizeObj.oragnizeKey(inputcommand[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please input a valid command!");
        break;
}
