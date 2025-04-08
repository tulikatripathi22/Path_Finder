document.addEventListener('DOMContentLoaded', function() {
    if (!isLoggedIn()) {
        window.location.href = 'signin.html?redirect=dashboard.html';
        return;
    }
    initUI();
    loadUserData();
    loadQuizResults();
    loadCareerCategories();
    setupEventListeners();
});
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}
function initUI() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}
function loadUserData() {
    const username = localStorage.getItem('username') || 'User';
    const email = localStorage.getItem('email') || 'user@example.com';
    document.getElementById('user-name').textContent = username;
    document.getElementById('user-email').textContent = email;
}
function loadQuizResults() {
    const hasQuizResults = localStorage.getItem('quizResults');
    if (!hasQuizResults) {
        showEmptyState();
        return;
    }
    try {
        const quizResults = JSON.parse(localStorage.getItem('quizResults'));
        const lastQuizDate = localStorage.getItem('lastQuizDate') || new Date().toLocaleDateString();
        document.getElementById('last-quiz-date').textContent = lastQuizDate;
        createResultsChart(quizResults);
        displayTopCategories(quizResults);
        displayCareerRecommendations(quizResults);
        loadQuizHistory();
    } catch (error) {
        console.error('Error loading quiz results:', error);
        showEmptyState();
    }
}
function showEmptyState() {
    const chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-chart-bar"></i>
            <h3>No Quiz Results Yet</h3>
            <p>Take your first career assessment to see personalized results.</p>
            <a href="quiz.html" class="btn btn-primary">Take Quiz Now</a>
        </div>
    `;
    document.getElementById('top-categories').innerHTML = `
        <div class="empty-state">
            <p>Take a quiz to discover your career categories</p>
        </div>
    `;
    document.getElementById('previous-results').innerHTML = `
        <div class="empty-state">
            <p>No previous quiz results available</p>
        </div>
    `;
    document.getElementById('recommended-careers').innerHTML = `
        <div class="empty-state">
            <i class="fas fa-briefcase"></i>
            <h3>No Career Recommendations Yet</h3>
            <p>Complete your career assessment to get personalized recommendations.</p>
            <a href="quiz.html" class="btn btn-primary">Take Quiz Now</a>
        </div>
    `;
}
function createResultsChart(results) {
    const ctx = document.getElementById('results-chart').getContext('2d');
    const sortedCategories = Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5); 
    const labels = sortedCategories.map(category => category[0]);
    const data = sortedCategories.map(category => category[1]);
    const backgroundColors = [
        '#4285F4', '#EA4335', '#FBBC05', '#34A853', '#8E24AA'
    ];
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Career Category Match (%)',
                data: data,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}% match`;
                        }
                    }
                }
            }
        }
    });
}

// Display top career categories
function displayTopCategories(results) {
    const topCategoriesContainer = document.getElementById('top-categories');
    
    // Sort categories by percentage (descending)
    const sortedCategories = Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3); // Get top 3 categories
    
    // Clear previous content
    topCategoriesContainer.innerHTML = '';
    
    // Add each category
    sortedCategories.forEach(category => {
        const categoryName = category[0];
        const categoryPercentage = category[1];
        
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category-item';
        categoryElement.innerHTML = `
            <h4>${categoryName}</h4>
            <div class="progress">
                <div class="progress-bar" style="width: ${categoryPercentage}%"></div>
                <span class="percentage">${categoryPercentage}%</span>
            </div>
        `;
        
        topCategoriesContainer.appendChild(categoryElement);
    });
}

// Load available career categories
function loadCareerCategories() {
    // This would typically come from an API or database
    // For now, we'll use a hardcoded list
    const careerCategories = {
        'Technology': ['Software Developer', 'Data Scientist', 'IT Support', 'Network Administrator'],
        'Healthcare': ['Registered Nurse', 'Physical Therapist', 'Physician', 'Medical Assistant'],
        'Business': ['Accountant', 'Marketing Manager', 'Financial Analyst', 'Human Resources'],
        'Education': ['Teacher', 'Education Administrator', 'School Counselor', 'Professor'],
        'Creative Arts': ['Graphic Designer', 'Writer', 'Photographer', 'Interior Designer'],
        'Engineering': ['Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Chemical Engineer'],
        'Science': ['Biologist', 'Chemist', 'Environmental Scientist', 'Research Scientist']
    };
    
    // Store in localStorage for later use
    localStorage.setItem('careerCategories', JSON.stringify(careerCategories));
}

