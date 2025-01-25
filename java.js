import { fetchQuotes } from "./fetch.js";

randomQuote();

function randomQuote() {
    fetchQuotes().then(function (quoteData) {
        if (Array.isArray(quoteData.motivationalQuotes) && quoteData.motivationalQuotes.length > 0) {
            // Select a random quote
            const randomIndex = Math.floor(Math.random() * quoteData.motivationalQuotes.length);
            const randomQuote = quoteData.motivationalQuotes[randomIndex];

            console.log(randomQuote); // Display the random quote in the console
            let quote = `<p> ${randomQuote} </p>`
            return document.getElementById("tulos").innerHTML = quote; // Return the random quote (if needed)
        } else {
            console.error("No quotes found in the data.");
        }
    }).catch(function (error) {
        console.error("Error fetching quotes:", error);
    });
}

