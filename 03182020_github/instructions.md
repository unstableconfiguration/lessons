
## 03-18-2020: Using github
I was going to wait a bit before introducing new tools, but since email is proving clunky for sending 
files back and forth, lets have this lesson be about using source control. Some of this stuff takes a 
bit to sink in, so we're going to stick to the basics and let it become more familiar over time. 

### Source Control / Version Control 
Source control is vital to development, especially as a professional. Source control provides us with 
a place to store our code, and tools to sync up with it so that we don't end up with very different 
versions of it on each of our computers. It also proves safety against local failures so that we aren't
one crash away from losing everything.

We'll be using [Github](https://www.github.com) for our source control since it is free and heavily 
used. Specifically we'll use my github account [unstableconfiguration](https://www.github.com/unstableconfiguration), which I'm adding a 'lessons' repository to. 

We'll interact with it using [Github Desktop](https://desktop.github.com/) for now since it is 
easy to set up and use.  

#### Setup: 
* Download and install [Github Desktop](https://desktop.github.com/)  
* Create an account on [Github](https://www.github.com)
* Open github desktop and select 'clone a repository from the internet'
    * For the URL: https://github.com/unstableconfiguration/lessons.git
    * For the Local Path: c:\users\{username}\source\lessons
At this point, it should go ahead and download everything from there to your HD. 

#### Getting Latest: 
Before ever making any changes, you want to make sure you are up-to-date. It is good to build the 
general habit of doing this before you start working and before you push your code. 
* Open Github Desktop
* Select the lessons repository
* Either:
    * Click the 'Fetch Origin' button
    * Or from the top menu select Repository -> Pull

#### Making Changes: 
Any change you  make inside the source\lessons folder will be automatically tracked and Github Desktop 
will show you which files have been modified. When you are finished making changes, follow these steps: 
* Enter a description of what changes you are making. The description is the textbox above the 'commit to master' button. Try to keep it short but not nonsensical. 
* Press commit to master. This finalizes the changes on your computer
* Press push origin. This sends the changes to github. I will probably have to give you permissions to make changes once you have your github account set up. 

#### This week's task: 
Create a github account. Download and set up github desktop. Find the 03182020_github folder in the lessons repository. Add a folder called 'micah' and, in that, add a file called 'done.txt'. Commit and push the changes so that the folder and file are visible from https://www.github.com/unstableconfiguration/lessons/