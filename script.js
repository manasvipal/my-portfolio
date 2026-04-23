/**
 * 1. MODAL FUNCTIONS
 * Handles opening and closing of project popups
 */
function openModal(title, img, desc) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDesc = document.getElementById('modal-description');

    if(modalTitle) modalTitle.innerText = title;
    if(modalImage) modalImage.src = img;
    if(modalDesc) modalDesc.innerText = desc;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Stop background scroll
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Resume scroll
}

/**
 * 2. SHARED INTERSECTION OBSERVER
 * Handles all scroll-based animations
 */
document.addEventListener("DOMContentLoaded", function() {
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // ABOUT ME SECTION ANIMATION
            if (entry.target.classList.contains('about-me-section')) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    // Reset animation when scrolling away (Vanish effect)
                    entry.target.classList.remove('is-visible');
                }
            }

            // PORTFOLIO CARD ANIMATION
            if (entry.target.classList.contains('portfolio-card-container')) {
                if (entry.isIntersecting) {
                    const text = entry.target.querySelector('.boost-out-text');
                    if(text) text.classList.add('is-visible');
                }
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% visible

    // Start observing sections
    document.querySelectorAll('.about-me-section').forEach(section => {
        scrollObserver.observe(section);
    });

    const portfolioContainer = document.querySelector('.portfolio-card-container');
    if(portfolioContainer) scrollObserver.observe(portfolioContainer);
});

// Close modal if user clicks outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Heading Fill Animation
    const heading = document.querySelector('.services-main-heading');
    
    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add('fill-active');
            }
        });
    }, { threshold: 0.5 });

    headingObserver.observe(heading);

    // 2. Service Row Reveal (Number & Heading)
    const serviceRows = document.querySelectorAll('.service-row');
    
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Smooth stagger effect
                entry.target.classList.add('is-visible');
            }
        });
    }, { 
        threshold: 0.2, // Trigger when 20% of the row is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before reaching view
    });

    serviceRows.forEach(row => {
        serviceObserver.observe(row);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".service-row");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When moving INTO view
                entry.target.classList.add("is-visible");
            } else {
                // When moving OUT of view
                // This resets the animation so it can play again
                entry.target.classList.remove("is-visible");
            }
        });
    }, {
        threshold: 0.1, // Triggers as soon as 10% is visible
        rootMargin: "0px 0px -10px 0px" 
    });

    rows.forEach((row) => {
        observer.observe(row);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Fix for the "SERVICES" Main Heading ---
    const mainHeading = document.querySelector('.services-main-heading');
    
    const mainHeadingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When it enters the screen, add the fill color
                mainHeading.classList.add('fill-active');
            } else {
                // When it leaves the screen (up or down), remove the color
                // This allows it to "refill" when you come back
                mainHeading.classList.remove('fill-active');
            }
        });
    }, { threshold: 0.5 }); // Triggers when 50% of the word is visible

    if (mainHeading) mainHeadingObserver.observe(mainHeading);


    // --- 2. Fix for the Service Rows (01, 02, etc.) ---
    const rows = document.querySelectorAll(".service-row");
    const rowObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }
        });
    }, { threshold: 0.2 });

    rows.forEach((row) => rowObserver.observe(row));
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card-wrapper");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                // Optional: Remove if you want them to animate again on scroll up
                entry.target.classList.remove("is-visible");
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card) => {
        observer.observe(card);
    });
});

// ----------------------------------------------------------------


  






