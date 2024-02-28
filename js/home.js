let next = document.querySelector('.next');
let previous = document.querySelector('.previous');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slider-wrapper').appendChild(items[0]);
})

previous.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slider-wrapper').prepend(items[items.length - 1]); // the length of the items = 3
})