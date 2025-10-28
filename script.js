// Animaciones de entrada suaves para cada sección al hacer scroll

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

const feImage = document.querySelector("feImage");
fetch("https://essykings.github.io/JavaScript/map.png")
    .then((response) => response.blob())
    .then((blob) => {
        const objURL = URL.createObjectURL(blob);
        feImage.setAttribute("href", objURL);
    });
