let fs = require("fs");
let path = require("path");
function treeHelper(dirPath,indent)
{
    // Is File or Folder?
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true)
    {
        let Filename = path.basename(dirPath);
        console.log(indent + "├──" + Filename);
    }
    else
    {
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let children = fs.readdirSync(dirPath);
        for(let i = 0;i < children.length; i++)
        {
            let childPath = path.join(dirPath,children[i]);
            treeHelper(childPath,indent+"\t");
        }
    }
}

function treeFn(dirPath)
{
    let destPath;
    if(dirPath == undefined)
    {
        treeHelper(process.cwd(),"");
        return;
    }
    else
    {
        let exist = fs.existsSync(dirPath);
        if(exist)
        {
            treeHelper(dirPath,"");
        }
        else{
            console.log("Kindly enter a valid path!");
            return;
        }
    }

}
module.exports = {
    treeKey: treeFn
}