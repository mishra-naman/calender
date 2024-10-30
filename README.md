Here’s the complete README.md code in one single block:

```markdown
# 🌟 MERN Calendar

A powerful calendar web application built with the **MERN** stack, allowing users to add, edit, delete, or list events from others seamlessly.

### 📅 [Try the demo here!](https://mern-redux-calendar.herokuapp.com/)

![Calendar Preview](./preview.jpeg)

---

## 📃 Table of Contents

- [🌟 MERN Calendar](#-mern-calendar)
  - [📅 Try the demo here!](#-try-the-demo-here)
  - [🚀 Getting Started](#-getting-started)
    - [📋 Pre-requisites](#-pre-requisites)
    - [🔧 Installation](#-installation)
  - [📦 Deployment](#-deployment)
  - [🛠️ Built With](#-built-with)
  - [❤️ Acknowledgments](#-acknowledgments)

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### 📋 Pre-requisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### 🔧 Installation

**Local Installation:**

```bash
# Clone this repository
git clone https://github.com/Ju4npx/mern-calendar.git

# Navigate to the project directory
cd mern-calendar
```

---

### 🛠️ Server Setup

```bash
# Navigate to the server directory
cd server

# Install server dependencies
npm install

# Copy the example environment file
cp .env.example .env
```

#### Update the **server .env** file:

```shell
PORT=5000
MONGODB_CNN=mongodb+srv://user:password@clusterrestaurant.rgq1n.mongodb.net/schema
JWT_SECRET_KEY=RANDOMKEY
```

---

### 🖥️ Client Setup

```bash
# Navigate back to the project root
cd ..

# Change directory to the client path
cd client

# Install client dependencies
npm install

# Copy the example environment file
cp .env.example .env
```

#### Update the **client .env** file:

```shell
REACT_APP_API_URL="http://localhost:5000/api"
```

---

## 📦 Deployment

To run the application locally, execute the following commands in separate terminals:

**Server:**
```bash
cd server
npm start
```

**Client:**
```bash
cd client
npm start
```

Now open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your application!

---

## 🛠️ Built With

- **[React](https://es.reactjs.org/)** - Frontend framework for building user interfaces
- **[React Redux](https://react-redux.js.org/)** - State management library for React
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[Express.js](https://expressjs.com/)** - Fast, unopinionated web framework for Node.js
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database for storing application data

---

## ❤️ Acknowledgments

A big thank you to [Juan Pablo Machado](https://github.com/Ju4npx) for the inspiration and guidance in building this project!

![Technology Stack](https://example.com/technology-stack-image.jpeg)  <!-- Replace with an actual image link -->

Feel free to contribute or suggest improvements!

---

⌨️ Crafted with ❤️ by **Naman Mishra** 😊
```

