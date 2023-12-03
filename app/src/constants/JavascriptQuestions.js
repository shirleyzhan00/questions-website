export const javascript = [
  {
    questionTopics: [
      // Basic JavaScript
      "Basic Syntax",
      "Asynchronous JavaScript (Callbacks, Promises, Async/Await)",
      "Error Handling (try...catch)",
      "ES6+ Features (Arrow Functions, Destructuring, etc.)",
      "Scope and Closures",

      // Intermediate JavaScript
      "DOM Manipulation (Document Object Model)",
      "Events and Event Handling",
      "Modules and ES6 Modules",
      "Classes and Object-Oriented Programming (OOP)",
      "Functional Programming Concepts (Map, Filter, Reduce)",
      "Promises and Fetch API",
      "Web APIs (localStorage, sessionStorage, etc.)",
      "Browser Storage (localStorage, sessionStorage)",
      "AJAX and XMLHttpRequest",
      "JSON (JavaScript Object Notation)",

      // Advanced JavaScript
      "Design Patterns (e.g., Singleton, Factory, Observer)",
      "Node.js and Server-Side JavaScript",
      "Full-Stack JavaScript Development",
      "Testing (Unit Testing, Integration Testing)",
    ],
    questions: [
      {
        question: "What's the output",
        answer: "choiceD",
        choices: {
          choiceA: "Lydia and undefined",
          choiceB: "Lydia and ReferenceError",
          choiceC: "ReferenceError and 21",
          choiceD: "undefined and Reference Error",
        },
        explanation:
          "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.",
        sampleCode:
          "function sayHi() { console.log(name); console.log(age); var name = 'Lydia'; let age = 21; } sayHi();",
      },
    ],
  },
];
