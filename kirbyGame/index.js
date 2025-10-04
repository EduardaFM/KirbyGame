const kirby = document.querySelector('.kirby');
const star = document.querySelector('.star');

const jump = (event) => {
    kirby.classList.add('jump');

    setTimeout(() => {
        kirby.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    console.log('loop');
    
    const starPosition = star.offsetLeft;
    const kirbyPosition = +window.getComputedStyle(kirby).bottom.replace('px','');
    
    if (starPosition <= 120 && starPosition > 0 && kirbyPosition < 80) {
        star.style.animation = 'none';
        star.style.left = `${starPosition}px`;

        kirby.style.animation = 'none';
        kirby.style.bottom = `${starPosition}px`;

        kirby.src = "kirbydefunto-removebg-preview.png";
        kirby.style.width = '60px';
        kirby.style.marginLeft = '100px';

        clearInterval(loop);
        star.style
    }
},10);

document.addEventListener('keydown', jump);