
// Word of the Day Widget – study247_wordoftheday.js
const words = [
  { word: "ज्ञान", meaning: "Knowledge", sentence: "ज्ञान हे शक्तीचे स्वरूप आहे." },
  { word: "शांतता", meaning: "Peace", sentence: "शांतता ही मनाची खरी गरज आहे." },
  { word: "प्रयत्न", meaning: "Effort", sentence: "प्रयत्न केल्याशिवाय यश मिळत नाही." },
  { word: "सत्य", meaning: "Truth", sentence: "सत्य नेहमी विजयी होतं." },
  { word: "आशा", meaning: "Hope", sentence: "आशा ही जीवनाची खरी प्रेरणा आहे." },
  { word: "मैत्री", meaning: "Friendship", sentence: "मैत्री म्हणजे दोन आत्म्यांचं एक नातं." },
  { word: "प्रेम", meaning: "Love", sentence: "प्रेमाने सर्व काही जिंकता येतं." },
  { word: "संघर्ष", meaning: "Struggle", sentence: "संघर्षाशिवाय जीवनात यश नाही." },
  { word: "सर्जनशीलता", meaning: "Creativity", sentence: "सर्जनशीलता जीवनाला रंग देते." },
  { word: "ध्येय", meaning: "Goal", sentence: "ध्येय निश्चित केल्याशिवाय प्रगती अशक्य आहे." }
  // Remaining 390 words can be added in the same format
];

function showWordOfTheDay() {
  const date = new Date();
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const todayWord = words[dayOfYear % words.length];

  document.getElementById("marathiWord").textContent = todayWord.word;
  document.getElementById("englishMeaning").textContent = todayWord.meaning;
  document.getElementById("exampleSentence").textContent = todayWord.sentence;
}

document.addEventListener("DOMContentLoaded", showWordOfTheDay);
