// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the testimonial carousel
    function setupTestimonialCarousel() {
        const carousel = document.querySelector('.carousel');
        if (!carousel) return; // Exit if carousel doesn't exist

        let isDragging = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        carousel.addEventListener('mouseup', () => {
            isDragging = false;
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    }

    // Function to handle the contact form submission
    function setupContactForm() {
        const form = document.getElementById('contacto-form');
        const spinner = document.getElementById('spinner');
        const modal = document.getElementById('modal-confirmacion');
        const closeModalButton = document.getElementById('cerrar-modal');

        if (!form) return; // Exit if form doesn't exist

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            spinner.classList.remove('hidden'); // Show the spinner

            // Simulate a form submission delay (replace with actual AJAX call)
            setTimeout(() => {
                spinner.classList.add('hidden'); // Hide the spinner
                modal.classList.remove('hidden'); // Show the modal
            }, 2000); // 2 seconds delay
        });

        if (closeModalButton) {
            closeModalButton.addEventListener('click', function () {
                modal.classList.add('hidden'); // Hide the modal
            });
        }
    }

    // Function to handle the price toggle
    function setupPriceToggle() {
        const toggle = document.getElementById('toggle-plan');
        if (!toggle) return; // Exit if toggle doesn't exist

        toggle.addEventListener('change', function () {
            const mensualPrices = document.querySelectorAll('.precio-mensual');
            const anualPrices = document.querySelectorAll('.precio-anual');

            mensualPrices.forEach(price => {
                price.style.display = this.checked ? 'none' : 'table-cell';
            });

            anualPrices.forEach(price => {
                price.style.display = this.checked ? 'table-cell' : 'none';
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contacto-form");
        const modal = document.getElementById("modal-confirmacion");
        const cerrarBtn = document.getElementById("cerrar-modal");
    
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita que recargue la página
            modal.classList.remove("hidden"); // Muestra el modal
            form.reset(); // Limpia el formulario si querés
        });
    
        cerrarBtn.addEventListener("click", function () {
            modal.classList.add("hidden"); // Oculta el modal
        });
    });
    

    // Function to handle the star rating
    function setupStarRating() {
        const stars = document.querySelectorAll('.star');
        if (!stars.length) return; // Exit if no stars exist

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
    }

    

    // Initialize all functions
    setupTestimonialCarousel();
    setupContactForm();
    setupPriceToggle();
    setupStarRating();
});
