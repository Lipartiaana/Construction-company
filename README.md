# SolidBuild: Construction Company

### Tech Stack

- **HTML | CSS | JavaScript | SCSS**

## Project Overview

The **SolidBuild** website is a multi-page platform that showcases the capabilities and projects of a construction company specializing in building houses, apartments, and hotels. Each page offers unique information, enabling users to learn about the company, view a gallery of completed projects, read articles, and easily contact the company.

## Project Structure

### 📄 HTML Files:

- **index.html** – Homepage with general company information.
- **about.html** – Details the team and company values.
- **blog.html** – Blog page with articles on construction projects.
- **contact.html** – Contact form for inquiries.
- **gallery.html** – Gallery of completed project photos.

### 📁 Assets Folder

- Contains all image assets used on the website.

### 📁 Styles Folder

- SCSS files are stored here for modular styling and are compiled into a global CSS file.

### 📁 CSS Folder

- Contains the compiled CSS generated from SCSS files.

### 📁 JavaScript Folder

- **JavaScript files for interactive elements:**
  - **banner.js** – Counts and animates numerical stats.
  - **fullpost.js** – Generates a detailed view for blog posts.
  - **gallery.js** – Manages gallery photo modal functionality.
  - **modal.js** – Creates modals for various components.
  - **pagination.js** – Enables pagination for blog articles.
  - **post.js** – Generates blog posts on the blog page.
  - **script.js** – Fetches data from `data.json` to populate content.
  - **scroll-animation.js** – Adds animations as users scroll through the page.

---

## Main Pages

### 🏠 Homepage (index.html)

- Introduces the company and highlights key services and project samples.
- Displays project stats and milestones with animated counters.

### 💼 About Page (about.html)

- Details the company’s mission and team.

### 📖 Blog Page (blog.html)

- Features articles related to construction projects and case studies.
- Implements pagination for easy article navigation.

### 📷 Gallery Page (gallery.html)

- Contains a grid of project images.
- Offers a modal view for each image, allowing users to see project details up close.

### 📞 Contact Page (contact.html)

- Provides contact details and a form for user inquiries.

---

## Key Features

- **Dynamic Content Fetching:** `script.js` fetches blog and project data from `data.json`, simplifying updates.
- **Animated Counters:** `banner.js` dynamically animates homepage stats as the user scrolls.
- **Article Pagination:** The blog page uses `pagination.js` for efficient article navigation.
- **Gallery Modals:** Each gallery image can be viewed in detail using `gallery.js`.
- **Scroll-Based Animations:** `scroll-animation.js` adds smooth animations as users move through content.

This project is fully responsive and provides a seamless user experience. It has clean, organized design that emphasizes the company’s projects and expertise. With dynamic elements and SCSS for modular styling, the SolidBuild website is easy to maintain and visually engaging.
