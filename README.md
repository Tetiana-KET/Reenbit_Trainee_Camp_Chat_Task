# Chillax - full stack chat app

## [Deployment](https://reenbit-trainee-camp-chat-task-chillax.onrender.com)

### Project Overview

This project is a chat application designed to facilitate communication between users while showcasing backend integration. The backend provides an automatic response to messages by fetching random quotes from the Quotable API.

### Objectives

- To build a full-stack chat application with the following features:
- A user-friendly frontend for interacting with chats.
- A robust backend with auto-response functionality.
- Persistent data storage using MongoDB.

### Key Features
- [ ] The application starts with three predefined chats.
- [ ] A dialog window allows users to create a new chat by entering the first and last names (both fields are mandatory).
- [ ] Users can edit the first and last names of existing chats.
- [ ] Users can edit their own messages.
- [ ] Chats can be deleted with confirmation to prevent accidental deletions.
- [ ] Messages can be sent in a chat
- [ ] The backend will automatically send a response with a random quote after a 3-second delay.
- [ ] A toast notification is displayed for every new message.
- [ ] A search bar allows users to find specific chats.
- [ ] All features are connected to the backend, and data is saved in MongoDB.
- [ ] Implement login functionality using at least one provider (e.g., Gmail, Facebook).
- [ ] Enable real-time messaging with:
    - [ ] Automatic message sending to random chats.
    - [ ] Notifications on the client-side.
    - [ ] Toggle button to turn this feature on/off.
- [ ] Pages for user registration and login.
- [ ] User profile with options to add and edit profile pictures.

### Key pages in the application include

- Sign In 🔑 / Sign Up 📝
- Chat page: 🎉
- Settings page: 🛠️
- Profile page: 📜

### Project screenshots


### Technology stack

- Main library: [**React**](https://react.dev/)
- Language: [**TypeScript**](https://www.typescriptlang.org/)
- CSS framework: [**Tailwindcss**](https://tailwindcss.com/)
- Component library: [**Daisyui**](https://daisyui.com/)
- Linters: [**ESLint**](https://eslint.org/)
- Routing: [**React Router**](https://reactrouter.com/)
- Hosting: [**Render**](https://render.com)
- Backend runtime: [**Node.js**](https://nodejs.org/)
- Web framework: [**Express.js**](https://expressjs.com/)
- Data Base: [**MongoDB**](https://www.mongodb.com/)


### Setup instructions

- Make sure you have node.js installed on your machine before proceeding with the setup or installation process.
We recommend using version 20.9.0 or higher. To check if Node.js is installed, you can use the following command:

```
node -v
```
- Make sure nmp is installed by running
```
npm -v
```
1. Clone this repo.
```
git clone <repository-url>
cd Reenbit_Trainee_Camp_Chat_Task
```
2. Install Dependencies
Run `install-all` in the root directory. This command will install dependencies both in frontend and backend workspaces.
- Checkout to the frontend or backend folder and  run `npm run dev` to start the application in development mode. **OR** just run `npm run dev` in the root directory to run scriprs concurrently.
3. Environment Configuration
Create .env file in backend folder. See `.env.example`

## Scripts available

#### Start development server

```
npm run dev
```
This command, when used from root directory, runs the development servers for both the backend and frontend concurrently. It uses the concurrently package to execute the following:
```
"dev": "concurrently \"npm run dev --workspace=backend\" \"npm run dev --workspace=frontend\""
```
**From Backend:** Starts the Express.js server with TypeScript hot-reloading using ts-node-dev.
**From Frontend:** Starts the React development server using Vite for fast builds.

#### Build the project

- Root:
```
npm run build
```
Executes: `"build": "npm install --workspace=backend && npm install --workspace=frontend && npm run build --workspace=frontend"`
Installs dependencies for both the backend and frontend workspaces.
Builds the frontend by running vite build. The frontend's production-ready assets are prepared in the dist/ directory.

#### To run the production version of the app use:

```
npm start
```
Run Production Version of the App
- Root:
```
npm start
```
Executes: `"start": "npm run start --workspace=backend"` and starts the backend server to serve the application.

#### ESLint check

To check for code style and potential errors including TypeScript and TSX files (--ext ts,tsx), run

```
npm run lint
```

