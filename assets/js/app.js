// On click Function for selecting a heart color

let picked_heart = document.querySelectorAll('ul.heart-choices li.picked-heart');

picked_heart = Array.from(picked_heart);
const rootHeartButton = document.querySelector('#root');

const heartClick_0 = (e) => {
    e.preventDefault();
    picked_heart[0].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[0].classList.remove('animated', 'bounce');}, 1000);

    const heart0 = document.createElement('button');
    heart0.className = 'animated infinite fast pulse heart_button';
    heart0.id = 'heart';
    heart0.setAttribute("type", "button");
    heart0.appendChild(document.createTextNode('❤️'));
    rootHeartButton.appendChild(heart0);

    const tapHeader = document.createElement('h2');
    tapHeader.id = 'tap-styles-h2';
    tapHeader.className = 'tapHeader';
    tapHeader.appendChild(document.createTextNode('Tap Me'));
    rootHeartButton.appendChild(tapHeader);

    heart0.addEventListener('click', quoteBuilder);

    const heartNode = document.querySelectorAll('.heart_button');
    const tapHeaderNode = document.querySelectorAll('.tapHeader');
    
    if (heartNode[1] !== undefined) {
        heartNode[0].remove();
        console.log('A heart was removed');
        if (tapHeaderNode[1] !== undefined) {
            tapHeaderNode[0].remove();
            console.log('Header was swapped');
        }
    }  else{
        console.log('1st heart');
    }
}

const heartClick_1 = (e) => {
    e.preventDefault();
    picked_heart[1].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[1].classList.remove('animated', 'bounce');}, 1000);

    const heart1 = document.createElement('button');
    heart1.className = 'animated infinite fast pulse heart_button';
    heart1.id = 'heart';
    heart1.appendChild(document.createTextNode('🧡'));
    rootHeartButton.appendChild(heart1);

    const tapHeader = document.createElement('h2');
    tapHeader.id = 'tap-styles-h2';
    tapHeader.className = 'tapHeader';
    tapHeader.appendChild(document.createTextNode('Tap Me'));
    rootHeartButton.appendChild(tapHeader);

    heart1.addEventListener('click', quoteBuilder);

    const heartNode = document.querySelectorAll('.heart_button');
    const tapHeaderNode = document.querySelectorAll('.tapHeader');
    
    if (heartNode[1] !== undefined) {
        heartNode[0].remove();
        console.log('A heart was removed');
        if (tapHeaderNode[1] !== undefined) {
            tapHeaderNode[0].remove();
            console.log('Header was swapped');
        }
    }  else{
        console.log('1st heart');
    }   
}

const heartClick_2 = (e) => {
    e.preventDefault();
    picked_heart[2].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[2].classList.remove('animated', 'bounce');}, 1000);

    const heart2 = document.createElement('button');
    heart2.className = 'animated infinite fast pulse heart_button';
    heart2.id = 'heart';
    heart2.appendChild(document.createTextNode('💛'));
    rootHeartButton.appendChild(heart2);
    
    const tapHeader = document.createElement('h2');
    tapHeader.id = 'tap-styles-h2';
    tapHeader.className = 'tapHeader';
    tapHeader.appendChild(document.createTextNode('Tap Me'));
    rootHeartButton.appendChild(tapHeader);

    heart2.addEventListener('click', quoteBuilder);

    const heartNode = document.querySelectorAll('.heart_button');
    const tapHeaderNode = document.querySelectorAll('.tapHeader');
    
    if (heartNode[1] !== undefined) {
        heartNode[0].remove();
        console.log('A heart was removed');
        if (tapHeaderNode[1] !== undefined) {
            tapHeaderNode[0].remove();
            console.log('Header was swapped');
        }
    }  else{
        console.log('1st heart');
    }
}

const heartClick_3 = (e) => {
    e.preventDefault();
    picked_heart[3].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[3].classList.remove('animated', 'bounce');}, 1000);

    const heart3 = document.createElement('button');
    heart3.className = 'animated infinite fast pulse heart_button';
    heart3.id = 'heart';
    heart3.appendChild(document.createTextNode('💙'));
    rootHeartButton.appendChild(heart3);
    
    const tapHeader = document.createElement('h2');
    tapHeader.id = 'tap-styles-h2';
    tapHeader.className = 'tapHeader';
    tapHeader.appendChild(document.createTextNode('Tap Me'));
    rootHeartButton.appendChild(tapHeader);

    heart3.addEventListener('click', quoteBuilder);

    const heartNode = document.querySelectorAll('.heart_button');
    const tapHeaderNode = document.querySelectorAll('.tapHeader');
    
    if (heartNode[1] !== undefined) {
        heartNode[0].remove();
        console.log('A heart was removed');
        if (tapHeaderNode[1] !== undefined) {
            tapHeaderNode[0].remove();
            console.log('Header was swapped');
        }
    }  else{
        console.log('1st heart');
    }
}

const heartClick_4 = (e) => {
    e.preventDefault();
    picked_heart[4].classList.add('animated', 'bounce');
    setTimeout( () => {picked_heart[4].classList.remove('animated', 'bounce');}, 1000);

    const heart4 = document.createElement('button');
    heart4.className = 'animated infinite fast pulse heart_button';
    heart4.id = 'heart';
    heart4.appendChild(document.createTextNode('💚'));
    rootHeartButton.appendChild(heart4);
    
    const tapHeader = document.createElement('h2');
    tapHeader.id = 'tap-styles-h2';
    tapHeader.className = 'tapHeader';
    tapHeader.appendChild(document.createTextNode('Tap Me'));
    rootHeartButton.appendChild(tapHeader);

    heart4.addEventListener('click', quoteBuilder);

    const heartNode = document.querySelectorAll('.heart_button');
    const tapHeaderNode = document.querySelectorAll('.tapHeader');
    
    if (heartNode[1] !== undefined) {
        heartNode[0].remove();
        console.log('A heart was removed');
        if (tapHeaderNode[1] !== undefined) {
            tapHeaderNode[0].remove();
            console.log('Header was swapped');
        }
    }  else{
        console.log('1st heart');
    }
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

//Click Handler for heart button
const displayLoveQuote = (e) => {
    console.log('I\'m the heart button');
    e.preventDefault();
}