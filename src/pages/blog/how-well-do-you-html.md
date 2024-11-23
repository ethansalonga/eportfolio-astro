---
layout: ../../layouts/PostLayout.astro
title: How Well Do You HTML?
description: Discover lesser-known HTML elements and their benefits for accessibility, usability, and maintainability. Enhance your web development skills with semantic tags like <cite>, <figcaption>, and more!
pubDate: 2024-11-23
lastModDate: 2024-11-23
author: Ethan Salonga
image:
    url: https://i.postimg.cc/d3n2KxbX/html-code.webp
    alt: HTML code for a portfolio website.
tags: [html, web development, seo, accessibility]
readTime: 12
preview: If you've been in the web development space at all, chances are you've seen the following boilerplate HTML code a dozen (or a thousand) times
---
*This blog post is aimed at developers with some experience with HTML. You should already know basic HTML syntax and be aware of the most common HTML elements such as the head, body, links, and headers.*  
<br>
If you've been in the web development space at all, chances are you've seen the following boilerplate HTML code a dozen (or a thousand) times:  
<br>
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
        
  </body>
</html>
```
<br>

The above code is so prevalent, these days if you're using Visual Studio Code, you can generate this boilerplate HTML by simply typing `!` using the [Emmet extension](https://code.visualstudio.com/docs/editor/emmet). In fact, there are many elements (also referred to as tags) frequently used by web developers that you'll see in almost every HTML document you come across:<br><br>

- `<h1> — <h6>`
- `<div>`
- `<p>`
- `<a>`
- `<img>`
- `<button>`
<br><br>

We all recognize these elements along with the rest of the usual suspects—the navs and lists and spans and footers. But what about the lesser known HTML elements? When was the last time you saw a creative work marked by a `<cite>` tag, or an image accompanied by a `<figcaption>` instead of a `<p>`? Do you know what a `<kbd>` or a `<dfn>` denotes? What's the difference between `<progress>` and `<meter>`? (I didn't even know `<meter>` existed before writing this post)  
<br>
## Why use less common elements?
<br>

While it may be tempting to just throw all of your content sections into a [`<div>` soup](https://www.chillybin.co/would-you-like-another-bowl-of-div-soup/), using lesser-known HTML elements and semantic elements in general can help serve specific purposes such as enhancing accessibility, usability, and clarity in a web development environment.
<br>
<br>
### Improved accessibility <br>

There are many elements that can help improve accessibility for your webpage. While [semantics aren't directly responsible for improving SEO rankings](https://seo.co/semantic-html/), accessibility remains an important consideration in the web development ecosystem. Accessibility helps promote inclusivity and improved usability for all, and is a significant factor in assessing metrics such as page speed. <br><br>

### Enhanced Usability <br>

Elements such as [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup) can be used to group options within `<select>` elements to provide better organization and enhanced clarity. A well-structured, thoughtfully developed feature is easier to use and feels better than one that is ambiguous, improving the overall user experience. <br><br>

### Standardization and Easier Maintenance

Simply put, the use of semantic elements at all just makes code more readable, intuitive, and fun for developers (if you enjoy coding). For example, consider the use of semantic elements from a purely aesthetic viewpoint by comparing the following two examples:<br><br>

```
<!-- Example 1 -->
<main>
  <section id="home">
    <h1>Welcome</h1>
  </section>
  <section id="about">
    <h2>About Us</h2>
  </section>
  <section id="contact">
    <h2>Contact</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <button type="submit">Submit</button>
    </form>
  </section>
</main>

<!-- Example 2 -->
<div class="main">
  <div class="section" id="home">
    <div class="title">Welcome</div>
  </div>
  <div class="section" id="about">
    <div class="subtitle">About Us</div>
  </div>
  <div class="section" id="contact">
    <div class="subtitle">Contact</div>
    <div class="form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <button type="submit">Submit</button>
    </div>
  </div>
</div>
```

<br>
I don't know about you, but I would much prefer to be working with the code from the first example.  
<br>
<br>

As a developer, I believe it's not only a social responsibility that we try to write code that is as clear and maintainable as possible, but also a necessity. We are meant to use semantic elements such as `<nav>` to describe a navbar or `<section>` to describe a section, and we do so almost ubiquitously as far as healthy codebases are concerned.
<br>
<br>

So why would we not use a `<samp>` instead of a `<p>` if the situation aptly called for it?
<br>
<br>

## What uncommon HTML elements exist?
<br>

![HTML code featuring a link that reads 'Sign up today'.](https://i.postimg.cc/CM4HDRRN/html-elements.webp)

<br>

While this post isn't meant to cover the use cases and nuances of every single HTML element out there, we will be discussing several elements I've found personally interesting, some of which may well be applicable to some of your projects. And if not, then maybe you'll simply learn something new that you didn't know yesterday!<br><br>

If you're looking for a complete reference of HTML elements, you can refer to the documentation from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) or [W3 Schools](https://www.w3schools.com/tags/).<br><br>

Now, let's take a look at some lesser used HTML elements and situations in which they may be pertinent:<br><br>

### **`<base>`** <br>
It's likely you've encountered most of the other elements that go in the `<head>` of a document, but what is a `<base>` element? The `<base>` element establishes the base URL for all relative URLs in a document, and there can only be one `<base>` element per document.
<br><br>
```
<head>
  <base href="https://example.com/">
