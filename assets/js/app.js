// On click Function for selecting a heart color and creating the button

let picked_heart = document.querySelectorAll('ul.heart-choices li.picked-heart');

picked_heart = Array.from(picked_heart);
const rootHeartButton = document.querySelector('#root');

document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.parentElement.classList.contains('picked-heart')) {
        
        let clickedHeart = e.target.parentElement;
        clickedHeart.classList.add('animated', 'bounce');
        setTimeout( () => {clickedHeart.classList.remove('animated', 'bounce');}, 1000);
        
        let heartValue = e.target.parentElement.dataset.value;
        const heartButton = document.createElement('button');
        heartButton.className = 'animated infinite fast pulse heart_button';
        heartButton.id = 'heart';
        heartButton.appendChild(document.createTextNode(heartValue));
        rootHeartButton.appendChild(heartButton);

        heartButton.addEventListener('click', quoteBuilder);

        const tapHeader = document.createElement('h2');
        tapHeader.id = 'tap-styles-h2';
        tapHeader.className = 'tapHeader';
        tapHeader.appendChild(document.createTextNode('Tap Me'));
        rootHeartButton.appendChild(tapHeader);

        const heartNode = document.querySelectorAll('.heart_button');
        const tapHeaderNode = document.querySelectorAll('.tapHeader');

        console.log(heartNode);
        if (heartNode[1] !== undefined) {
            heartNode[0].remove();
            console.log('A heart was removed');
            if (tapHeaderNode[1] !== undefined) {
                tapHeaderNode[0].remove();
                console.log('Header was swapped');
            }
        }  
        else{
            console.log('1st heart');
        }
    }
});

//*******Array Randomizer******

const quoteBuilder = (e) => {
    e.preventDefault();

    const danQuotes = ['I love you my coconut caramel honey bun with sprinkes and coconut shavings on top <3', 'I love you, you sexy mf', 'You\'re my sunshine babe', 'You are a powerful Queen babe, keep your crown straight and your chin high', 'You\'ve healed my heart', 'PUMP PUMP PUMP', 'I knew I wanted to be with you for the rest of my life during our first date', 'You\'re beauity can\'t be measured', 'All that you are is all that I’ll ever need.', 'You\'re my universe', '\"She like Bag you a 🐕 I\'m like 🗣️🐺🐺🐺\"', '\"Big 💰 Big 💰\"', 'Love is friendship that has caught fire.', 'Best Girl Friend award goes to you 🥇', '( ͡👁️ ͜ʖ ͡👁️)', '(っ ͡⏿ 👅 ͡⏿)っ', 'October ⑨th', 'I think I\'d miss you even if we never met.', 'I love you beautiful 😘', 'You\'re 🔥', '😈', 'Illegal 👽', 'I love You More Than 🍕', 'Me ➕ You = 💚🧡', '♾️','❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '♥️', 'DJ YESH!💣', 'Get Dat 🧴 Rdy', 'You\'re my shooting star⭐',  '🥰', '😘', '😗', '😊', '😍', '💓', '💗', '💘', '💖', '💕', 'Hi Tiny 🥰'];

    for (let i = danQuotes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [danQuotes[i], danQuotes[j]] = [danQuotes[j], danQuotes[i]];
      
    }
    console.log(danQuotes);
    
    //Creating dynamic elememts for love quotes
    const lovePtag = document.createElement('p');
    lovePtag.className = 'loveQuoteDump';
    lovePtag.id = 'quoteDrop';
    lovePtag.appendChild(document.createTextNode(danQuotes[1]));
    const love_window = document.querySelector('#love-window');
    love_window.appendChild(lovePtag);

    const quoteNode = document.querySelectorAll('.loveQuoteDump');

    if(quoteNode[1] !== undefined) {
        quoteNode[0].remove();
        console.log('A quote was removed');
        // console.log(quoteNode[1].textContent.length);
        if(quoteNode[1].textContent.length == 2) {
            lovePtag.style = 'font-size: 190px;';
        }
    } else {
        if(quoteNode[0].textContent.length == 2) {
            lovePtag.style = 'font-size: 190px;';
        }
        console.log('First Quote');
    }
    
}