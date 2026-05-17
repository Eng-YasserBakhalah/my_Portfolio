const portfolioTailwindConfig = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-surface": "#dfe1f6",
                "secondary": "#d0bcff",
                "on-tertiary-fixed": "#001f26",
                "on-primary-fixed": "#001e2c",
                "error-container": "#93000a",
                "inverse-on-surface": "#2c303f",
                "inverse-primary": "#00668a",
                "surface-container-highest": "#303444",
                "on-secondary": "#3c0091",
                "on-primary": "#00354a",
                "secondary-fixed-dim": "#d0bcff",
                "on-primary-fixed-variant": "#004c69",
                "surface-container-low": "#171b2a",
                "primary": "#8ed5ff",
                "tertiary-fixed-dim": "#4cd7f6",
                "on-error-container": "#ffdad6",
                "on-error": "#690005",
                "primary-fixed-dim": "#7bd0ff",
                "primary-container": "#38bdf8",
                "on-secondary-fixed-variant": "#5516be",
                "surface": "#0f1321",
                "secondary-container": "#571bc1",
                "tertiary-fixed": "#acedff",
                "secondary-fixed": "#e9ddff",
                "surface-dim": "#0f1321",
                "error": "#ffb4ab",
                "surface-variant": "#303444",
                "surface-container": "#1b1f2e",
                "on-surface-variant": "#bdc8d1",
                "tertiary": "#54ddfc",
                "surface-container-lowest": "#0a0d1c",
                "surface-tint": "#7bd0ff",
                "primary-fixed": "#c4e7ff",
                "background": "#0f1321",
                "inverse-surface": "#dfe1f6",
                "on-tertiary-fixed-variant": "#004e5c",
                "outline-variant": "#3e484f",
                "on-tertiary": "#003640",
                "tertiary-container": "#29c1df",
                "on-tertiary-container": "#004b58",
                "outline": "#87929a",
                "surface-bright": "#353849",
                "on-primary-container": "#004965",
                "surface-container-high": "#262939",
                "on-background": "#dfe1f6",
                "on-secondary-fixed": "#23005c",
                "on-secondary-container": "#c4abff"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "margin-tablet": "40px",
                "section-gap": "160px",
                "gutter": "32px",
                "margin-desktop": "80px",
                "unit": "8px",
                "container-max": "1440px",
                "margin-mobile": "20px"
            },
            fontFamily: {
                "display-xl": ["Tajawal"],
                "headline-md": ["Tajawal"],
                "display-xl-mobile": ["Tajawal"],
                "body-lg": ["Tajawal"],
                "headline-lg-mobile": ["Tajawal"],
                "headline-lg": ["Tajawal"],
                "body-md": ["Tajawal"],
                "label-md": ["Tajawal"]
            },
            fontSize: {
                "display-xl": ["80px", { lineHeight: "96px", letterSpacing: "-0.04em", fontWeight: "700" }],
                "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
                "display-xl-mobile": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "600" }],
                "headline-lg": ["48px", { lineHeight: "60px", letterSpacing: "-0.02em", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }]
            }
        }
    }
};

