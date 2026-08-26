# Git & GitHub Guide

This guide covers the basic Git workflow for the Store Kiosk project. You can use either **Git Bash** or **VS Code**.

---

## 1. First-Time Setup

Install:

* [Git](https://git-scm.com/)
* [VS Code](https://code.visualstudio.com/)

### Git Bash

Configure your Git name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 2. Get the Project

### Git Bash

Clone the repository:

```bash
git clone [https://github.com/Victor528-hub/255-Group-Project.git](https://github.com/Victor528-hub/255-Group-Project.git)
cd <REPOSITORY_NAME>
```

### Git remoting commands

git remote add origin "[https://github.com/Victor528-hub/255-Group-Project.git](https://github.com/Victor528-hub/255-Group-Project.git)"
git remote -v

### VS Code

1. Open VS Code.
2. Press `Ctrl + Shift + P`.
3. Select **Git: Clone**.
4. Enter the repository URL.
5. Choose where to save the project.
6. Open the project.

---

## 3. Create a Branch

**Do not normally work directly on `main`.**

### Git Bash

```bash
git checkout main
git pull origin main
git checkout -b feature/my-feature
```

Example:

```bash
git checkout -b feature/product-search
```

### VS Code

Click the branch name in the bottom-left corner → **Create New Branch**.

Use a descriptive name such as:

```text
feature/product-search
```

---

## 4. Make Your Changes

Make your changes in VS Code.

### Git Bash

Check your changes:

```bash
git status
```

View the changes:

```bash
git diff
```

### VS Code

Open the **Source Control** panel to see your changed files.

---

## 5. Commit Your Changes

### Git Bash

```bash
git add .
git commit -m "Add product search"
```

### VS Code

1. Open **Source Control**.
2. Review your changes.
3. Click `+` to stage your files.
4. Enter a commit message.
5. Click **Commit**.

Keep commit messages short and descriptive.

---

## 6. Push to GitHub

### Git Bash

First push:

```bash
git push -u origin feature/my-feature
```

After that:

```bash
git push
```

### VS Code

Select **Publish Branch** or **Sync Changes** from the Source Control panel.

---

## 7. Create a Pull Request

After pushing your branch:

1. Open the project on GitHub.
2. Select **Compare & pull request**.
3. Make sure the destination is `main`.
4. Add a title and short description.
5. Request a review.
6. Create the Pull Request.

After approval, the Pull Request can be merged into `main`.

---

## 8. Start Your Next Task

After your Pull Request is merged:

```bash
git checkout main
git pull origin main
git checkout -b feature/my-next-feature
```

Or use the branch and Source Control menus in VS Code.

---

## Recommended Workflow

```text
Update main → Create branch → Make changes → Commit → Push → Pull Request → Review → Merge
```

> **Tip:** If you're unsure about a Git command, ask before running commands that could delete or overwrite work.
