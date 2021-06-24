# Terminal Learning

## [A Linux Command Line Primer](https://www.digitalocean.com/community/tutorials/a-linux-command-line-primer)

### Intro

- GUIs don't provide the greatest power over our machines
- GUIs aren't always as accessible as the could be
- CLI (command-line interface) can be used with your local or remote machine
- `$` at the end of prompt means you are logged in as a regular user
- `#` means elevated privileges (root user, considered super user or admin)
- `sudo` command gives you admin priviliges
- Be careful on local machine terminals as admin changes could be permanent
- A command is an instruction given by a user telling a computer what to do

### Directories

- `pwd` (present working directory), tells you where you are right now
- `home/sammy` is a user directory
- A root user would have the `/root` directory
- `mkdir` (make directory), creates directories
- `mkdir` is the command and the name of the folder we type after it is an argument

### Listing and Permissions

- `ls` (list) command lists out the files in a directory
- Flags for commands are written with a `-` and then letters which allows you to pass additional options and arguments to the command.
- For `ls` we can use the `-l` flag which is for "long listing format"
- This flag returns 2 lines, 1st is how many memory blocks for the directory and 2nd relates to permissions and other details
- The `-h` or `--human-readable` will give us a human readable format for the output
- Flags with one `-` are one letter options, `--` are options written out in words
- You can chain flags like this `-lh`
- Example output `drwxr-xr-x 2 sammy sammy 4.0K Jun 21 11:44 files`
  - Where the `d` is is the file type `d` is for directory and a `-` would be a non-directory file
  - `r` is for read, permission to read a file
  - `w` is for write, permission to modify contents
  - `x` is for execute, permission to run a file or access files within a directory
  - A `-` can replace any or all of these which indicates a lack of that permission
  - `rwx` are repeated 3 times
    - The first 3 times refer to the owners permissions
    - 2nd is the group permissions
    - 3rd is the permissions of any other group on the machine.
  - `2` is the number of links to the file
  - `sammy` is then repeated twice
    - 1st is the owner `sammy`
    - 2nd is the group `sammy`
  - `4.0K` is the memory allocated to the directory
  - `Jun 21 11:44` is the last modified date
  - The last part is the name of the file

### Navigation

- `cd` (change directory) allows you to move to other directories
- `cd /` will take you to the primary directory, the root
- Can use absolute paths to get to specific location from anywhere or use relative paths to navigate within the current directory
- Can use dot notation to navigate via relative paths
  - `.` stands for the current directory
  - `..` stands for the parent directory
- `cd ~` will take you to the home directory

### Creating and Modifying Files

- `.txt` files can be read on the command-line
- The `touch` command can be used to create or modify an exsisting file, you pass the name of the file as an argument
- The `echo` command is used to display strings of text in Linux but it can also be used to creare a new file with text in it or put text in an exsisting file by using the redirection operater `>` and putting the name of the file after that
- The `cat` command (for concatenate) can be used to show the contents of the passed file
- There are command-line text editors for modifying text like Vim, Emacs and nano.
- The `nano` command followed by the name of the file you want to edit will open it up in the nano commandline-editor
  - At the bottom of the terminal are some controls, exit is listed as `^X` but to do this you need to press `CTRL` and the `x` key
- The `mv` (move) command allows you to change the location of a file, the first argument passed to it is the file to be moved and the second is where you want to used it (location can be relative). An absolute path to the same location but with a different name can be used to rename the file
- `cp` (copy) command works similarly to `cp` but copies the file instead

### Autocomplete and History

- Commandlines allow you to autocomplete and reuse commands
- For example, you can autocomplete a file name by typing the first few letters and pressing `TAB`
- Pressing `UP` will cycle through previously used commands
- The `history` command will show you a list of all the commands you've used this session

### Web Files

- Using a command-line connected to the web allows you to do lots of stuff on the web
- `curl` (client URL) allows us to transfer data from the web to the command-line
  - `-O` flag lets us output text from `curl` to a file
  - `-o` lets you put a file name argument before the URL to output to a specific file or new file name

### Removing Files and Terminating Commands

- `rm` (remove) can be used to delete a file, this cannot be undone 😬
  - To remove a directory that is not empty you can use the `-r` (recursive) flag and then the directory to to remove it and the stuff inside
- `rmdir` (remove directory) can be used to delete whole directories
  - Doesn't work of directories that are not empty
- When you are finished with the terminal you, you can use the `exit` command to exit

## [An Introduction to the Linux Terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)

### The Shell

- The shell is a command-line interface that inteprests a user's commands
- Examples include Bourne shell (`sh`) and C shell (`csh`), each has their own features
- The Bourne-Again shell or `bash` is the default shell for most Linux distributions

### The Command Prompt

- `sammy@webapp:~$`
  - `sammy` is the username
  - `webapp` is the hostname
  - `~` is the current directory (`~` is the home directory)
  - `$` is the prompt symbol (`#` if logged in as `root`)

### Executing Commands

- An instance of a running command is called a process
- When a command is executed in the foregroud (the default), you must wait for the process to finish
- Almost everything in Linux is case sensitive

#### Without Arguments or Options

- Running a command without options will mean it runs with its default behaviour
- `cd` will return you to the home directory
- `ls` will print a list of the current directories files and directories
- `ip` will print a message telling you how to use it

#### With Arguments

- Many commands take arguments or parameters
- `cd` can be used with an argument that specifies where you want to go

#### With Options

- Most commands take options (or flags or switches)
- They are indicated with a `-` followed by a single letter
- Some start with `--` followed by a word
- `ls` with `-l` will print a long listing with extra info
- with `-a` will print all files including hidden ones
- `-l -a` can be shortened to `-la`
- Options and arguments can be combined

### Environment Variables

- Environment variables are named values that change how commands and processes are executed.
- When you log in, several of them will be set according to configs by default

#### View All Environment Variables

- `env` can be used to view all environment variables, look for the `PATH` entry
- The `PATH` environment variable is a list of directories where the shell will look for executable programs or scripts when a command is issued, means we don't have to give a full location for commands

#### View the Value of a Variable

- You can get a environment variable by putting a `$` before its name

#### Setting Environment Variables

- You can set an environment variable using this syntax `VAR=value`
- The original value will be replaced or if there wasn't that variable, a new one will be created
- Bash has `export` which exports a variable so that it will be inherited by a child process
- Setting environment variables with export only sets them for this session