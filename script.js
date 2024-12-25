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

    // Header Shadow on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-links");
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("show");
    });

    // Close Menu on Link Click (Mobile)
    navMenu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            hamburgerMenu.classList.remove("active");
            navMenu.classList.remove("show");
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

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.innerText = "⬆";
    backToTop.id = "back-to-top";
    backToTop.style.position = "fixed";
    backToTop.style.right = "20px";
    backToTop.style.bottom = "20px";
    backToTop.style.width = "50px";
    backToTop.style.height = "50px";
    backToTop.style.fontSize = "1.5rem";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.backgroundColor = "#B388EB";
    backToTop.style.color = "#FFFFFF";
    backToTop.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
    backToTop.style.cursor = "pointer";
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
    backToTop.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";
        } else {
            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
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
