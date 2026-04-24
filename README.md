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
