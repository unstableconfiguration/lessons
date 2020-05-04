## Coding safely  
There's a lot that can be done while coding to reduce the number of bugs, or to mitigate their impact (in terms of how long it takes to fix them) when they happen. Some of this is just habits that can be built up, so we're going to cover a one of those now to start building up good habits.

#### Build, test, and commit frequently 
Today's useful habit is constantly checking your work as you do it, which can involve a couple of different things. 

** Building **: We can build our code to check it for major breaking errors. In browser .js, we don't really have a 'build' process, but our equivalent is to refresh the page we are developing and confirm we don't get any issues from the parser. 
** Testing **: You want to test your work as you add to it as well. Right now we're not doing automated tests, so for us testing is just manual testing, i.e. running the code in the browser and confirming it looks and behaves how we expect it. 
** Committing **: We also want to frequently commit our work to our branch. Think of committing code as being synonymous with saving it. If desired, we can also push the code when we commit, thus saving it to our remote server as an added layer of safety. This will be a better idea once we do part 2 of learning git and start using branches more. 

So how frequently should all this be done? Broadly speaking, several times an hour. More specifically, you should do this every time you do something that is testable. For example, each time you add a function, you want to test to see if it works. Save your file, build/load it, test it, and commit it if it works.  
The longer you go without testing your work, the more likely you're going to give yourself a headache when you finally fire it up. Everything you write has a chance of containing a mistake, and when you spend an hour writing 5 different things without stopping to test, you risk firing it up and having to fix multiple mistakes at once. Splitting it up into more discrete chunks lets us deal with issues one at a time, and it gives us less code to check to identify where an issue is.  
This pays more dividends when you work on more complex projects. As an extreme example, I've seen someone spend a whole day coding a module without testing their work. At the end of the day, it didn't work and they had multiple layers of bugs spread throughout hundreds of lines of code to work through. 

For building our character sheet, we have a couple distinct testable actions. 
* Adding the .html file and .js file. The test is to confirm they load without error. The .js file can contain a single .log statement, or maybe an empty 'yorim' object we can examine in the console. 
* Adding in properties. Depending on the complexity of the thing, this can be done a couple different ways, but in general I won't add in anything that executes code at this stage (the functions will be empty or contain placeholder .log statements). If the object has lots of properties, lets say over 20, then I may add them in 10 at a time or group them up and add them by group. 
* Adding in each function. I'll generally add and test each function individually. If I am doing complex functions (functions that call other functions), I'll usually start with the most basic ones and work my way up to the complex ones. 

#### Doing things quick  
If we're creating the habit of saving, building, testing, and committing, it is important that we be able to do this all very quickly. If, for example, our testing process takes 5 minutes to do, then we're going to be heavily discouraged from doing it multiple times an hour.  
Unless you create them for yourself, there's no hard rules for how long each step should take. My rule of thumb is that if any step of the process takes long enough that I am tempted to go do something else while it happens, it is too long. For example, if my build takes more than 30 seconds, I'm going to have a strong temptation to do something like check my email inbox in the meantime. That's going to result in a lot of lost time and focus.  
We don't need to worry about build or test speed for now. We'll likely learn more about builds when we're working with server side code and/or working with external libraries. We also won't need to worry about testing too much until we learn more about automated testing and working with QA. What we can do now though is think about how fast we can interact with our source control.  

To introduce Git, I started us out with github desktop because it is a stable product with a fairly simple UI. Though we are using Github as a product and an implementation of Git, Git is ultimately an open source protocol, meaning there are a lot of different products that use it. Similarly, there are multiple products you can use to access github, some of which may have more intuitive feeling interfaces than github desktop.  
Eventually, I want to play around with some other Git UI products to see if some of them feel particularly better or worse to me. But as it is, I actually don't use a UI at all for 90% of what I do in git, instead I use it through command prompt/console commands. 

Rather than use the default windows terminal, I use a program called ConEmu (console emulator) that is a bit more user friendly. When I open it up, it defaults me to my user folder c:\users\me

From there, I'll type in some stuff like: 
```
cd source\repos\lessons
git pull
```
To fetch latest and: 
``` 
git add . 
git commit -m "post lesson notes for 05-04-2020"
git pushv
```
To commit and push. 


The moral of the story isn't to immediatly start learning git console commands. They are useful, but frustrating to learn and you may not end up getting much out of them. The real lesson is to start building the habit of regularly committing and pushing your work as you do it and get familiar with it, to be aware of how smooth the process feels to you. As you get more comfortable, you might eventually try out some other methods that could speed up your workflow. 




