

// const picked_heart = document.querySelector('li.picked-heart');
// picked_heart.className = 'animated bounce infinite';

const picked_heart = document.querySelectorAll('.picked-heart');


// On click Function for selecting a heart color
const heartClick = (e) => {
    for (let i = 0; i < picked_heart.length; i++) {
        picked_heart[i].classList.add('animated', 'bounce');
        console.log('I ran');
    }
    e.preventDefault();
}


// picked_heart.className = 'animated bounce infinite';

heartClick();

console.log(picked_heart);