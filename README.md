# Udacity Session Lead Resources

A repository to share useful resources with nanodegree students

# CSS 
https://css-tricks.com/

# HTML
https://developer.mozilla.org/en-US/docs/Web/HTML

https://www.youtube.com/watch?v=DPnqb74Smug (Learn HTML5 - full course with code samples)

https://www.w3.org 

CSS Selector game:
https://flukeout.github.io/

# Python
https://www.python.org
https://docs.microsoft.com/en-us/learn/modules/intro-to-python/
https://www.pythoncheatsheet.org/

# Git version management

https://git-scm.com/docs/gittutorial

# Custom function to shorten git commit commands

```bash
function gitpush(){
    git add .
    if [ "$1" != "" ]; then
        git commit -m "$1"
    else
        git commit -m "update added"
    fi
    git push
}
```
### Shell Scripting Resources
[Shell Scripting tutorial](https://www.shellscript.sh/functions.html)

[25:12 / 59:11
Shell Scripting Video Tutorial](https://www.youtube.com/watch?v=hwrnmQumtPw)
### Advanced bash scripting guide
[Advanced bash scripting guide](https://tldp.org/LDP/abs/abs-guide.pdf)

### Unix Permissions
 [Unix permissions - Human readable](https://mason.gmu.edu/~montecin/UNIXpermiss.htm)

 ### Managing file permissions on Unix-like systems
 [Managing file permissions on Unix-like systems](https://kb.iu.edu/d/abdb)

### Chmod Calculator
[Chmod Calculator](https://chmod-calculator.com/)

### Python Code linting in VSCode
[Python Code linting in VSCode](https://code.visualstudio.com/docs/python/linting)