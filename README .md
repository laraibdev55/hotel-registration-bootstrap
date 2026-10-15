PABW - Web-Based Application Development
Coursework repository for Web-Based Application Development.

Meeting 3: Hotel Stay & Accommodation Profile Page
Topic: Hotel stay options and guest registration
Title: Hotel Stay & Accommodation
Description: A profile page displaying available hotel room types, pricing, and a registration form for guest stays.
Navigation Links: Room Options, Registration Form, About Us
Two Main Sections: Available Room Types, Hotel Registration
Table Columns: Room Type, Capacity, Price per Night
Form Columns: Full Name, Email Address, Phone Number, Check-in Date, Check-out Date
Image: hotel.jpg
Checklist & Self-Assessment
 Validated semantic HTML5 structure (<header>, <nav>, <main>, <footer>, <section>)
 Accessibility features implemented (single <h1>, proper heading hierarchy, alt text, loading="lazy")
 Data table formatted with <caption>, <thead>, <tbody>, and th scope
 Registration form built with explicit <label for="..."> and HTML validation (type, required)
AI Disclosure
AI was used as a thought partner to review HTML5 semantic structure, verify form validation logic, and assist with document layout checks. All HTML markup, table data, and form attributes were implemented directly by me.
MEETING-8
# Kawaii Hotel Registration System

A responsive, interactive web application built with HTML, CSS (Bootstrap), and JavaScript. This application allows users to view hotel rooms, filter available rooms dynamically without page reloads, and submit contact requests with client-side form validation.
## 📁 Repository Structure

```text
├── css/
│   ├── bootstrap.min.css
│   └── Hotel.jpg.webp
├── js/
│   ├── app.js       # Room data array and application initialization
│   └── dom.js       # DOM rendering, event delegation, and form validation
├── profile.html     # Main application UI
└── README.md        # Project documentation & disclosuresFeatures & Functionality
Data-Driven Rendering: Room cards are dynamically built and rendered using JavaScript (createElement and textContent).

Container Clearing: The parent element (#list) is cleared on every render using container.textContent = "" to prevent duplicate cards.

Event Delegation: A single click listener is attached to the #filter container, using event.target.closest("button") to handle all category filters efficiently.

Safe DOM Manipulation: All user-facing strings are set strictly via textContent to prevent Cross-Site Scripting (XSS) vulnerabilities.

Form Validation: Client-side validation stops full-page reloads using event.preventDefault() and validates inputs before submission.

 AI Disclosure & Development Summary
Current Assignment (Meeting 9 / Worksheet P9 - DOM, Events, and Interactivity)
AI Assistance:

Debugged null selector errors by synchronizing element IDs (#list, #filter, #empty-msg, #contact-form) across profile.html and js/dom.js.

Guidance on implementing event delegation logic on the #filter parent container.

Formulating step-by-step Git commands to fix nested folder paths (pabw/) and push dom.js to GitHub.

Self-Completed Work:

Wrote project HTML layout (profile.html) and styling integrations.

Structured JavaScript module imports and core rendering logic (buildCard, render).

Completed Worksheet P9 manual answers, DOM Quick Reference table, and self-assessment rubrics.
