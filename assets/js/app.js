//*****Love Data Arrays*******

const emojiArr = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '♥️', '🥰', '😘', '😗', '😊', '😍', '💓', '💗', '💘', '💖', '💕'];

/*************************/


// On click Function for selecting a heart color

let picked_heart = document.querySelectorAll('ul.heart-choices li.picked-heart');

picked_heart = Array.from(picked_heart);

const heartClick_0 = (e) => {
    e.preventDefault();
    picked_heart[0].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[0].classList.remove('animated', 'bounce');}, 1000);
}

const heartClick_1 = (e) => {
    e.preventDefault();
    picked_heart[1].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[1].classList.remove('animated', 'bounce');}, 1000);
}

const heartClick_2 = (e) => {
    e.preventDefault();
    picked_heart[2].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[2].classList.remove('animated', 'bounce');}, 1000);
}

const heartClick_3 = (e) => {
    e.preventDefault();
    picked_heart[3].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[3].classList.remove('animated', 'bounce');}, 1000);
}

const heartClick_4 = (e) => {
    e.preventDefault();
    picked_heart[4].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[4].classList.remove('animated', 'bounce');}, 1000);
}

picked_heart[0].addEventListener('click', heartClick_0);
picked_heart[1].addEventListener('click', heartClick_1);
picked_heart[2].addEventListener('click', heartClick_2);
picked_heart[3].addEventListener('click', heartClick_3);
picked_heart[4].addEventListener('click', heartClick_4);


//*******Array Randomizer******

const quoteBuilder = (e) => {
    e.preventDefault();

    const danQuotes = ['I love you my coconut caramel honey bun with sprinkes and coconut shavings on top <3', 'I love you, you sexy mf', 'You\'re my sunshine babe', 'You are a powerful Queen babe, keep your crown straight and your chin high', 'You\'ve healed my heart', 'PUMP PUMP PUMP', 'I knew I wanted to be with you for the rest of my life during our first date', 'You\'re beauity can\'t be measured', 'All that you are is all that I’ll ever need.', 'You\'re my universe', 'Love is friendship that has caught fire.', 'I think I\'d miss you even if we never met.','❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '♥️', '🥰', '😘', '😗', '😊', '😍', '💓', '💗', '💘', '💖', '💕'];

    for (let i = danQuotes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [danQuotes[i], danQuotes[j]] = [danQuotes[j], danQuotes[i]];
      
    }
    console.log('hello');
    
    //Creating dynamic elememts for love quotes
    const lovePtag = document.createElement('p');
    lovePtag.className = 'loveQuoteDump';
    lovePtag.id = 'quoteDrop';
    lovePtag.appendChild(document.createTextNode(danQuotes[1]));
    const love_window = document.querySelector('#love-window');
    love_window.appendChild(lovePtag);

    const qouteNode = document.querySelectorAll('.loveQuoteDump');

    if(qouteNode[1] !== undefined) {
        qouteNode[0].remove();
        console.log('A quote was removed');
    }
    else {
        console.log('First Quote');
    }
    
}


//Click Handler for heart button
const displayLoveQuote = (e) => {
    console.log('I\'m the heart button');
    e.preventDefault();
}

const heart_button = document.querySelector('#heart');
heart_button.addEventListener('click', quoteBuilder);





