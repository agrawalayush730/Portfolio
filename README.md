# Ayush Agrawal Portfolio

A professional, high-performance portfolio website for AI Engineer Ayush Agrawal. The application features a "Dark Mode" Cyber-Professional design built with React, TypeScript, and Tailwind CSS.

## 🚀 How to Run Locally

This project uses React with TypeScript (`.tsx`). To run it locally, you need a build environment to compile the code. We recommend using **Vite** for the best experience.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 16 or higher)
*   npm (included with Node.js)

### Quick Start Guide

Follow these steps to get the project running on your local machine using the existing file structure.

#### 1. Initialize Configuration Files

Create a `package.json` file in the root directory to manage dependencies:

```json
{
  "name": "ayush-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```

Create a `vite.config.ts` file in the root directory:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

#### 2. Update index.html

Vite requires an entry point script to load the React application. Open `index.html` and add the following line inside the `<body>` tag (before the closing `</body>`):

```html
<script type="module" src="/index.tsx"></script>
```

#### 3. Install & Run

Open your terminal in the project folder and run the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

You can now view the portfolio at `http://localhost:5173`.

## 🛠 Tech Stack

*   **React:** UI Library
*   **TypeScript:** Type safety and developer experience
*   **Tailwind CSS:** Styling (loaded via CDN in `index.html`)
*   **Lucide React:** Iconography

## 📂 Project Structure

*   `components/`: Contains all React components (Hero, Experience, Projects, etc.)
*   `App.tsx`: Main application layout
*   `index.tsx`: Application entry point
*   `index.html`: Main HTML template
*   `types.ts`: TypeScript interfaces for data models
