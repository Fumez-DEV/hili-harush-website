document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Behavior
    const initSmoothScroll = () => {
        const navLinks = document.querySelectorAll('.nav-links a, .cta-button, .cta-button-hero, .cta-button-about, .cta-button-pricing');
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const targetId = link.getAttribute("href");
                if (targetId.startsWith("#")) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70, // Adjust for sticky header
                            behavior: "smooth",
                        });
                    }
                }
            });
        });
    };

    // Header Scroll Effect
    const initHeaderScrollEffect = () => {
        const header = document.querySelector("header");
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    };

    // Portfolio Item Click Handler
    const initPortfolioClickHandler = () => {
        const portfolioItems = document.querySelectorAll(".portfolio-item");
        portfolioItems.forEach(item => {
            item.addEventListener("click", () => {
                const label = item.getAttribute("data-label") || "Portfolio Item";
                console.log(`Clicked on: ${label}`);
            });
        });
    };

    // Lazy Loading for Portfolio Images
    const initLazyLoading = () => {
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

    // Contact Item Hover Effects
    const initContactHoverEffects = () => {
        const contactItems = document.querySelectorAll(".contact-item");
        contactItems.forEach(item => {
            const icon = item.querySelector("i");
            item.addEventListener("mouseenter", () => (icon.style.transform = "scale(1.2)"));
            item.addEventListener("mouseleave", () => (icon.style.transform = "scale(1)"));
        });
    };

    // Highlight Navigation on Scroll
    const initSectionHighlightOnScroll = () => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        document.querySelectorAll(".nav-links a").forEach(link => {
                            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                        });
                    }
                });
            },
            { threshold: 0.6 }
        );
        sections.forEach(section => observer.observe(section));
    };

    // FAQ Toggle Behavior
    const initFaqToggle = () => {
        const faqItems = document.querySelectorAll(".faq-item");
        faqItems.forEach(item => {
            const question = item.querySelector(".faq-question");
            question.addEventListener("click", () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                    }
                });
                item.classList.toggle("active");
            });
        });
    };

    // Initialize all features
    initSmoothScroll();
    initHeaderScrollEffect();
    initPortfolioClickHandler();
    initLazyLoading();
    initContactHoverEffects();
    initSectionHighlightOnScroll();
    initFaqToggle();
});
