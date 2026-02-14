// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

function setMenuOpen(isOpen) {
    if (!burger || !nav) return;
    nav.classList.toggle('nav-active', isOpen);
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
}

function isMenuOpen() {
    return Boolean(nav?.classList.contains('nav-active'));
}

if (burger && nav) {
    burger.setAttribute('role', 'button');
    burger.setAttribute('tabindex', '0');
    burger.setAttribute('aria-label', 'Menü');
    burger.setAttribute('aria-expanded', 'false');

    burger.addEventListener('click', () => {
        setMenuOpen(!isMenuOpen());
    });

    burger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setMenuOpen(!isMenuOpen());
        }
    });

    // Close when clicking outside the menu
    document.addEventListener('click', (e) => {
        if (!isMenuOpen()) return;
        const target = e.target;
        if (!(target instanceof Node)) return;
        if (burger.contains(target)) return;
        if (nav.contains(target)) return;
        setMenuOpen(false);
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen()) {
            setMenuOpen(false);
            burger.focus();
        }
    });
}

// Close menu when clicking on a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        setMenuOpen(false);
    });
});

function setActiveLinks() {
    const path = window.location.pathname;
    const currentFile = (path.substring(path.lastIndexOf('/') + 1) || 'index.html').toLowerCase();

    const links = document.querySelectorAll('nav a[href], footer a[href]');
    links.forEach((link) => {
        const href = (link.getAttribute('href') || '').trim();
        if (!href) return;
        if (/^(https?:)?\/\//i.test(href)) return;
        if (/^(mailto:|tel:|#)/i.test(href)) return;

        const cleanHref = href.split('#')[0].split('?')[0].toLowerCase();
        const normalizedHref = cleanHref === '' || cleanHref === '/' ? 'index.html' : cleanHref;

        const isActive = normalizedHref === currentFile;
        if (isActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const statusEl = document.getElementById('formStatus');
        if (statusEl) {
            statusEl.classList.remove('success');
            statusEl.textContent = '';
        }

        const name = document.getElementById('name')?.value?.trim() || '';
        const email = document.getElementById('email')?.value?.trim() || '';
        const subject = document.getElementById('subject')?.value?.trim() || 'Anfrage über rbc-tech.ch';
        const message = document.getElementById('message')?.value?.trim() || '';

        const mailTo = 'info@rbc-tech.ch';
        const bodyLines = [
            'Hallo RBC Tech,',
            '',
            message,
            '',
            '---',
            `Name: ${name}`,
            `E-Mail: ${email}`,
        ];

        const mailtoUrl = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
        window.location.href = mailtoUrl;

        if (statusEl) {
            statusEl.classList.add('success');
            statusEl.textContent = 'Danke! Ihr E‑Mail‑Programm öffnet sich mit einer vorbefüllten Nachricht. Falls nichts passiert, schreiben Sie direkt an info@rbc-tech.ch.';
        }
        this.reset();
    });
}

// Scroll-to-top Button (optional, only if present)
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Reveal Animation (non-blocking: elements are visible by default)
function revealOnScroll(selector) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    setActiveLinks();
    revealOnScroll('.feature');
    revealOnScroll('.service-card');
    revealOnScroll('.benefit');
});