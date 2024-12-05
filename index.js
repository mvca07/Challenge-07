// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project.",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of your project:",
    },
    {
      type: "input",
      name: "require",
      message: "What dependencies are required to run this application?",
    },
    {
      type: "input",
      name: "usage",
      message: "How should users use this application?",
    }, 
    {
      type: "checkbox",
      name: "license",
      message: "What is the license type for this project?",
      choices: ["MIT", "APACHE", "MPL" ],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "How can users run tests for this application?",
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email address should users send questions to?',
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Professional README.md created successfully!");
      }
    });
  }
// TODO: Create a function to initialize app
function init() {
    console.log("Initializing the application...");
    inquirer.prompt(questions).then((answers) => {
      console.log("Creating Professional README.md File...");
      writeToFile("README.md", generateMarkdown(answers));
    });
}
// Function call to initialize app
init();
