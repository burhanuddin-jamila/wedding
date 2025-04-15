document.addEventListener('DOMContentLoaded', function() {
    // Create confetti elements
    function createConfetti() {
        const colors = ['#ffb6c1', '#ffd3b6', '#d4a5a5', '#ffd1dc', '#f8c8dc'];
        const container = document.querySelector('.confetti-container');
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
            confetti.style.animationDelay = (Math.random() * 5) + 's';
            
            // Random shape
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            } else {
                confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
            }
            
            container.appendChild(confetti);
        }
    }

    // Add GSAP animations to images
    function animateImages() {
        gsap.from("#img1", {
            duration: 1.5,
            scale: 0.9,
            opacity: 0,
            rotation: -5,
            ease: "back.out(1.7)"
        });

        gsap.from("#img2", {
            duration: 1.5,
            scale: 0.9,
            opacity: 0,
            rotation: 5,
            ease: "back.out(1.7)",
            delay: 0.5
        });

        // Add hover animation
        const images = document.querySelectorAll('.wedding-image');
        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                gsap.to(img, {
                    duration: 0.3,
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                    ease: "power1.out"
                });
            });
            img.addEventListener('mouseleave', () => {
                gsap.to(img, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                    ease: "power1.out"
                });
            });
        });
    }

    // Initialize animations
    createConfetti();
    animateImages();
});