

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

// Love Data

const loveQuotes = ['You always gain by giving love.', 'All that you are is all that I’ll ever need.', 'Love recognizes no barriers.', 'Love is composed of a single soul inhabiting two bodies.', 'We are most alive when we\'re in love.', 'There is no charm equal to tenderness of heart.', 'The heart has its reasons of which reason knows nothing.', 'Love is friendship that has caught fire.', 'Love yourself first and everything falls into line.', 'You can\'t blame gravity for falling in love.', 'If you find someone you love in your life, then hang on to that love.', 'I think I\'d miss you even if we never met.', 'I fell in love the way you fall asleep: slowly, and then all at once.', 'A simple "I love you" means more than money.', 'Everything I do, I do it for you.', 'You don\'t marry someone you can live with — you marry someone you cannot live without.', 'I want all of you, forever, you and me, every day.', 'If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.', 'True love stories never have endings.', 'There\'s nothing that I wouldn\'t do to make you feel my love.', 'To be brave is to love someone unconditionally, without expecting anything in return.', 'You know you\'re in love when you can\'t fall asleep because the reality is finally better than your dreams.', 'I love being married. It\'s so great to find one special person you want to annoy for the rest of your life.', 'The best thing to hold onto in life is each other.', 'You should be kissed and often, and by someone who knows how.', 'Maybe I don’t know that much but I know this much is true, I was blessed because I was loved by you.', 'When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.', 'All you need is love. But a little chocolate now and then doesn\'t hurt.', 'The smile is the beginning of love.', 'Love was made for me and you.', 'At the touch of love everyone becomes a poet.', 'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.', 'To feel the love of people whom we love is a fire that feeds our life.', 'You are my sun, my moon, and all my stars.', 'Oh, how a quiet love can drown out every fear.', 'I\'ve tried so many times to think of a new way to say it, and it’s still I love you.'];

const danQuotes = ['I love you my coconut caramel honey bun with sprinkes and coconut shavings on top <3', 'I love you, you sexy mf', 'You\'re my sunshine babe', 'You are a powerful Queen babe, keep your crown straight and your chin high', 'You\'ve healed my heart', 'PUMP PUMP PUMP', 'I knew I wanted to be with you for the rest of my life during our first date', 'You\'re beauity can\'t be measured', 'You\'re my universe'];

const emojiArr = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '♥️', '🥰', '😘', '😗', '😊', '😍', '💓', '💗', '💘', '💖', '💕'];

console.log('===============');
console.log(danQuotes);
console.log('===============');



