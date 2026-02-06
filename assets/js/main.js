document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                menuBtn.classList.add('text-brand-wood');
            } else {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                menuBtn.classList.remove('text-brand-wood');
            }
        });
    }

    // --- Scroll Reveal Observer ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach(el => {
        observer.observe(el);
    });

    // --- Portfolio Filter (Realisations Page) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update Active State
                filterButtons.forEach(b => {
                    b.classList.remove('bg-slate-900', 'text-white');
                    b.classList.add('bg-white', 'text-slate-500');
                });
                btn.classList.remove('bg-white', 'text-slate-500');
                btn.classList.add('bg-slate-900', 'text-white');

                const category = btn.getAttribute('data-filter');

                projectItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (category === 'Tous' || itemCategory === category) {
                        item.style.display = 'block';
                        // Small timeout to allow display:block to render before opacity transition could be added here
                        setTimeout(() => item.classList.remove('opacity-50', 'scale-95'), 50);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Navbar Scroll State ---
    const navbar = document.querySelector('header');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('border-slate-900/10', 'py-3');
                navbar.classList.remove('border-transparent', 'py-5');
            } else {
                navbar.classList.remove('border-slate-900/10', 'py-3');
                navbar.classList.add('border-transparent', 'py-5');
            }
        });
    }
});
