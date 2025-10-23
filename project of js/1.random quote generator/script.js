const quotes=["Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream big. Work hard. Stay humble.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "It always seems impossible until it’s done.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "Your limitation—it’s only your imagination.",
  "Work hard in silence, let your success make the noise.",
  "Don’t limit your challenges, challenge your limits.",
  "The secret of getting ahead is getting started.",
  "Make each day your masterpiece.",
  "You don’t have to be great to start, but you have to start to be great."
];
const button=document.querySelector('button');
const quote=document.querySelector('h1');

button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*20);
    quote.textContent=quotes[index];
})
