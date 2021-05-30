let fs = require("fs");
let path = require("path");
const utility = require("../utility");
let types = utility.types;

function oragnizeFn(dirPath)
{
    // console.log("organize command implemented!");

    // 1. Input-> Directory Path
    let destPath;
    if(dirPath == undefined)
    {
        destPath = process.cwd();
        return;
    }
    else
    {
        let exist = fs.existsSync(dirPath);
        if(exist)
        {
            // 2. Create -> Organized Folder -> Directory
            destPath = path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath) == false)
            {
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log("Kindly enter a valid path!");
            return;
        }
    }
    organizeHelper(dirPath,destPath);
}



function organizeHelper(src,dest)
{
    // 3. Identify all types of files

    let childnames = fs.readdirSync(src);
    // for(let i = 0; i < childnames.length; i++)
    // {
    //     console.log(childnames[i]," ");
    // }
    for(let i = 0; i < childnames.length; i++)
    {
        let address = path.join(src,childnames[i]);
        let isFile = fs.lstatSync(address).isFile(); 
        // console.log(isFile);
        if(isFile)
        {
            // console.log(childnames[i]);
            let category = getCategory(childnames[i]);
            // console.log(childnames[i],"belong to -->",category);
            // 4. Copy/Cut that file into the organized directory inside its category
            sendFiles(address,dest, category);
        }
        else
        {
            if(childnames[i] != "organized_files")
            {
                // console.log(childnames[i]);
                let newPath = path.join(src,childnames[i]);
                organizeHelper(newPath,dest);
            }
        }
    }
    


}

function sendFiles(srcFilePath,dest,category)
{
    let categoryPath = path.join(dest,category);
    if(fs.existsSync(categoryPath) == false)
    {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    console.log(fileName,"Copied to ",category);

}


function getCategory(name)
{
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types)
    {
        let currTypeArray = types[type];
        for(let i = 0; i < currTypeArray.length; i++)
        {
            if(ext == currTypeArray[i])
            {
                return type;
            }
        }
    }
    // console.log(ext);
    return "other";
}
module.exports = {
    oragnizeKey : oragnizeFn
}