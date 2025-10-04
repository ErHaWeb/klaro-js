# Updating `typo3-patches` Branch

Minimal steps to rebase our `typo3-patches` branch on the latest upstream changes:

**Sync master with upstream:**
```bash
git checkout master
git fetch upstream --tags
git reset --hard upstream/master
git push origin master --force-with-lease
```

**Rebase patch branch:**
```bash
git checkout typo3-patches
git rebase master
```
**resolve conflicts if needed: git add <file> && git rebase --continue:**
```bash
git push origin typo3-patches --force-with-lease
```
