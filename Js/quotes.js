const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "-Walt Disney",
  },
  {
    quote:
      "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    author: "-Steve Jobs",
  },
  {
    quote:
      "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    author: "-Johann Wolfgang Von Goethe",
  },
  {
    quote: "We generate fears while we sit. We overcome them by action.",
    author: " -Dr. Henry Link",
  },
  {
    quote:
      "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.",
    author: "-Brian Tracy",
  },
  {
    quote:
      "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody says distract you from your goals.",
    author: "-Michelle Obama",
  },
  {
    quote:
      "You don’t have to be great to start, but you have to start to be great.",
    author: "-Zig Ziglar",
  },
  {
    quote:
      "Motivation is what gets you started. Habit is what keeps you going.",
    author: "J-im Ryun",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "-Aristotle",
  },
  {
    quote:
      "Never do tomorrow what you can do today. Procrastination is the thief of time.",
    author: "-Charles Dickens",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
