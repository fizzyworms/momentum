const quotes = [
  {
    quote:
      "A ship in harbor is safe, but that is not what ships are built for.",
    author: "John Augustus Shedd",
  },
  {
    quote: "Real success is finding your lifework in the work that you love.",
    author: "David McCullough",
  },
  {
    quote:
      "Let us always meet each other with smile, for the smile is the beginning of love.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine ",
  },
  {
    quote: "Live in the sunshine, swim the sea, drink the wild air.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you really want to do something, you'll find a way. If you do not, you'll find an excuse",
    author: "Jim Rohn",
  },
  {
    quote:
      "When I get logical, and I don't trust my instincts - that's when I get in trouble.",
    author: "Angelina Jolie",
  },
  {
    quote: "It is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    quote:
      "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: "Angelina Jolie",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; //todaysQuote의 quote 넣어줌
author.innerText = todaysQuote.author;
