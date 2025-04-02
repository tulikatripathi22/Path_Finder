document.addEventListener('DOMContentLoaded', function() {
    // Handle FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Form validation
            let valid = true;
            const requiredFields = ['name', 'email', 'subject', 'message'];
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                
                if (!formData[field]) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (formData.email && !emailRegex.test(formData.email)) {
                valid = false;
                document.getElementById('email').classList.add('error');
            }
            
            if (valid) {
                // In a real application, you would send this data to a server
                console.log('Form submitted:', formData);
                
                // Show success message
                showFormMessage('success', 'Thank you for your message! We will get back to you shortly.');
                
                // Reset form
                contactForm.reset();
            } else {
                showFormMessage('error', 'Please fill in all required fields correctly.');
            }
        });
    }
    
    // Function to show form message
    function showFormMessage(type, message) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}-message`;
        messageElement.textContent = message;
        
        // Add to DOM
        contactForm.appendChild(messageElement);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageElement.classList.add('fadeOut');
            setTimeout(() => {
                messageElement.remove();
            }, 500);
        }, 5000);
    }
    
    // Add CSS for form validation and messages
    const style = document.createElement('style');
    style.textContent = `
        .error {
            border-color: var(--danger-color) !important;
            box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.1) !important;
        }
        
        .form-message {
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 5px;
            animation: fadeIn 0.3s ease;
        }
        
        .success-message {
            background-color: rgba(76, 175, 80, 0.1);
            color: #4caf50;
            border: 1px solid #4caf50;
        }
        
        .error-message {
            background-color: rgba(244, 67, 54, 0.1);
            color: #f44336;
            border: 1px solid #f44336;
        }
        
        .fadeOut {
            animation: fadeOut 0.5s ease forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
    `;
    
    document.head.appendChild(style);
});