// Display career recommendations based on quiz results
function displayCareerRecommendations(results) {
    const recommendationsContainer = document.getElementById('recommended-careers');
    
    // Get career categories from localStorage
    const careerCategories = JSON.parse(localStorage.getItem('careerCategories')) || {};
    
    // Sort categories by percentage (descending)
    const sortedCategories = Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2); // Get top 2 categories for recommendations
    
    // Clear previous content
    recommendationsContainer.innerHTML = '<h3>Recommended Careers</h3>';
    
    // Add recommendations for each top category
    sortedCategories.forEach(category => {
        const categoryName = category[0];
        const careers = careerCategories[categoryName] || [];
        
        if (careers.length > 0) {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category-recommendations';
            
            let careersHTML = `<h4>${categoryName}</h4><ul>`;
            
            // Add each career to the list
            careers.forEach(career => {
                careersHTML += `<li><i class="fas fa-briefcase"></i> ${career}</li>`;
            });
            
            careersHTML += `</ul>
                <a href="careers.html?category=${encodeURIComponent(categoryName)}" class="btn btn-secondary">
                    Explore ${categoryName} Careers
                </a>`;
            
            categoryElement.innerHTML = careersHTML;
            recommendationsContainer.appendChild(categoryElement);
        }
    });
    
    // Add call to action
    const ctaElement = document.createElement('div');
    ctaElement.className = 'recommendations-cta';
    ctaElement.innerHTML = `
        <a href="quiz.html" class="btn btn-primary">Take Quiz Again</a>
        <a href="careers.html" class="btn btn-secondary">Browse All Careers</a>
    `;
    
    recommendationsContainer.appendChild(ctaElement);
}

// Load quiz history from localStorage
function loadQuizHistory() {
    const historyContainer = document.getElementById('previous-results');
    
    // Get quiz history from localStorage
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];
    
    // Clear previous content
    historyContainer.innerHTML = '<h3>Quiz History</h3>';
    
    if (quizHistory.length === 0) {
        historyContainer.innerHTML += `
            <div class="empty-state">
                <p>No previous quiz results available</p>
            </div>
        `;
        return;
    }
    
    // Create history list
    const historyList = document.createElement('ul');
    historyList.className = 'history-list';
    
    // Add each history entry (limit to last 5)
    quizHistory.slice(0, 5).forEach(entry => {
        const date = new Date(entry.date).toLocaleDateString();
        
        // Get top category
        const topCategory = Object.entries(entry.results)
            .sort((a, b) => b[1] - a[1])[0];
        
        const historyItem = document.createElement('li');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-date">${date}</div>
            <div class="history-category">${topCategory[0]} <span>${topCategory[1]}%</span></div>
            <button class="btn-view-details" data-date="${entry.date}">View</button>
        `;
        
        historyList.appendChild(historyItem);
    });
    
    historyContainer.appendChild(historyList);
    
    // Add event listeners to view buttons
    document.querySelectorAll('.btn-view-details').forEach(button => {
        button.addEventListener('click', function() {
            const date = this.getAttribute('data-date');
            showQuizResultDetails(date);
        });
    });
}

// Show detailed quiz result for a specific date
function showQuizResultDetails(date) {
    // Get quiz history from localStorage
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];
    
    // Find the quiz result for the specified date
    const quizResult = quizHistory.find(entry => entry.date === date);
    
    if (!quizResult) {
        console.error('Quiz result not found for date:', date);
        return;
    }
    
    // Update current display with selected quiz result
    createResultsChart(quizResult.results);
    displayTopCategories(quizResult.results);
    displayCareerRecommendations(quizResult.results);
    
    // Update date display
    document.getElementById('last-quiz-date').textContent = new Date(date).toLocaleDateString();
    
    // Highlight selected history item
    document.querySelectorAll('.history-item').forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('.btn-view-details').getAttribute('data-date') === date) {
            item.classList.add('active');
        }
    });
}

// Set up event listeners
function setupEventListeners() {
    // Sidebar navigation
    const navItems = document.querySelectorAll('.dashboard-nav li');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Take quiz button
    const quizButtons = document.querySelectorAll('a[href="quiz.html"]');
    quizButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Optional: Add any additional logic before navigating to quiz
            // e.g., saving current dashboard state
        });
    });
    
    // Logout button - FIXED HERE
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear user session
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            
            // Redirect to login page
            window.location.href = 'signin.html';
        });
    }
}