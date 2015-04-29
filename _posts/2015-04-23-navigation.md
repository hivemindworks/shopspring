---
layout: post
title:  "Navigation Work: header/footer"
date:   2015-04-23 19:18:45
categories: jekyll update
---

I began work by reviewing the PSDs Eli had been working on, and cross referencing them with the [site map document](https://drive.google.com/file/d/0BwNoUKizWBdnTG50SzB2MVhQWDg/view) Lisa shared with me.


I wanted to:

1. Determine which links would appear in both the signed in and signed out views
2. Make/test assumptions on which links are more heirarchically important

---

I started by familiarizing myself with the site map and deciding which links/pages were most heirachical. Displaying every endpoint in the header would be a poor solution, so I narrowed the scope to the following:

## Primary 
1. Shop
2. For Brands
3. About

## Secondary
4. Blog
5. Developers
6. Help

I imagine that +90% of visitors will be users/customers/brands, which created the framework to choose the primary links. The secondary links are the ones I thought deserved a spot in the header, but would likely be used infrequently (If you have any analytics data on your footer links usage, that might be helpful). 

I also think changing the Technology link/page to 'Developers' is strategic. Technology seems limiting and apersonal, whereas 'Developers' is directed at a group of individuals and more clearly can contain a broad set of content.

---

I then familiarized myself with Eli's existing work. Below is Eli's header, which organizes the ways you can narrow your shopping experience on the left, with app functionalities (account, favorites, search) on the left. 

![eli's header]({{ site.url }}/img/headerSignedIn.png)

In my first pass, I maintained the layout that Eli set in his mockups, with navigation links on the left and actionable elements on the right. In the site map document I saw that the 'shop' elements were out of scope, but I chose to show what the design should show once these elements are added.

![first pass]({{ site.url }}/img/headerSignedOut.png)

I tested this design on multiple backgrounds as well:

![dark]({{ site.url }}/img/headerDark.png)
![dark]({{ site.url }}/img/headerBlue.png)
![dark]({{ site.url }}/img/headerImg.png)

I still want to put more time into the button execution. I'm also interested in your thoughts on how I've chosen and organized the menu options.

---

With the first take at the main navigation's execution completed, I turned my attention to the secondary navigation.

I first wanted to experiment with using dropdowns as the secondary navigational elements.

![dropdown]({{ site.url }}/img/dropdown1.png)
![dropdown]({{ site.url }}/img/dropdown4.png)

While making these, I realized that they weren't the best solutions. Since 'About' would have its own endpoint, a user would either need to double click (click to instantiate the dropdown, click to go to /about), or hover then click. Neither of these is ideal and I don't think that surfacing the secondary nav in the header is very valuable. These links should always be present in the footer.

With that in mind, I worked on excuting a secondary nav that would exist on the page.

![2nd]({{ site.url }}/img/secondNav.png)

I could use [midnight.js](https://aerolab.github.io/midnight.js/) to make sure that the links were visible, even without a background color/container.

---

I also began work on the footer

![footer]({{ site.url }}/img/footerLineHeight.png)

---

Here is [my progress on the working version]({{ site.url }}/iterations/shopspring.html), which includes work standardizing the scss. The code can be found [on github](https://github.com/hivemindworks/shopspring). Let me know if you'd like me to make this repo private.

With the work on this started, I'll be able to iterate more and more quickly. More importantly I can get started with creative coding (adding ['finger' elements](http://dvncan.com/work/2014/06/01/news-app.html) to springs web experience).
