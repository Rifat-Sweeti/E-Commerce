function showDropdown() {
    document.getElementById('dropdown-content').classList.add('show');
}

function hideDropdown() {
    document.getElementById('dropdown-content').classList.remove('show');
}

const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownContents = document.getElementById('dropdown-contents');
const dropdownWrapper = document.getElementById('dropdown-wrapper');

function showDropdowns() {
    dropdownContents.classList.add('shows');
}

function hideDropdowns() {
    dropdownContents.classList.remove('shows');
}

dropdownWrapper.addEventListener('mouseenter', showDropdowns);

dropdownWrapper.addEventListener('mouseleave', hideDropdowns);

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const paginationDots = document.querySelectorAll('.pagination-dot');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.card').length;
const slidesPerPage = 1;
const totalPages = Math.ceil(totalSlides / slidesPerPage);

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * (100 / totalPages)}%)`;
    paginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

nextButton.addEventListener('click', () => {
    if (currentSlide < totalPages - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalPages - 1;
    }
    updateSlider();
});

paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

updateSlider();