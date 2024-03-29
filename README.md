# Udacity Session Lead Resources

A repository to share useful resources with nanodegree students

### Free Web font resource

https://fonts.google.com/

Useful tools that I use in my dev environment
Install VSCode from https://code.visualstudio.com/download

    Recommended extensions for VSCode from https://code.visualstudio.com/docs/editor/extension-marketplace
    1. Prettier for code formatting
    2. Pylance (Python), usually installed by default
    3. Auto complete Tag
    4. Material Icon Theme, Monokai Pro, Atom Themes for VSCode

https://nodejs.org/en/ comes with npm or yarn as package managers

Install Python from python.org

Install git on your system: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Create an account on github.com and link your local git environment to it

Install Intellij Community Edition for Java programming: https://www.jetbrains.com/idea/download/

# CSS

https://css-tricks.com/

# HTML

https://developer.mozilla.org/en-US/docs/Web/HTML

https://www.youtube.com/watch?v=DPnqb74Smug (Learn HTML5 - full course with code samples)

https://www.w3.org

CSS Selector game:
https://flukeout.github.io/

# JavaScript Basic Data Types, Variables, Control Flow

https://dev.to/lydiahallie/javascript-visualized-hoisting-478h
https://developer.mozilla.org/en-US/docs/Web/JavaScript

# Function, Arrays, and Objects in JavaScript

https://developer.mozilla.org/en-US/docs/Web/JavaScript

# DOM Manipulation with JavaScript

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

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

### Windows Git shortcut command

````bat
    git add .
    git commit -m %1
    git push
    ```
````

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
