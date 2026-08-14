# Git & GitHub Guide
This guide explains the basic Git and GitHub workflow that team members should follow while working on the Store Kiosk Project
---
## Before Starting Work

Before making changes to the project, make sure you have the most recent version of the repository
Open the project in Visual Studio Code
Open the terminal and run:

```bash
git pull
```
This downloads the latest changes from GitHub.
---
## Creating a Branch

Team members should create a separate branch when working on a new feature, task, or project document.

To create a new branch, use:
```bash
git checkout -b branch-name
```

For example:

```bash
git checkout -b ceiling-calculator
```
Other branch example:

```text
wall-calculator
floor-tile-calculator
update-requirements
sprint-1-documentation
```

Branch names should be short and clearly describe the work being completed.

---

## Project Folders

The project is organized into two main areas:

### Coding

The 'Coding/' folder contains the files used to build the Store Kiosk application

Example:

```text
Coding/
|--- css/
|--- js/
|___ tests/
```

### Documents

The `Documents/` folder contains project planning, requirements, Scrum documentation, meeting notes, and other team resources.

Example:

```text
Documents/
|--- Git-Github-Guide.md
|--- Scrum-Team.md
|--- Planning/
|--- Requirements/
|--- Sprints/
|___ Meeting-Notes/
```

---

## Working on an Assigned Task

Work should be completed in the appropriate project folder.
Programming work should be completed inside:

```text
Coding/
```

Planning and Scrum documentation should be completed inside:

```text
Documents/
```

Save all changes before preparing them for a Git commit.

---
## Checking Your Changes

Before committing your work, use:

```bash 
git status
```

This command shows which files have been created, changed, or deleted.
Review the files before continuing

---

## Adding Changes

To prepare all changed files for a commit, run:

```bash 
git add.
```

After adding the files, you can run:

```bash
git status
```

again to verify which files will be included in the commit.

---

## Committing Changes

After adding your changes, create a commit.

Use:

```bash
git commit -m "Description of changes"
```

For example:

```bash
git commit -m "Add ceiling paint calculator"
```

Other examples:

```bash
git commit -m "add wall calculator requirements"
git commit -m "Update Sprint 1 planning"
git commit -m "Fix floor tile calculator"
```

Commit messages should breifly explain what was changed.

---

## Pushing Changes to GitHub

After committing your work, push your branch to GitHub.

For the first push of a new branch, use:

```bash
git push -u origin branch-name
```

For example:

```bash
git push -u origin ceiling-calculator
```
After the branch has already been connected to GitHub, future changes can normally be pushed using:

```bash
git push
```

---

## Creating a Pull Request

After pushing your branch to GitHub:

1. Open the project repository on GitHub.
2. Select your branch
3. Select **Compare & pull request**.
4. Enter a description of the work completed.
5. Create the pull request.
6. All the team to review the changes.
7. Merge the pull request after the changes have been approved.

---

## Returning to the Main Brnach

After your work has been merged, return to the main branch.

Run:

```bash
git checkout main
```

Then update your local copy:
```bash 
git pull
```

This makes sure your computer has the newest version of the project.

---

## Recommended Git Workflow

The recommended workflow for the project is:

```text 
Switch to Main
        ↓
Pull Latest Changes
        ↓
Create New Branch
        ↓
Complete Assigned Task
        ↓
Test Changes
        ↓
Git Add
        ↓
Git Commit
        ↓
Git Push
        ↓
Pull Request
        ↓
Team Review
        ↓
Merge into Main
        ↓
Switch Back to Main
        ↓
Git Pull
```

---

## Common Git Commands
|  Command                     |               Purpose                |
|------------------------------|--------------------------------------|
|         'git status'         |           Shows changed files        |
|          'git pull'          | Downloads the latest project changes |
|'git checkout -b branch-name' | Creates and switches to a new branch |
|       'git checkout main'    |     Returns to the main branch       |
|           'git add .'        |  Prepares changed files for a commit |
|    'git commit -m "message"  |   Saves a version of your changes    |
|         'git push'           |  Uploads committed changes to GitHub |
|        'git branch'          |       Shows available branches       |

---

## Team Guidelines

- Always pull the latest changes before beginning new work.
- Use a separate branch for new features or major task.
- Avoid making changes directly to the 'main' branch when possible.
- Use clear branch names.
- Use clear commit messages.
- Test programming changes before creating a pull request.
- Review your files before committing. 
- Do not delete or overwrite another team member's work without discussing it first.
- Communicate with the team when merge conflicts or Git problems occur.
- Keep project documentation updates as work is completed.

---

## Merge Conflicts

A merge conflict may happen when two members changes the same part of a file.

If a merge conflict occurs:

1. Do not immediately delete either version.
2. Review both sets of changes.
3. Communicate with the team member involved.
4. Decide which changes should remain.
5. Resolve the conflict in Visual Studio Code.
6. Test the project after resolving the conflict.
7. Commit the resolved version.

---

## Project Folder Reference 

```text
255-Group-Project/
|
|--- Coding/
|    |---css/
|    |---js/
|    |___tests/
|
|--- Documents/
|    |---Git-GitHub-Guide.md
|    |---Scrum-Team.md
|    |
|    |---Planning/
|    |   |---User-Stories.md
|    |   |___Product-Backlog.md
|    |   
|    |---Requirements/
|    |   |___Requirements.md
|    |
|    |---Sprints/
|    |   |---Sprint-1/
|    |   |---Sprint-2/
|    |   |---Sprint-3/
|    |   |---Sprint-4/
|    |   |---Sprint-5/
|    |   |---Sprint-6/
|    |   |
|    |___Meeting-Notes/
|
|___README.md

```

---

## Getting Help

If a team member is unsure about a GitHub command, they should ask another team member before making changes that could affecct the repository.

When possible, avoid using unfamiliar Git commands without first understanding what they will change. 
