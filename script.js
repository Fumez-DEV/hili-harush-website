document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Behavior
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button, .cta-button-hero, .cta-button-about, .cta-button-pricing');
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust offset for sticky header
                        behavior: "smooth",
                    });
                }
            }
        });
    });

    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Portfolio Item Animation
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(item => {
        item.addEventListener("click", () => {
            const label = item.getAttribute("data-label") || "Portfolio Item";
            alert(`Clicked on: ${label}`);
        });
    });

    // Lazy Loading for Portfolio Images
    const lazyLoadImages = () => {
        const images = document.querySelectorAll(".portfolio-item img");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src; // Replace with actual image source
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    };
    lazyLoadImages();

    // Contact Items Hover Effects
    const contactItems = document.querySelectorAll(".contact-item");
    contactItems.forEach(item => {
        const icon = item.querySelector("i");
        item.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
        });
        item.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // Highlight Section on Scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll(".nav-links a").forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    }, { threshold: 0.6 });
    sections.forEach(section => observer.observe(section));
});
