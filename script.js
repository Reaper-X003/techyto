document.addEventListener('DOMContentLoaded', () => {
            
            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.getElementById('navLinks');
            const navItems = document.querySelectorAll('.nav-link, .nav-demo-btn');

            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });

            // Close mobile menu when clicking a link
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    if(navLinks.classList.contains('show')) {
                        navLinks.classList.remove('show');
                    }
                });
            });

            // Navbar shadow on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                    navbar.style.padding = '12px 0';
                } else {
                    navbar.style.boxShadow = 'none';
                    navbar.style.padding = '16px 0';
                }
            });

            // Form Submission & Validation
            const demoForm = document.getElementById('demoForm');
            const successModal = document.getElementById('successModal');
            const closeModalBtn = document.getElementById('closeModalBtn');

            if (demoForm && successModal && closeModalBtn) {
                demoForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Basic validation is handled by HTML5 'required' attributes
                    // Show success modal
                    successModal.classList.add('active');
                    
                    // Clear form
                    demoForm.reset();
                });

                // Close Modal
                closeModalBtn.addEventListener('click', () => {
                    successModal.classList.remove('active');
                });

                // Close Modal on outside click
                successModal.addEventListener('click', (e) => {
                    if (e.target === successModal) {
                        successModal.classList.remove('active');
                    }
                });
            }
            
            // Smooth Scroll logic handling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        e.preventDefault();
                        const headerOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                        window.scrollTo({
                             top: offsetPosition,
                             behavior: "smooth"
                        });
                    }
                });
            });
        });