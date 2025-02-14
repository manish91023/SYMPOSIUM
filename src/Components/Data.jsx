// src/data.js

const events = [
    {
      id: 1,
      name: "Quiz Master",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      coordinator: "Manish Kumar",
      contactNumber: "9102326770",
      
      rules: [
        "The quiz consists of 3 rounds.",
        "Each round has 10 questions, and answers are given using the Kahoot platform.",
        "The first team to buzz gets to answer within the given time limit.",
        "Scoring: Correct answer (+10 points), Wrong answer (-5 points).",
        "The team with the highest total score at the end is declared the winner."
      ]
    },
    {
      id: 2,
      name: "Bug Busters",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      coordinator: "John Doe",
      contactNumber: "9876543210",
      rules: [
        "Teams must identify and fix bugs in a given codebase.",
        "Each bug found earns points based on difficulty.",
        "Time is limited, so efficiency is crucial.",
        "The team with the most bugs fixed wins."
      ]
    },
    // Add more events as needed
  ];
  
  export default events;