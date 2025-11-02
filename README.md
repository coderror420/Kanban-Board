# Kanban Board Component

A modern, responsive **Kanban Board** built with **React**, **TypeScript**, **Tailwind CSS**, and **Storybook (Vite Builder)** — designed for seamless drag-and-drop task management and reusable UI documentation.

---

## Live Storybook

🔗 [View Deployed Storybook](https://your-storybook-url.com)  
_(Replace this link with your actual deployed Storybook URL)_

---

## Features

- **Drag-and-drop tasks** between columns  
- **Task creation and editing** with real-time updates  
- **Responsive layout** using TailwindCSS  
- **Accessible controls** with keyboard support  
- **Interactive documentation** via Storybook Docs & MDX  
- **Scalable architecture** for future extensions (notes, reminders, etc.)

---

## Installation

```
# Clone the repository
git clone https://github.com/yourusername/kanban-board.git
cd kanban-board

# Install dependencies
npm install

# Run Storybook
npm run storybook
```
# Project Structure
```
src/
 ├── components/
 │    └── kanbanboard/
 │         ├── KanbanBoard.tsx          # Main Kanban Board component
 │         ├── KanbanCard.tsx           # Individual task card component
 │         ├── KanbanColumn.tsx         # Column container
 │         ├── KanbanBoard.stories.tsx  # Storybook stories (CSF format)
 │         └── kanbanOverview.docs.mdx  # Storybook Docs page
 │
 ├── styles/
 │    └── index.css                     # Tailwind CSS imports
 │
 ├── utils/
 │    └── dragUtils.ts                  # Helper for drag-and-drop logic
 │
 └── main.tsx / App.tsx                 # App entry points
```