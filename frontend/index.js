function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
   const widgets = document.querySelectorAll('section>div')
   widgets.forEach((widget, i) => {
    widget.classList.add("widget")
    widget.setAttribute('tabindex', i + 1 + "")
  })   

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  const randomIdx = Math.floor(Math.random() * quotes.length) // eslint-disable-line
  const randomQuote = quotes[randomIdx] // eslint-disable-line
  // flesh out quote
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  console.log(quote)
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote)
  //flesh out author and date
  const authorDate = document.createElement("div")
  const {author, date} = randomQuote
  authorDate.textContent = `${author} in ${date || "an unknown date"}`
  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)] // eslint-disable-line
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)] // eslint-disable-line

  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)] // eslint-disable-line
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)] // eslint-disable-line

  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)] // eslint-disable-line
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)] // eslint-disable-line

  const mumboJumbo = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  const paragraph = document.createElement("p")
  paragraph.textContent = mumboJumbo
  document.querySelector(".corporatespeak").appendChild(paragraph)

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdownWidget = document.querySelector(".countdown")
  let count = 5;
  const countdown = document.createElement("p")
  countdown.textContent = `T-minus ${count}...`
  countdownWidget.appendChild(countdown)

  const id = setInterval(() => {
    if (count === 1){
      countdown.textContent = `Liftoff! 🚀`
      clearInterval(id)
    } else {
    count--;
    countdown.textContent = `T-minus ${count}...`;
  }}, 1000)
  

  

  // 👉 TASK 5 - Build a "Friends" widget
  // const friendsWidget = document.querySelector("")
  const person = people[Math.floor(Math.random() * people.length)] // eslint-disable-line
  const personParagraph = document.createElement("p")
  document.querySelector('.friends').appendChild(personParagraph)
  const birthYear = person.dateOfBirth.split('-')[0]
  let sentence = `${person.fname} ${person.lname} was born in ${birthYear} and `
  if (!person.friends.length) {
    sentence += " has no friends."
  }else {
    sentence += ` is friends with ` 
    for (let i = 0; i < person.friends.length; i++) {
      const friendId = person.friends[i]
      const friend = people.find(p => p.id === friendId) //eslint-disable-line
      const fullName = `${friend.fname} ${friend.lname}`
      let isLast = i === person.friends.length - 1
      let isNextToLast = i === person.friends.length - 2
      if (isLast) {
        sentence += `${fullName}.`
      }else if (isNextToLast) {
        sentence += `${fullName} and `
      }else {
        sentence += `${fullName}, `
      }
    }
  }

  personParagraph.textContent = sentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
// see code on lines 9 through 13.

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
