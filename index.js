const getWordsTXT = () => {
    return fetch('words.txt')
        .then(response => response.text())
        .then(data => data.split('\n'));
}

const generateRandomWords = async (num) => {
    const words = await getWordsTXT();
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(words[Math.floor(Math.random() * words.length)].trim());
    }
    return result;
}

window.onload = () => {
    let genButton = document.getElementById('generateWordsBtn');
    let wordArea = document.getElementById('wordsArea');
    let wordCount = document.getElementById('wordCount');

    wordArea.innerText = '';

    genButton.addEventListener('click', async () => {
        const count = parseInt(wordCount.value);
        const words = await generateRandomWords(count);
        wordArea.innerText = words.join(', ');
    });
};