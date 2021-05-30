# FileOrganizer
A File Organizer completely written in JavaScript


Dependencies: 
1. Node js

How to run this:
1. Clone this repository onto your system and cd into the folder
```

git clone https://github.com/RaghhavDTurki/FileOrganizer.git
cd FileOrganizer/

```
2. Inorder to make this command global on your system run,
```

npm link

```
This might require admin previlges on some OS's.


Commands:
1. Help
    Shows the list of commands and their syntax
```
FileUtil help
    List of all commands: 
        FileUtil tree "DirectoryPath"
        FileUtil organize "DirectoryPath"
        FileUtil help
```

2. Tree
    Takes in a path to a directory and shows the contents in a tree format
```
FileUtil tree "Directory Path"
```

3. Organize
    Takes in a path to a directory and creates a "organized_folder" and arranges all the content based on Category
    (Doesn't delete your original files!)
```
FileUtil organize "Directory Path"
```