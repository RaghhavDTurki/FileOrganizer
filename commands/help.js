function helpFn()
{
    console.log(`
    List of all commands: 
        FileUtil tree "DirectoryPath"
        FileUtil organize "DirectoryPath"
        FileUtil help
    
    `);
}
module.exports = {
    helpKey: helpFn
}