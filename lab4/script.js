const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;

localStorage.setItem('osInfo', osInfo);
localStorage.setItem('browserInfo', browserInfo);

const savedOs = localStorage.getItem('osInfo');
const savedBrowser = localStorage.getItem('browserInfo');

const footerInfoElement = document.getElementById('footer-info');
footerInfoElement.textContent = `Операційна система: ${savedOs} | Браузер: ${savedBrowser}`;

fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('comments-container');
        data.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.style.borderBottom = "1px solid gray";
            commentDiv.style.paddingBottom = "10px";
            commentDiv.style.marginBottom = "10px";
            commentDiv.innerHTML = `
                <h4>${comment.name} (${comment.email})</h4>
                <p>${comment.body}</p>
            `;
            container.appendChild(commentDiv);
        });
    })
    .catch(error => console.error('Помилка при отриманні коментарів:', error));

const modal = document.getElementById('feedback-modal');
const closeModalBtn = document.getElementById('close-modal');

setTimeout(() => {
    modal.style.display = 'block';
}, 60000);

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

const now = new Date();
const hours = now.getHours();

if (hours >= 7 && hours < 21) {
    bodyElement.classList.remove('dark-mode');
} else {
    bodyElement.classList.add('dark-mode');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
});