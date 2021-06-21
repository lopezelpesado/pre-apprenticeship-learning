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

