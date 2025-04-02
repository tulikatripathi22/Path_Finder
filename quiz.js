// Quiz Questions
const quizQuestions = [
    {
        question: "Which of these activities do you enjoy most?",
        options: [
            "Solving complex problems and puzzles",
            "Creating art or designing things",
            "Helping and teaching others",
            "Organizing and planning events"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "In a group project, which role do you naturally take on?",
        options: [
            "The researcher who gathers information",
            "The innovator who comes up with new ideas",
            "The mediator who ensures everyone works well together",
            "The planner who keeps everyone on schedule"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "Which of these subjects did/do you enjoy most in school?",
        options: [
            "Mathematics or Science",
            "Art, Music or Literature",
            "Psychology or Communications",
            "Business or Economics"
        ],
        categories: ["analytical", "creative", "social", "practical"]
    },
    {
        question: "How do you prefer to solve problems?",
        options: [
            "Analyzing data and finding patterns",
            "Thinking outside the box with creative solutions",
            "Discussing with others to reach a consensus",
            "Following established procedures and best practices"
        ],
        categories: ["analytical", "creative", "social", "practical"]
    },
    {
        question: "Which environment do you work best in?",
        options: [
            "Quiet spaces where I can focus deeply",
            "Inspiring spaces with room for expression",
            "Collaborative spaces with team interaction",
            "Structured environments with clear expectations"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "Which skills are you most confident in?",
        options: [
            "Logic, analysis, and critical thinking",
            "Imagination, design, and artistic expression",
            "Communication, empathy, and relationship building",
            "Planning, organization, and attention to detail"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "When learning something new, how do you prefer to approach it?",
        options: [
            "Understanding the theory and principles behind it",
            "Experimenting and finding my own way",
            "Learning from someone else or in a group setting",
            "Following step-by-step instructions"
        ],
        categories: ["analytical", "creative", "social", "practical"]
    },
    {
        question: "Which of these activities would you find most satisfying in a job?",
        options: [
            "Conducting research or analyzing data",
            "Designing or creating something original",
            "Mentoring others or providing guidance",
            "Managing projects and improving efficiency"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "How important is it that your work makes a direct impact on others?",
        options: [
            "I prefer working on challenging problems regardless of immediate impact",
            "I enjoy creating things that others appreciate",
            "Making a positive difference in people's lives is essential to me",
            "I value contributing to efficient, well-run systems"
        ],
        categories: ["analytical", "creative", "social", "practical"]
    },
    {
        question: "Which of these workplace values is most important to you?",
        options: [
            "Intellectual stimulation and continuous learning",
            "Freedom to innovate and express creativity",
            "Supportive culture and meaningful relationships",
            "Stability and clear structure"
        ],
        categories: ["analytical", "creative", "social", "practical"]
    },
    {
        question: "How do you handle deadlines and pressure?",
        options: [
            "Break problems down logically and tackle them systematically",
            "Find innovative shortcuts or alternative approaches",
            "Seek support from others or delegate when appropriate",
            "Create detailed plans and stick to organized schedules"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "Which technology tools do you enjoy using most?",
        options: [
            "Data analysis software or programming languages",
            "Design, editing, or creative software",
            "Communication and collaboration platforms",
            "Project management and organization tools"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "How would you prefer to spend a free afternoon?",
        options: [
            "Learning about a complex topic or solving challenging puzzles",
            "Creating art, writing, or engaging in a creative hobby",
            "Spending time with friends or volunteering",
            "Organizing your space or planning future activities"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "Which of these compliments would you be most proud to receive?",
        options: [
            "You're so intelligent and logical",
            "You're incredibly creative and innovative",
            "You're such a good listener and supporter",
            "You're amazingly organized and reliable"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    },
    {
        question: "Which of these would you find most frustrating in a job?",
        options: [
            "Lack of intellectual challenge or monotonous work",
            "Rigid rules that limit creative expression",
            "Working in isolation with limited human interaction",
            "Disorganization and unpredictable schedules"
        ],
        categories: ["analytical", "creative", "social", "organizational"]
    }
];

// Career Categories and Recommendations
const careerCategories = {
    analytical: {
        title: "Analytical Thinking",
        careers: [
            {
                title: "Data Scientist",
                description: "Analyze complex data sets to identify trends and insights that help organizations make better decisions."
            },
            {
                title: "Software Engineer",
                description: "Design and build applications and systems that solve problems through code and logical thinking."
            },
            {
                title: "Research Analyst",
                description: "Conduct in-depth research to provide insights and recommendations in specialized fields."
            }
        ]
    },
    creative: {
        title: "Creative Expression",
        careers: [
            {
                title: "UX/UI Designer",
                description: "Create intuitive, engaging digital experiences that combine aesthetics with functionality."
            },
            {
                title: "Content Creator",
                description: "Produce engaging written, visual, or multimedia content for various platforms and audiences."
            },
            {
                title: "Marketing Specialist",
                description: "Develop creative campaigns that connect products and services with target audiences."
            }
        ]
    },
    social: {
        title: "Social Impact",
        careers: [
            {
                title: "Human Resources Specialist",
                description: "Support organizational culture and employee development through people-centered policies and programs."
            },
            {
                title: "Teacher/Trainer",
                description: "Educate and empower others through effective communication and supportive guidance."
            },
            {
                title: "Counselor/Therapist",
                description: "Help individuals navigate challenges and improve their mental and emotional wellbeing."
            }
        ]
    },
    organizational: {
        title: "Organizational Skills",
        careers: [
            {
                title: "Project Manager",
                description: "Coordinate resources, timelines, and teams to successfully complete projects and initiatives."
            },
            {
                title: "Operations Manager",
                description: "Ensure organizational systems run efficiently and effectively to achieve business goals."
            },
            {
                title: "Financial Analyst",
                description: "Organize and analyze financial data to support strategic decision-making and planning."
            }
        ]
    },
    practical: {
        title: "Practical Application",
        careers: [
            {
                title: "Engineering Technician",
                description: "Apply technical knowledge to solve real-world problems and implement practical solutions."
            },
            {
                title: "Healthcare Professional",
                description: "Provide hands-on care and support to improve patient health and wellbeing."
            },
            {
                title: "Trades Specialist",
                description: "Use specialized skills to build, repair, or maintain essential infrastructure and systems."
            }
        ]
    }
};

// DOM Elements
const landingPage = document.getElementById('landing-page');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const progress = document.getElementById('progress');
const questionCounter = document.getElementById('question-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const getStartedBtn = document.getElementById('get-started');
const restartQuizBtn = document.getElementById('restart-quiz');
const recommendationsList = document.getElementById('recommendations-list');

// State variables
let currentQuestionIndex = 0;
let userResponses = [];

// Initialize the application
function init() {
    getStartedBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    restartQuizBtn.addEventListener('click', resetQuiz);
    
    // Pre-populate userResponses with null values
    userResponses = new Array(quizQuestions.length).fill(null);
}

// Start the quiz
function startQuiz() {
    landingPage.classList.remove('active');
    quizContainer.classList.add('active');
    loadQuestion(0);
}

// Load a question
function loadQuestion(index) {
    const question = quizQuestions[index];
    
    // Update progress
    progress.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;
    questionCounter.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    
    // Create question HTML
    let questionHTML = `
        <div class="question">
            <div class="question-title">${question.question}</div>
            <div class="options">
    `;
    
    // Add options
    question.options.forEach((option, optionIndex) => {
        const isSelected = userResponses[index] === optionIndex;
        questionHTML += `
            <div class="option ${isSelected ? 'selected' : ''}">
                <input type="radio" id="option-${optionIndex}" name="question-${index}" value="${optionIndex}" ${isSelected ? 'checked' : ''}>
                <label for="option-${optionIndex}">${option}</label>
            </div>
        `;
    });
    
    questionHTML += `
            </div>
        </div>
    `;
    
    // Add question to the DOM
    questionContainer.innerHTML = questionHTML;
    
    // Add event listeners to options
    const options = document.querySelectorAll('.option');
    options.forEach((option, optionIndex) => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Update user response
            userResponses[index] = optionIndex;
            
            // Enable next button
            nextBtn.disabled = false;
        });
    });
    
    // Enable/disable navigation buttons
    prevBtn.disabled = index === 0;
    
    if (index === quizQuestions.length - 1) {
        nextBtn.textContent = 'See Results';
    } else {
        nextBtn.textContent = 'Next';
    }
    
    // Disable next button if no option is selected
    nextBtn.disabled = userResponses[index] === null;
}

// Go to the previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Go to the next question or show results
function goToNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    quizContainer.classList.remove('active');
    resultsContainer.classList.add('active');
    
    // Calculate results
    const results = calculateResults();
    
    // Create and render chart
    createResultsChart(results);
    
    // Show career recommendations
    showRecommendations(results);
}

// Calculate quiz results
function calculateResults() {
    const categoryCounts = {
        analytical: 0,
        creative: 0,
        social: 0,
        organizational: 0,
        practical: 0
    };
    
    // Count responses by category
    userResponses.forEach((response, index) => {
        if (response !== null) {
            const category = quizQuestions[index].categories[response];
            categoryCounts[category]++;
        }
    });
    
    // Convert to percentages (out of total possible for each category)
    const categoryPercentages = {};
    
    for (const category in categoryCounts) {
        // Count how many questions have this category as an option
        const possibleQuestions = quizQuestions.filter(q => q.categories.includes(category)).length;
        categoryPercentages[category] = (categoryCounts[category] / possibleQuestions) * 100;
    }
    
    return categoryPercentages;
}

// Create results chart
function createResultsChart(results) {
    const ctx = document.getElementById('results-chart').getContext('2d');
    
    // Sort categories by percentage (descending)
    const sortedCategories = Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);
    
    const chartLabels = sortedCategories.map(category => careerCategories[category].title);
    const chartData = sortedCategories.map(category => results[category]);
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Match Percentage',
                data: chartData,
                backgroundColor: [
                    'rgba(71, 118, 230, 0.8)',
                    'rgba(142, 84, 233, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(241, 196, 15, 0.8)'
                ],
                borderColor: [
                    'rgba(71, 118, 230, 1)',
                    'rgba(142, 84, 233, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Show career recommendations
function showRecommendations(results) {
    recommendationsList.innerHTML = '';
    
    // Get top 2 categories
    const topCategories = Object.entries(results)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(entry => entry[0]);
    
    // Display careers for top categories
    topCategories.forEach(category => {
        const categoryData = careerCategories[category];
        
        categoryData.careers.forEach((career, index) => {
            const recommendationItem = document.createElement('div');
            recommendationItem.className = 'recommendation-item';
            
            recommendationItem.innerHTML = `
                <div class="recommendation-title">${career.title}</div>
                <div class="recommendation-desc">${career.description}</div>
            `;
            
            recommendationsList.appendChild(recommendationItem);
            
            // Add staggered animation
            setTimeout(() => {
                recommendationItem.classList.add('visible');
            }, 200 * index);
        });
    });
}

// Reset quiz to start over
function resetQuiz() {
    currentQuestionIndex = 0;
    userResponses = new Array(quizQuestions.length).fill(null);
    
    resultsContainer.classList.remove('active');
    landingPage.classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);