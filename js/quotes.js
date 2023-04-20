const quotes = [
  {
    quote:
      'Words do not express thoughts very well. They always become a little different immediately after they are expressed, a little distorted, a little foolish.',
    author: 'Hermann Hesse',
  },
  {
    quote: 'Learn what is to be taken seriously and laugh at the rest.',
    author: 'Hermann Hesse',
  },
  {
    quote:
      'Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else ... Knowledge can be communicated, but not wisdom. One can find it, live it, do wonders through it, but one cannot communicate and teach it.',
    author: 'Hermann Hesse',
  },
  {
    quote:
      "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
    author: 'Hermann Hesse',
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: 'Bernard M. Baruch',
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: 'William W. Purkey',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.trunc(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
