const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

// create a new instance of WordCounter
new WordCounter(inputText);


const render = (event) => {
    statElem.innerHTML = `<p>You've written <strong><span class="highlight">${event.detail.wordStat.words} words</strong></span> 
        (and <span class="highlight">${event.detail.wordStat.characters} characters)</span>.</p>`;
}

inputText.addEventListener('count', render);