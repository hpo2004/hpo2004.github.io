const btn = document.querySelector('#btn');
const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 5 + 'px';
    cursor.style.top = e.clientY - 2 + 'px';
});

btn.addEventListener("click", () => {
    btn.style.animationName = 'move';
    btn.style.animationDuration = '2s';
    btn.style.animationFillMode = 'forwards';
  
    setTimeout(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const randomX = Math.floor(Math.random() * (windowWidth - 25));
        const randomY = Math.floor(Math.random() * windowHeight - 200);
        btn.style.left = `${randomX}px`;
        btn.style.top = `${randomY}px`;
        console.log(randomX, randomY);
    }, 2000);
});