const myWorksTailwindConfig = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "inverse-on-surface": "#2c303f",
                "tertiary-fixed": "#acedff",
                "surface-container-high": "#262939",
                "on-primary-fixed-variant": "#004c69",
                "surface-variant": "#303444",
                "on-secondary-fixed-variant": "#5516be",
                "on-primary": "#00354a",
                "on-tertiary-fixed": "#001f26",
                "secondary-container": "#571bc1",
                "surface-tint": "#7bd0ff",
                "surface-dim": "#0f1321",
                "primary-fixed-dim": "#7bd0ff",
                "tertiary-container": "#29c1df",
                "surface-container-highest": "#303444",
                "surface-bright": "#353849",
                "surface-container": "#1b1f2e",
                "on-primary-container": "#004965",
                "background": "#050816",
                "on-error-container": "#ffdad6",
                "secondary-fixed": "#e9ddff",
                "on-tertiary": "#003640",
                "on-surface-variant": "#bdc8d1",
                "on-secondary-container": "#c4abff",
                "on-tertiary-container": "#004b58",
                "on-surface": "#dfe1f6",
                "surface-container-low": "#171b2a",
                "on-background": "#dfe1f6",
                "tertiary-fixed-dim": "#4cd7f6",
                "on-error": "#690005",
                "primary": "#8ed5ff",
                "on-secondary": "#3c0091",
                "primary-container": "#38bdf8",
                "surface-container-lowest": "#0a0d1c",
                "secondary-fixed-dim": "#d0bcff",
                "tertiary": "#54ddfc",
                "secondary": "#d0bcff",
                "error": "#ffb4ab",
                "outline": "#87929a",
                "surface": "#0f1321",
                "on-secondary-fixed": "#23005c",
                "inverse-primary": "#00668a",
                "on-tertiary-fixed-variant": "#004e5c",
                "primary-fixed": "#c4e7ff",
                "on-primary-fixed": "#001e2c",
                "inverse-surface": "#dfe1f6",
                "outline-variant": "#3e484f",
                "error-container": "#93000a"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "margin-desktop": "80px",
                "section-gap": "160px",
                "gutter": "32px",
                "unit": "8px",
                "margin-tablet": "40px",
                "margin-mobile": "20px",
                "container-max": "1440px"
            },
            fontFamily: {
                "headline-lg": ["Sora", "IBM Plex Sans Arabic"],
                "display-xl": ["Sora", "IBM Plex Sans Arabic"],
                "body-md": ["IBM Plex Sans Arabic"],
                "headline-lg-mobile": ["Sora", "IBM Plex Sans Arabic"],
                "label-md": ["IBM Plex Sans Arabic"],
                "display-xl-mobile": ["Sora", "IBM Plex Sans Arabic"],
                "body-lg": ["IBM Plex Sans Arabic"],
                "headline-md": ["Sora", "IBM Plex Sans Arabic"]
            }
        }
    }
};

window.tailwind = window.tailwind || {};
window.tailwind.config = document.documentElement.dataset.page === "my-works"
    ? myWorksTailwindConfig
    : portfolioTailwindConfig;

document.addEventListener("DOMContentLoaded", () => {
    const page = document.documentElement.dataset.page;
    const nav = document.querySelector("nav");
    const scrollLinks = Array.from(document.querySelectorAll('a.scroll-link[href^="#"]'));
    const contactForm = document.getElementById("contact-form");
    const contactSubmit = document.getElementById("contact-submit");
    const formFeedback = document.getElementById("form-feedback");

    if (page === "portfolio" && nav) {
        const navLinks = Array.from(nav.querySelectorAll('.nav-menu a[href^="#"]'));
        const normalizedLinks = navLinks.filter((link) => {
            const href = link.getAttribute("href");
            return href && href.startsWith("#");
        });

        normalizedLinks.forEach((link) => link.classList.add("nav-section-link"));

        const sections = ["home", "about", "skills", "work", "services", "contact"]
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const scrollToSection = (target) => {
            const offset = nav.offsetHeight + 32;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top,
                behavior: "smooth"
            });
        };

        const setActiveLink = (id) => {
            normalizedLinks.forEach((link) => {
                const isActive = link.getAttribute("href") === `#${id}`;
                link.classList.toggle("nav-section-link-active", isActive);
                link.classList.toggle("text-primary", isActive);
                link.classList.toggle("text-on-surface-variant", !isActive);
            });
        };

        normalizedLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                const targetId = link.getAttribute("href")?.replace("#", "");
                const target = targetId ? document.getElementById(targetId) : null;

                if (!target) {
                    return;
                }

                event.preventDefault();
                scrollToSection(target);
                setActiveLink(targetId);
            });
        });

        scrollLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                const targetId = link.getAttribute("href")?.replace("#", "");
                const target = targetId ? document.getElementById(targetId) : null;

                if (!target) {
                    return;
                }

                event.preventDefault();
                scrollToSection(target);
                setActiveLink(targetId);
            });
        });

        const onScroll = () => {
            const offset = nav.offsetHeight + 48;
            let activeId = sections[0]?.id;

            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - offset) {
                    activeId = section.id;
                }
            });

            if (activeId) {
                setActiveLink(activeId);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    if (page === "portfolio" && contactForm && contactSubmit && formFeedback) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            formFeedback.textContent = "جاري إرسال الرسالة...";
            formFeedback.classList.remove("is-success", "is-error");
            contactSubmit.disabled = true;
            contactSubmit.style.opacity = "0.7";

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                contactForm.reset();
                formFeedback.textContent = "تم إرسال رسالتك بنجاح.";
                formFeedback.classList.add("is-success");
            } catch (error) {
                formFeedback.textContent = "تعذر إرسال الرسالة حالياً. حاول مرة أخرى.";
                formFeedback.classList.add("is-error");
            } finally {
                contactSubmit.disabled = false;
                contactSubmit.style.opacity = "1";
            }
        });
    }
});
