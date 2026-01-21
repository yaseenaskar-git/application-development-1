# week 2 notes 

Before getting started, I believe it is worth mentioning that the following topics will be discussed with relation to GitHub 

### Local Vs. Remote 
Local is your own device, and remote is GitHub's website. When you make changes to your repository locally via VS Code for example, they don't get automatically updated and synced. You have to perform certain commands on Git Bash to sync the local and remote version of your repository. The main reason why we have a local and remote version is for ease of use as some things "like creating this file and editing it" are much easier to do with local tools. Another reason is perceiving your local version as your workshop and your remote repository as the storefront where you deliver the final products. 

### Repo, Commit, Branch
Repo is short for Repository, and it is a page where you gather and display all files and data related to a certain project.

The data can include Commits, which are traces of the changes you made to this project. It mainly helps with organization and version control.

Finally, a Branch is a copy of your Repository (copy of your main branch). When working on one part of this big project, you create a copy to not mess up the main branch. Then you start working and editing in that branch rather than the main branch before you merge them when you are completely done. Other than version control, branches are helpful for teams who have members working on different parts of the project, as a result, branches help them stay organized instead of interfering with one another's code or accidentally editing the main branch.

### Staging area 
The staging area is where your edited files are (conceptually) before being committed to your repository. 

In the context of Git Bash (which is a tool used to interact with the staging area), if you change one file and directly commit it, it might seem like there is no such thing as a staging area. On the other hand, if you edit 10 files and only two are ready to commit, you command:

```cmd
git add file1```

```cmd
git add file2```

```cmd
git commit -m "added files 1 and 2"```

and the other 8 files that are not ready yet will stay safe as files one and two are staged and committed.

### Push and Pull
Push is when you send (push) your local changes into your remote repository to sync both versions. 

Pull is when you grab (pull) your remote changes into your local files to sync both versions.

### What .gitignore does
.gitignore is a file that makes git literally ignore the presence of some files when committing changes.

There are many reasons why you would want to ignore certain files. One of them is when they contain sensitive information that cannot be shared online in your repository.

### What README is for
README.md is a markdown file (.md being for markdown) which people see when they first open your repository. The file is mainly used to let people know the purpose of the repository, what project it contains, and steps to how people can launch this project on their device.
