// script.js (FINAL MULTI-PAGE VERSION)

document.addEventListener('DOMContentLoaded', function() {
    
    // --- মোবাইল মেনু (Hamburger) লজিক ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // === ১০ নম্বর লাইনের ভুল কোডটি এখান থেকে মুছে ফেলা হয়েছে ===

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // মেনু লিঙ্ক বা বাইরে ক্লিক করলে মেনু বন্ধ করা
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        // নতুন ট্যাবে খোলার লিঙ্ক ছাড়া (যেমন ব্লগ) বাকিগুলো ক্লিক করলে মেনু বন্ধ হবে
        if (!n.getAttribute('target')) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }));
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });


    // --- টাইপিং অ্যানিমেশন (শুধু হোম পেজের জন্য) ---
    const typingText = document.getElementById('typing-text');
    
    // === এই 'if' চেকটিই হলো আপনার প্রধান "বাগ ফিক্স" ===
    // এটি চেক করে যে 'typing-text' এলিমেন্টটি এই পেজে আছে কিনা।
    if (typingText) {
        
        // === আপগ্রেড: ৩২ নম্বর লাইনের কোডটি পরিবর্তন করা হয়েছে ===
        const texts = ["Full-Stack Developer", "Modern Web Expert", "Frontend Specialist"];
        
        let textIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < texts[textIndex].length) {
                typingText.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }

        type();
    } // 'if (typingText)' শেষ

    // --- ফেড-ইন অ্যানিমেশন (সব পেজের জন্য) ---
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});