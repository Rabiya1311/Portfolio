  // Tailwind Script
        tailwind.config = {
            content: [],
            theme: {
                extend: {}
            }
        }

        // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });

        // Close mobile menu when clicking links
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navHeight = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Experience Data
        const experiences = [
            {
                title: "Essentials of AI",
                company: "Bano Qabil Sahiwal",
                duration: "2025 — Present",
                points: [
                    "Currently learning fundamentals of Artificial Intelligence and its practical applications",
                    "Working on AI-integrated assignments and small projects",
                    "Enhancing logical thinking and problem-solving skills"
                ]
            },
            {
                title: "Front-End Development",
                company: "Bano Qabil Sahiwal",
                duration: "2024 — 2025",
                points: [
                    "Completed intensive Front-End Development training",
                    "Built multiple responsive and interactive web projects",
                    "Mastered HTML, CSS, Tailwind CSS, and JavaScript"
                ]
            },
            {
                title: "Web Development",
                company: "Bano Qabil Sahiwal",
                duration: "2024",
                points: [
                    "Completed comprehensive Web Development course",
                    "Developed various websites through assignments and final projects",
                    "Learned core web development principles and best practices"
                ]
            }
        ];

        function showExperience(index) {
            const contentDiv = document.getElementById('experience-content');
            
            let html = `
                <div class="bg-[#112240] p-8 rounded-2xl">
                    <div class="flex justify-between items-start mb-8">
                        <div>
                            <h3 class="text-2xl font-semibold text-white">${experiences[index].title}</h3>
                            <p class="text-[#64ffda] mt-1">${experiences[index].company}</p>
                        </div>
                        <p class="text-slate-400 font-medium">${experiences[index].duration}</p>
                    </div>
                    
                    <ul class="space-y-4 text-slate-400">
            `;

            experiences[index].points.forEach(point => {
                html += `
                    <li class="flex gap-3">
                        <span class="text-[#64ffda] mt-1">▹</span>
                        ${point}
                    </li>
                `;
            });

            html += `</ul></div>`;
            contentDiv.innerHTML = html;

            // Update active tab
            document.querySelectorAll('.tab-button').forEach((btn, i) => {
                if (i === index) {
                    btn.classList.add('active', 'bg-slate-800');
                } else {
                    btn.classList.remove('active', 'bg-slate-800');
                }
            });
        }

        // Show first experience by default
        window.onload = () => {
            showExperience(0);
        };

        // Intersection Observer for fade-in animations
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.15
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Keyboard accessibility for mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });