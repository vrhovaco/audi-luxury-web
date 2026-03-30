function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((item) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            item.classList.add('active');
        }
    });
}

function handleHeaderScroll() {
    const header = document.getElementById('header');

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    alert(
        `Thank you, ${name}! We've received your inquiry and will contact you shortly at ${email} or ${phone}.`
    );

    form.reset();
}

function bindButtons() {
    const scheduleButton = document.getElementById('schedule-test-drive');
    const exploreButton = document.getElementById('explore-collection');
    const contactButton = document.getElementById('contact-us');
    const form = document.getElementById('contact-form');
    const detailButtons = document.querySelectorAll('.view-details');

    if (scheduleButton) {
        scheduleButton.addEventListener('click', () => scrollToSection('contact'));
    }

    if (exploreButton) {
        exploreButton.addEventListener('click', () => scrollToSection('collection'));
    }

    if (contactButton) {
        contactButton.addEventListener('click', () => scrollToSection('contact'));
    }

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    detailButtons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('Contact us for a personalized consultation');
        });
    });
}

function addCardAnimationDelay() {
    const cards = document.querySelectorAll('.vehicle-card');

    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('scroll', revealOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    bindButtons();
    addCardAnimationDelay();
    handleHeaderScroll();
    revealOnScroll();
});
