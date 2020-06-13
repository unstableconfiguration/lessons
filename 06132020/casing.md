## Casing
How the heck do we do our variables. Which letters should be uppercase or lowercase?  Should we be long and descriptive or terse names?

Some of this is at least somewhat determined by the standards of the language we are using. Some of it is just stylistic choices we have to make within our project. Here we're going to talk a bit about casing.  

## Casing:
These are the three most common casing conventions off the top of my head. 

* **PascalCase** The first letter of every word in the name is capitalized.  
* **camelCase** The first word is lowercase, and every subsequent word has its first letter capitalized. 
* **snake_case** All words are lowercase, but separated with underscores. 

In general, you want to have something that visually separates the words in your names. fulllowercase or FULLUPPERCASE are generally regarded as being harder to read. Whether it is because of eye strain or extra focus, any extra difficulty in reading code should be avoided as it unnecessarily adds to the difficulty of reading, writing, and maintaining it.  

Over time I've liked different casing conventions more than others. When I program in C# more, I tend to favor PascalCase. I've never really liked camelCase. For about a year I was really into snake_case.  

The language you use sometimes has [opinions](https://en.wikipedia.org/wiki/Naming_convention_(programming)) on which you should use. In general, consistency is good. Consistency within a project is essential, but it is also good to have consistency with other projects written in the same language. For about a year I was doing snake_case in my .js, but I've since started converting all that back to idiomatic javascript.

#### What about file names? folder names?
To my knowledge, there is currently no standards for these. In the past, I haven't given it much thought, and only in the last few months have been developing an opinion on the matter. Looking just at this repository, I see 3 competing conventions that I used without thinking.  
Here are some things to take into consideration.  

The windows file system is not case-sensitive, but the linux file system is (I think). This can cause issues because things can end up breaking depending on which system a program or server is running on. Because of this, we should write our code assuming our file system is case-sensitive.  
Sometimes you need to access files via a URL. When doing this, some special characters don't always translate cleanly. As an example, spaces can be awkward in browser urls. 

For a website, I am currently favoring kebab-case, which is like snake_case but with a hyphen. Personally I think it looks better, but I've seen it gaining popularity elsewhere so there is a possibility that underscores cause issues with some servers.  

#### html? css?
There's no standards here too. I've been favoring kebab-case for css classes recently. I've been waffling on the 'id' values of HTML elements, switching between camelCase to be consistent with javascript, or kebab-case to be consistent with my css.  


