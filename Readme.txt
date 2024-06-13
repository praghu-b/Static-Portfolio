---

# Static Portfolio

A static portfolio built with Node.js, Express, HTML, CSS, and JavaScript, utilizing various Node modules for enhanced functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/static-portfolio.git
   cd static-portfolio
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file:**

   ```sh
   touch .env
   ```

   Add any environment variables required for your project in the `.env` file.

## Usage

1. **Start the server:**

   In production mode:

   ```sh
   npm start
   ```

   In development mode with nodemon:

   ```sh
   npm run dev
   ```

2. **Open your browser:**

   Navigate to `http://localhost:3000` to view your portfolio.

## Project Structure

```
static-portfolio/
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── ...
│
├── views/
│   ├── partials/
│   ├── index.ejs
│   └── ...
│
├── .env
├── package.json
├── server.js
└── ...
```

- **public/**: Contains static assets like CSS, JavaScript, and images.
- **views/**: Contains EJS templates for rendering HTML.
- **server.js**: The main server file.
- **.env**: Environment variables file.

## Dependencies

- [animate.css](https://github.com/animate-css/animate.css) - A library of ready-to-use, cross-browser animations.
- [bootstrap](https://getbootstrap.com/) - A framework for building responsive, mobile-first sites.
- [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from a `.env` file.
- [ejs](https://github.com/mde/ejs) - Embedded JavaScript templating.
- [express](https://github.com/expressjs/express) - A minimal and flexible Node.js web application framework.
- [nodemailer](https://github.com/nodemailer/nodemailer) - Easy as cake e-mail sending from your Node.js applications.
- [nodemon](https://github.com/remy/nodemon) - A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Scripts

- **start**: Runs `node server.js` to start the server in production mode.
- **dev**: Runs `nodemon server.js` to start the server in development mode with automatic restarts on file changes.

## License

This project is licensed under the ISC License.

---
