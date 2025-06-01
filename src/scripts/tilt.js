// Tilt effect for image
const image = document.querySelector('.tilt-image');
if (image) {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (y / rect.height) * 15;
        const rotateY = (x / rect.width) * -15;
        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
}

// Typing animation for both texts, one after the other
function typeText(element, text, delay = 60, callback) {
    let i = 0;
    element.textContent = '';
    element.classList.add('typing-caret');
    function type() {
        if (i <= text.length) {
            element.textContent = text.slice(0, i);
            i++;
            setTimeout(type, delay);
        } else {
            element.classList.remove('typing-caret');
            if (callback) callback();
        }
    }
    type();
}

window.addEventListener('DOMContentLoaded', () => {
    const bgText = document.getElementById('background-text');
    const subtitle = document.getElementById('subtitle');
    typeText(bgText, 'Profanalo, Profanalo!!!', 60, () => {
        setTimeout(() => {
            typeText(subtitle, 'No mames Carl, ya somos hasta un sitio web.', 40);
        }, 400);
    });
});