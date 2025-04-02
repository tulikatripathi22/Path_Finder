document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Learn More button functionality
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const learnMoreSection = document.getElementById('learnMoreSection');
    
    if (learnMoreBtn && learnMoreSection) {
        learnMoreBtn.addEventListener('click', function() {
            learnMoreSection.classList.remove('hidden');
            learnMoreSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Animate career path
    animateCareerPath();
    
    // Testimonial slider (could be expanded)
    initTestimonialSlider();
});

// Function to animate the career path
function animateCareerPath() {
    const nodes = document.querySelectorAll('.node');
    const pathLines = document.querySelectorAll('.path-line');
    
    // Initial setup - hide all nodes and lines
    nodes.forEach((node, index) => {
        node.style.opacity = '0';
        node.style.transform = 'scale(0.5)';
    });
    
    pathLines.forEach(line => {
        line.style.width = '0';
        line.style.opacity = '0';
    });
    
    // Animate nodes and lines in sequence
    setTimeout(() => {
        let delay = 300;
        
        nodes.forEach((node, index) => {
            setTimeout(() => {
                node.style.opacity = '1';
                node.style.transform = 'scale(1)';
                node.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                
                // Animate path line after node (if not the last node)
                if (index < pathLines.length) {
                    setTimeout(() => {
                        pathLines[index].style.width = '50px';
                        pathLines[index].style.opacity = '1';
                        pathLines[index].style.transition = 'all 0.4s ease';
                    }, 200);
                }
            }, delay * index);
        });
    }, 800);
    
    // Add hover effects to simulate user journey
    simulateJourney();
}

// Function to simulate a journey through the career path
function simulateJourney() {
    const nodes = document.querySelectorAll('.node');
    
    setTimeout(() => {
        const interval = setInterval(() => {
            const randomNode = Math.floor(Math.random() * nodes.length);
            
            // Pulse animation
            nodes[randomNode].style.transform = 'scale(1.15)';
            nodes[randomNode].style.backgroundColor = 'var(--primary-color)';
            
            nodes[randomNode].querySelector('i').style.color = 'white';
            
            setTimeout(() => {
                nodes[randomNode].style.transform = 'scale(1)';
                if (randomNode === 0) {
                    nodes[randomNode].style.backgroundColor = 'var(--accent-color)';
                } else if (randomNode === nodes.length - 1) {
                    nodes[randomNode].style.backgroundColor = 'var(--success-color)';
                } else {
                    nodes[randomNode].style.backgroundColor = 'white';
                    nodes[randomNode].querySelector('i').style.color = 'var(--primary-color)';
                }
            }, 800);
        }, 2000);
        
        // Clear interval after some time to prevent infinite animation
        setTimeout(() => {
            clearInterval(interval);
        }, 30000);
    }, 4000);
}

// Function to initialize testimonial slider
function initTestimonialSlider() {
    const testimonials = [
        {
            text: "PathFinder helped me pivot from marketing to UX design by identifying my transferable skills and suggesting targeted courses. I landed my dream job within 6 months!",
            author: "Sarah J., UX Designer"
        },
        {
            text: "After 10 years in finance, I was burning out. PathFinder's assessment tools helped me discover my passion for teaching. Now I'm a financial literacy instructor and I've never been happier.",
            author: "Michael T., Financial Educator"
        },
        {
            text: "As a recent graduate with no clear direction, PathFinder gave me the clarity I needed. Their industry insights helped me choose data science, and their roadmap guided my learning journey.",
            author: "Aisha K., Data Analyst"
        }
    ];
    
    const testimonialContainer = document.querySelector('.testimonial-slider');
    let currentIndex = 0;
    
    if (testimonialContainer) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            
            const newTestimonial = document.createElement('div');
            newTestimonial.classList.add('testimonial');
            newTestimonial.style.opacity = '0';
            
            newTestimonial.innerHTML = `
                <p>"${testimonials[currentIndex].text}"</p>
                <div class="testimonial-author">- ${testimonials[currentIndex].author}</div>
            `;
            
            testimonialContainer.appendChild(newTestimonial);
            
            // Fade out current testimonial
            const currentTestimonial = testimonialContainer.querySelector('.testimonial:first-child');
            currentTestimonial.style.opacity = '0';
            currentTestimonial.style.transition = 'opacity 0.5s ease';
            
            // Fade in new testimonial
            setTimeout(() => {
                currentTestimonial.remove();
                newTestimonial.style.opacity = '1';
                newTestimonial.style.transition = 'opacity 0.5s ease';
            }, 500);
            
        }, 2000);
    }
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add dynamic typing effect for hero section
const dynamicText = document.querySelector('.hero-content h1');
if (dynamicText) {
    const phrases = [
        'Discover Your Perfect Career Path',
        'Find Your Professional Purpose',
        'Navigate Your Career Journey',
        'Unlock Your Career Potential'
    ];
    
    let currentPhraseIndex = 0;
    
    function updateDynamicText() {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        
        // Fade out
        dynamicText.style.opacity = '0';
        
        setTimeout(() => {
            dynamicText.textContent = phrases[currentPhraseIndex];
            // Fade in
            dynamicText.style.opacity = '1';
        }, 500);
    }
    
    // Change text every 5 seconds
    setInterval(updateDynamicText, 2000);
}