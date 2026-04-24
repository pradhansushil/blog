# The Dev Log- My Personal Blog

The Dev Log is my personal blog where I share the projects I work on, the challenges I face, and how I tackle them. I talk about fixing bugs, breaking down projects, and the practical lessons I learn while diving into frontend development. I also explore how I use AI as a tool in my journey. It’s like a behind-the-scenes peek at my workflow, showing how I deal with problems, debug stuff, and keep getting better as a developer.

**Live demo:** https://pradhansushil.github.io/blog/

---

## Table of Contents

- [Features](#features)
- [Site Architecture](#site-architecture)
- [Tech Stack](#tech-stack)
- [Developer Workflow & Standards](#developer-workflow--standards)
- [Challenges & Solutions](#challenges--solutions)
- [Installation](#installation)

---

## Features

- **Project write-ups:** Each post covers what I built, why I decided to develop it, the obstacles I ran into, solutions I came up with, and lessons I picked up along the way.
- **Dev origin story:** A dedicated post on how I got started in frontend development.
- **Ongoing updates:** Add new posts whenever I finsih a project or improve my skills. This way, the blog really shows how I'm progressing over time.

## Site Architecture

This is a static blog where the browser loads `index.html` as the landing page, and individual posts are simple HTML files under `posts/`. The `archive/` directory contains `index.html`, which serves as the master list of all posts, while `styles.css` handles global styling.

---

### File Structure

```text
blog/
├── index.html          # Landing page — intro and latest posts
├── styles.css          # Global styles for the entire site
├── archive/
│   └── index.html      # All Posts page — full archive of every post
├── posts/
│   ├── building-my-blog.html
│   ├── how-i-found-my-path.html
│   ├── my-first-ai-landing-page.html
│   ├── my-first-deployment.html
│   ├── post-continuation.html
│   └── pump-and-iron.html
├── .gitignore
└── README.md
```

---

## Tech Stack

- **HTML5** — Semantic markup and accessibility best practices.
- **CSS3** — Flexbox, Grid, and Custom Properties (variables).
- **GitHub Pages** — Static hosting.

---

## Developer Workflow & Standards

### My Coding Approach

I use AI as a mentor to help me understand logic under the hood and not just copy code. I want to deeply understand every implementation — from complex CSS layouts to Git workflows — so I can explain, debug, and maintain everything I build.

### Version Control & Documentation

- **Conventional Commits** — I follow the [Conventional Commits](https://www.conventionalcommits.org/) spec to keep project history clean, structured, and readable.

### Coding Standards

- **Semantic HTML** — I use proper HTML5 elements to provide structure and meaning, making it accessible.
- **Modern CSS** — I use CSS custom properties for a uniform design system and Flexbox and CSS Grid for responsive layouts.
- **Desktop-First Design** — I set base styles for large displays and then use `max-width` media queries for a smooth, responsive experience on smaller devices.

---

## Challenges & Solutions

### Run npm run build after creating submodule

- **Problem:** I added and pushed the Git submodule, then ran `npm run build`, so it ended up being two separate pushes for a single deployment.

The /dist folder wasn’t there the first time I pushed the submodule. After running the build, I had to commit and push the newly generated /dist folder in a second push.

- **Fix:** Next time, I’ll build the project first so the `/dist` folder is already there, then create and push the submodule. That’s one clean push, all at once.

### Footer did not stay at bottom of page

- **Problem:** On shorter pages, the footer showed up halfway up the screen instead of staying at the bottom.

- **Cause:** The `<html>` and `<body>` elements didn’t have `height: 100%`, so the page didn’t take up the full viewport height.

- **Fix:** Set `height: 100%` on both `html` and `body`, then use Flexbox so the main content stretches and naturally pushes the footer to the bottom.

### Blog Cards Didn't Align at the Top

- **Problem:** Two blog cards in the same row didn’t align at the top — one sat slightly lower than the other.

- **Cause:** CSS Grid doesn’t automatically make items in the same row equal height, which led to the misalignment.

- **Fix:** I learned that equal heights are easier with Flexbox. I kept Grid for its responsiveness since the misalignment was minor, but now I know which tool to use depending on the situation.

---

## Installation

To run The Dev Log locally, follow these steps.

### Prerequisites

No installation required. Just a modern web browser and optionally Git.

### Steps

You have two options.

**Option 1:**

1. Clone the repository:
   `git clone https://github.com/pradhansushil/blog.git`
2. Navigate into the project folder: `cd blog`

**Option 2:**

1. Go to the [repository](https://github.com/pradhansushil/blog)
2. Click the green "Code" button and select "Download ZIP"
3. Extract the downloaded folder
4. Open index.html in your browser

---
