

// first.js

const quotes = [
  "Honesty is the best policy.",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Happiness depends upon ourselves. – Aristotle",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don’t count the days, make the days count. – Muhammad Ali",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Believe you can and you’re halfway there. – Theodore Roosevelt",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "The best way to predict the future is to invent it. – Alan Kay",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Act as if what you do makes a difference. It does. – William James",
  "Opportunities don't happen, you create them. – Chris Grosser",
  "Dream big and dare to fail. – Norman Vaughan",
  "What we think, we become. – Buddha",
  "Turn your wounds into wisdom. – Oprah Winfrey",
  "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "Do something today that your future self will thank you for.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

const ele = document.getElementById("quote") ;

function gen()
{
   
    const index = Math.floor(Math.random()*quotes.length) ;
    ele.textContent = quotes[index];
}

setInterval(gen , 2000) ;






