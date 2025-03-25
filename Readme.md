# READMEGen v1

## 1. Overview

This project is a React application built with TypeScript, Vite, and Tailwind CSS, designed to generate README files for GitHub repositories.  It leverages an external API (indicated by `import.meta.env.VITE_API_URL`) to perform the README generation, likely based on analysis of the provided repository name. The application includes a user interface with components for inputting repository details, previewing the generated README, and downloading or copying the result.  The UI features a dark mode toggle and utilizes 3D background effects with the `vanta` library.

Refer https://github.com/Dhruv-80/readmegen-backend for backend.


<img width="1440" alt="Screenshot 2025-03-25 at 8 41 00 PM" src="https://github.com/user-attachments/assets/d912622e-fd07-4078-810e-b520f380fd3b" />

<img width="1440" alt="Screenshot 2025-03-25 at 8 40 28 PM" src="https://github.com/user-attachments/assets/0d76a97e-15de-48af-aef1-0505868303ce" />


## 2. Project Structure

The project uses a standard React application structure. Key directories and files include:

* **`src/`**: Contains the application's source code.
    * **`components/`**: Houses reusable UI components.  This includes components for navigation (`Navbar`), different application views (`Landing`, `About`, `Home`), README preview and controls (`ReadmePreview`, `ReadmeControls`), and basic UI elements (`Button`, `Card`).
    * **`utils/`**: Contains utility functions, notably `fileUtils.ts` (likely for file download functionality).
    * **`App.tsx`**: The main application component, managing state and routing between different views.
    * **`main.tsx`**: Entry point of the application.
    * `index.css`: Stylesheets for the application.


* **`package.json`**: Defines project dependencies and scripts.
* **`package-lock.json`**:  Locks down dependency versions.
* **`tsconfig.json`**, **`tsconfig.app.json`**, **`tsconfig.node.json`**: TypeScript configuration files.
* **`vite.config.ts`**: Vite configuration file.
* **`tailwind.config.js`**: Tailwind CSS configuration.
* **`postcss.config.js`**: PostCSS configuration.
* **`index.html`**:  The main HTML file.
* **`eslint.config.js`**: ESLint configuration.
* **`vercel.json`**: Configuration for deployment on Vercel.



## 3. Installation

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd vite-react-typescript-starter`
3. Install dependencies: `npm install` or `yarn install`


## 4. Usage

1. Run the development server: `npm run dev` or `yarn dev`
2. Open your browser and navigate to `http://localhost:5173/`.
3. Enter a GitHub repository name in the format `username/repository`.
4. Click the "Generate README" button.
5. Preview the generated README.
6. Download or copy the generated README.


## 5. API Endpoints

Based on the code, the application uses a single API endpoint:

* **`/generate-readme` (POST):**  Accepts a JSON payload with a `repo_name` field and returns a JSON response containing the generated README content or an error message.  The actual URL is defined by the `import.meta.env.VITE_API_URL` environment variable.


## 6. Contributing

1. Fork the repository
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m "<commit_message>"`
4. Push to the branch: `git push origin <branch_name>`
5. Create a pull request


## 7. Contact

For any questions or feedback, please contact naadamund@gmail.com.


## 8. Acknowledgements

* **React:**  A JavaScript library for building user interfaces.
* **TypeScript:** A superset of JavaScript that adds static typing.
* **Vite:** A fast build tool.
* **Tailwind CSS:** A utility-first CSS framework.
* **Lucide React:**  A React icon library.
* **React Markdown:** A library for rendering Markdown.
* **React Syntax Highlighter:** A library for syntax highlighting code.
* **Three.js:** A JavaScript 3D library.
* **Vanta:** A library for creating 3D background effects.
* **ESLint:**  A JavaScript linter.
* **@types/react, @types/react-dom:** TypeScript type definitions for React.


