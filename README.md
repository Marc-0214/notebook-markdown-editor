# The Notebook – Multi-File Markdown Editor

## 1. Project Choice
This project implements **The “Notebook” – Multi-File Markdown Editor**.  
It is a browser-based note-taking application that provides a three-panel interface consisting of a file list, a Markdown editor, and a live preview panel. The application allows users to create, edit, and manage multiple Markdown files, with all data stored locally in the browser.

---

## 2. Justification of Tools
- **HTML** was used to define the structure of the application and its three-panel layout.
- **CSS (Flexbox)** was used to implement a responsive and clean three-column interface with a modern, distraction-free design.
- **Vanilla JavaScript** was chosen to handle application logic such as file creation, switching, saving, and preview updates due to its simplicity and native browser support.
- **marked.js** was used to parse Markdown syntax and render it as HTML for real-time preview functionality.
- **localStorage** was used to persist Markdown files directly in the browser without requiring a backend or database.
- **PyCharm** was used as the primary development environment because of its strong frontend file management, syntax support, and integrated browser preview features.
- **ChatGPT (GPT-based model)** was used during development to assist with application planning, logic structuring, and prompt engineering.

---

## 3. High-Level Approach
The project follows a fully client-side approach. The application state is managed using JavaScript objects and persisted using the browser’s localStorage API.

A **chain-of-prompts strategy** was used during development rather than relying on a single prompt. Each prompt focused on a specific aspect of the application, such as layout design, Markdown rendering, file persistence, and user experience improvements. This iterative approach allowed the solution to be refined step by step.

---

## 4. Final Prompts
The final prompts used during development are documented in a copy-pastable format in the following file:


This file demonstrates the prompt-engineering process used to design and implement the application.

---

## 5. Instructions to Run the Project
1. Clone or download this repository.
2. Open the project folder in **PyCharm**.
3. Ensure the following files are present in the root directory:
   - `index.html`
   - `style.css`
   - `script.js`
4. Right-click `index.html` and select **Open in Browser**.
5. Click **+ New** to create a Markdown file.
6. Write Markdown in the editor panel and view the live preview in the right panel.
7. Refresh the browser to confirm that files persist using localStorage.

---

## 6. Challenges & Iterations
One challenge was managing multiple Markdown files while maintaining persistence across browser refreshes. This was addressed by iterating on prompts related to localStorage data structures and active file handling. Another challenge involved ensuring real-time Markdown preview updates without unnecessary re-rendering, which was resolved by refining event-handling logic and preview updates through prompt iteration.

---

## 7. Optional Deployment
The project can be deployed using **GitHub Pages** by enabling Pages in the repository settings and selecting the main branch as the source.
