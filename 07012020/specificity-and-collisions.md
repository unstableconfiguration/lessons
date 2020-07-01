## Managing specificity and avoiding collisions
I checked my email for the first time in a couple weeks and read through what you said. I wanted to go into a bit of depth on this topic: 

```
The codecademy course as well as most commentary on questions on the forums state that you should avoid using IDs for css and use them primarily for js, to avoid specificity wars, and some other reasons that really didn't seem to be that big of a deal to me. But there are some dissenting opinions these days and some people are recommending using it for styling, if only to avoid using !important tags. 
```

I read up on some of people's reasonings for avoiding #id selectors. I think the issues are important enough to keep in mind, but I don't think avoiding #id selectors as a blanket rule is the best solution. The caveat to that is that the issues can become more pronounced and common on a large team working on a large project and sometimes you need simple and blunt rules.  

There's two issues that I saw that were compelling enough to be dealt with. 
* #id selectors represent maximum specificity and are hard to override without using undesirable !important tags. 
* #id selectors make it harder for you to rename your elements since you have to change the id values in your css as well as html/js. 

Instead of saying "don't use #id selectors for css", I'd instead suggest **only use #id selectors to target specific elements** as a more refined rule. 

Lets look at this in practice: 

As a site grows in complexity, you start wanting to split up your css into multiple files. When you do this, it is important to consider the intended scope of the files. These are two css files from my site. The first is a file for site-wide theming, and the second is css for a single page. 

Site-wide css:
https://github.com/unstableconfiguration/unstableconfiguration/blob/master/css/homerolled/site-theme.css

Page-specific css: 
https://github.com/unstableconfiguration/unstableconfiguration/blob/master/site/dungeons-dragons/battle-manager/battle-manager.css

One thing you will notice is that the site-theme.css barely uses #id selectors, whereas the battle-manager.css uses them almost exclusively. Where the site-theme.css uses them, it is still to target specific major elements on the page. If I wanted, I could add "body >" in front of them to make sure they were specifically targeting only the desired elements. So I won't have a #btnSubmit { ... } class in my site theme to style all submit buttons, I will instead use a .btn-submit { ... } class.  
With the battle-manager.css, there really shouldn't be any issue with using #id selectors. That css file is tightly coupled with the battle manager page. The files are loaded onto the page at the same time, and are stored in the same directory. So if I rename the ids, it is a lot more obvious and easy what css I need to change. Likewise I shouldn't have specificity issues since this css represents the priority ruleset anyways.