</head>

<a href="blog.html">Link</a>
```
<br>

The above `<a>` tag's link will resolve to `https://example.com/blog.html`. Now you may have never used this element yourself and experienced no issues in its absence, and that's completely fine. The `<base>` element is certainly not essential for all projects, but it can be useful in managing relative links for larger and more complex applications.<br><br>

Consider the following questions about your project when deciding whether to include a `<base>` element in your metadata:<br><br>

- Is your project significantly large with deeply nested file structures?
- Does your project use a consistent directory structure?
- Are you often switching between environments (development, staging, production, etc.) where the base URL differs but relative paths remain the same?
- Are you embedding an HTML document in different contexts where the base URL might be ambiguous without a `<base>`?
<br>
<br>

### **`<address>`** <br>
An `<address>` element indicates contact information for a person, people, or for an organization. This element is self-explanatory and thus quite descriptive, but unfortunately it's not uncommon for developers to simply wrap their contact information in a `<p>` or `<div>`. Be more semantic and use `<address>` instead:<br><br>

```
<address>
  <a href="mailto:ethan@ethansalonga.dev">ethan@ethansalonga.dev</a>
  <a href="tel:+11593682471">+1 (159) 368-2471</a>
</address>
```
<br>

If you're including any of the following information on your site, consider wrapping the content in an `<address>` element:<br><br>

- Email address
- Phone number
- Physical address
- Contact URL
- Social media handle
- Geographic coordinates

<br>

Don't forget to include the name of the person, people, or organization to which the contact information refers!

<br>

### **`<hgroup>`** <br>
The `<hgroup>` element represents a heading and related content, grouping a single `<h1>-<h6>` element with one or more `<p>` elements. It can be used to semantically group headings together and clarify the document structure in cases where you have a heading accompanied by a subheading or other related secondary content.<br><br>

```
<hgroup>
  <h1>The Wonders of the Deep Sea</h1>
  <p>Exploring the mysteries beneath the waves</p>
</hgroup>
```

<br>

Interestingly enough, the `<hgroup>` element was once deprecated in HTML5.1 and at one point had been [removed from the HTML5 Living Standard specification](https://stackoverflow.com/questions/15808330/hgroup-element-removed-from-the-html5-specification-what-alternative-technique). However, at the time of this writing in November 2024 it is once again present across all major HTML documentation. Oh how the time flies by. <br><br>

### **`<figcaption>`** <br>
The `<figcaption>` element is, as its name suggests, a caption or legend describing the contents of its parent `<figure>` element, providing the `<figure>` an accessible description. Simply stick this element wherever you have a `<figure>` being described by some text. To demonstrate, let's take an example from the modal of this very portfolio:<br><br>

```
<figure class='modal-language'>
  <img
    class='w-full'
    src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png'
    alt='HTML icon'
  />
  <figcaption class='language-name'>HTML</figcaption>
</figure>
```

<br>

Those `<figcaptions>` used to be `<spans>`, but I updated them in the process of writing this post. Much more accessible. [Very mindful, very demure.](https://www.oklahoman.com/story/entertainment/2024/08/19/what-does-demure-mean-tiktok-trend-very-demure-slang-mindful-jools-lebron/74861746007/)<br><br>

### **`<cite>`** <br>
`<cite>` is used to mark up the title of a cited creative work. There are many different use cases for the `<cite>` element, but here are some common examples of works you might find yourself referencing from time to time:<br><br>

- Books
- Research papers
- Essays
- Poems
- Songs
- Websites
- Blog posts
- Social media posts

<br>

Just as if you were writing a research paper for school, make sure to properly cite your references—and mark them up semantically using the `<cite>` tag.<br><br>

```
<figure>
  <blockquote>
    <pre>
      In the bleak mid-winter
        Frosty wind made moan
      Earth stood hard as iron,
        Water like a stone;
      Snow had fallen, snow on snow,
        Snow on snow,
      In the bleak mid-winter
        Long ago.
    </pre>
  </blockquote>
  <figcaption>
    First stanza in 
    <cite>
      <a href="https://en.wikipedia.org/wiki/In_the_Bleak_Midwinter">
        In the Bleak Midwinter 
      </a>
    </cite>
    by Christina Rossetti.
  </figcaption>
</figure>
```

<br>

Don't recognize the `<pre>` tag? Read its documentation on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre).<br><br>

## A World of HTML Elements
<br>

![A NASA image of the earth's night from space.](https://i.postimg.cc/9Xx0ZjtK/nasa-world.webp)

<br>

I could write on and on about HTML elements. This next section was supposed to be about even more niche elements (like [`<kbd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd), [`<dfn>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn), [`<meter>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter), and [`<samp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)), but I felt that continuing on with less practical elements was out scope for this article. Not to mention the fact that as of the latest HTML5 specifications there are **around 140 standardized HTML elements**, I could be writing forever.<br><br>

There's a whole world of HTML elements out there.  Learning HTML is relatively easier compared to picking up CSS or a programming language like Python or JavaScript, so it's not uncommon for learners to stop at the very basics before moving on. But I believe it's worth it for web developers to dive a little deeper here and there and really explore the beautiful code that could be written with lesser known HTML elements. Let's take pride in our HTML!
<br>
<br>
If you've made it this far, thank you for viewing my portfolio and taking the time to read through this blog.
