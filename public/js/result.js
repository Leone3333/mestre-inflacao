const btn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

console.log(btn);
console.log(sidebar);

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    btn.classList.toggle('active');
});

