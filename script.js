  // Tailwind Script
        tailwind.config = {
            content: [],
            theme: {
                extend: {}
            }
        }

        
           // Mobile Menu with Backdrop & Smooth Animation
         const mobileBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const overlay   = document.getElementById('drawer-overlay');
const closeBtn  = document.getElementById('close-menu');

function openMobileMenu() {
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    document.body.style.overflow = 'hidden'; // prevent background scroll
    mobileBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    document.querySelectorAll('.nav-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(18px)';
        el.style.transition = `opacity .22s ease ${i * 55 + 70}ms, transform .22s ease ${i * 55 + 70}ms`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
        }));
    });
}

function closeMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = ''; // restore scroll
    mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

mobileBtn.addEventListener('click', () =>
    mobileMenu.classList.contains('translate-x-full') ? openMobileMenu() : closeMobileMenu()
);
closeBtn.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile-link').forEach(l =>
    l.addEventListener('click', () => setTimeout(closeMobileMenu, 120))
);
document.addEventListener('keydown', e => e.key === 'Escape' && closeMobileMenu());

// ==================== TYPEWRITER ====================
// ── Typewriter ──────────────────────────────────────
(function () {
    const words  = ['clean UIs.', 'web magic.', 'fast apps.', 'bold ideas.'];
    const target = document.getElementById('typeTarget');
    let wi = 0, ci = 0, dir = 1;

    function tick() {
        const w = words[wi];
        if (dir === 1) {
            target.textContent = w.slice(0, ++ci);
            if (ci === w.length) { dir = -1; setTimeout(tick, 1600); return; }
            setTimeout(tick, 68);
        } else {
            target.textContent = w.slice(0, --ci);
            if (ci === 0) { wi = (wi + 1) % words.length; dir = 1; setTimeout(tick, 320); return; }
            setTimeout(tick, 38);
        }
    }
    setTimeout(tick, 1200);
})();

// ── Particle canvas ──────────────────────────────────
(function () {
    const canvas = document.getElementById('heroCanvas');
    const ctx    = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 28; i++) {
        particles.push({
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            r: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.4 + 0.15,
            opacity: Math.random() * 0.3 + 0.05,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            p.y -= p.speed;
            if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
            ctx.beginPath();
            ctx.arc(p.x % W, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100,255,218,${p.opacity})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
})();


// ── About Section Animations ────────────────────────
(function () {
    // Scroll reveal
    const reveals = document.querySelectorAll('.about-reveal');
    const observer = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('in'), i * 60);
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // Skill bars — animate when section enters view
    const skillSection = document.querySelector('#about');
    let barsAnimated = false;
    const barObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !barsAnimated) {
            barsAnimated = true;
            setTimeout(() => {
                document.querySelectorAll('.skill-bar').forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
            }, 500);
        }
    }, { threshold: 0.2 });
    if (skillSection) barObserver.observe(skillSection);

    // Count-up numbers
    function countUp(id, target, suffix = '') {
        const el = document.getElementById(id);
        if (!el) return;
        let n = 0;
        const step = Math.ceil(target / 28);
        const timer = setInterval(() => {
            n = Math.min(n + step, target);
            el.textContent = n + suffix;
            if (n >= target) clearInterval(timer);
        }, 45);
    }
    const countObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setTimeout(() => {
                countUp('cnt-projects', 12, '+');
                countUp('cnt-tech', 7, '+');
                countUp('cnt-years', 1, 'yr');
            }, 400);
            countObserver.disconnect();
        }
    }, { threshold: 0.3 });
    if (skillSection) countObserver.observe(skillSection);
})();


        // // Experience Data

const experiences = [
    {
        title: "Essentials of AI",
        company: "Bano Qabil Sahiwal",
        duration: "2026 — Present",
        current: true,
        points: [
            "Learning fundamentals of Artificial Intelligence and its practical applications in real-world scenarios",
            "Working on AI-integrated assignments and small projects to apply theoretical concepts",
            "Enhancing logical thinking and structured problem-solving skills through hands-on exercises"
        ]
    },
    {
        title: "Front-End Development",
        company: "Bano Qabil Sahiwal",
        duration: "2026",
        current: false,
        points: [
            "Completed intensive Front-End Development training focused on production-ready UI patterns",
            "Built multiple responsive and interactive web projects with clean, accessible code",
            "Mastered HTML, CSS, Tailwind CSS, and JavaScript with a focus on modern design systems"
        ]
    },
    {
        title: "Web Development",
        company: "Bano Qabil Sahiwal",
        duration: "2025 — 2026",
        current: false,
        points: [
            "Completed comprehensive Web Development course covering full-stack fundamentals",
            "Developed various websites through structured assignments and a final capstone project",
            "Learned core web development principles, best practices, and version control with Git"
        ]
    }
];

function showExp(index) {
    document.querySelectorAll('.exp-tab').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    const e = experiences[index];
    const badge = e.current
        ? `<span class="inline-flex items-center gap-2 font-mono text-[10px] tracking-[2px] text-[#64ffda] bg-[#64ffda]/[0.06] border border-[#64ffda]/15 rounded px-3 py-1.5 mb-5">
               <span class="w-1.5 h-1.5 rounded-full bg-[#64ffda] animate-pulse"></span>Current
           </span>`
        : `<span class="inline-flex items-center font-mono text-[10px] tracking-[2px] text-[#64ffda]/60 bg-[#64ffda]/[0.04] border border-[#64ffda]/10 rounded px-3 py-1.5 mb-5">Completed</span>`;

    const points = e.points.map(p =>
        `<li class="flex gap-3 items-start">
            <span class="text-[#64ffda] text-[11px] mt-[3px] flex-shrink-0">▹</span>
            <span class="font-mono text-[13px] text-slate-400 leading-[1.9] tracking-[0.3px]">${p}</span>
         </li>`
    ).join('');

    document.getElementById('experience-content').innerHTML = `
        <div style="animation: heroFadeUp 0.35s cubic-bezier(0.16,1,0.3,1) forwards">
            ${badge}
            <h3 class="font-mono text-xl font-bold text-[#ccd6f6] tracking-tight mb-1">${e.title}</h3>
            <p class="font-mono text-[12px] text-[#64ffda] tracking-wider mb-1">@ ${e.company}</p>
            <p class="font-mono text-[11px] text-slate-500 tracking-widest mb-7">${e.duration}</p>
            <div class="h-px bg-[#64ffda]/08 mb-6"></div>
            <ul class="flex flex-col gap-4">${points}</ul>
        </div>`;
}

// init + scroll reveal
showExp(0);

const expSection = document.querySelector('#experience');
const expObserver = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 80);
            expObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.exp-reveal').forEach(el => expObserver.observe(el));


// Projects scroll reveal
const projObserver = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 80);
            projObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.proj-reveal').forEach(el => projObserver.observe(el));


// Contact scroll reveal
const contactObserver = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 80);
            contactObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.contact-reveal').forEach(el => contactObserver.observe(el));
     

            // Update active tab
            document.querySelectorAll('.tab-button').forEach((btn, i) => {
                if (i === index) {
                    btn.classList.add('active', 'bg-slate-800');
                } else {
                    btn.classList.remove('active', 'bg-slate-800');
                }
            });
        

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