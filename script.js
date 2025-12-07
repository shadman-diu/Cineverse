// ========================================
// SAMPLE MOVIE & SERIES DATA
// ========================================

const moviesData = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
        imdb_rating: 9.3,
        genre: "Drama",
        type: "Movie",
        release_year: 1994,
        trending_score: 95
    },
    {
        id: 2,
        title: "Breaking Bad",
        poster: "https://images.unsplash.com/photo-1574267432644-f610a4ab9a6c?w=400&h=600&fit=crop",
        imdb_rating: 9.5,
        genre: "Crime",
        type: "Series",
        release_year: 2008,
        trending_score: 98
    },
    {
        id: 3,
        title: "The Dark Knight",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        imdb_rating: 9.0,
        genre: "Action",
        type: "Movie",
        release_year: 2008,
        trending_score: 92
    },
    {
        id: 4,
        title: "Stranger Things",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        imdb_rating: 8.7,
        genre: "Sci-Fi",
        type: "Series",
        release_year: 2016,
        trending_score: 96
    },
    {
        id: 5,
        title: "Inception",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        imdb_rating: 8.8,
        genre: "Sci-Fi",
        type: "Movie",
        release_year: 2010,
        trending_score: 89
    },
    {
        id: 6,
        title: "Game of Thrones",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
        imdb_rating: 9.2,
        genre: "Fantasy",
        type: "Series",
        release_year: 2011,
        trending_score: 91
    },
    {
        id: 7,
        title: "Pulp Fiction",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        imdb_rating: 8.9,
        genre: "Crime",
        type: "Movie",
        release_year: 1994,
        trending_score: 87
    },
    {
        id: 8,
        title: "The Crown",
        poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        imdb_rating: 8.6,
        genre: "Drama",
        type: "Series",
        release_year: 2016,
        trending_score: 84
    },
    {
        id: 9,
        title: "Interstellar",
        poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
        imdb_rating: 8.6,
        genre: "Sci-Fi",
        type: "Movie",
        release_year: 2014,
        trending_score: 90
    },
    {
        id: 10,
        title: "The Mandalorian",
        poster: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=400&h=600&fit=crop",
        imdb_rating: 8.7,
        genre: "Sci-Fi",
        type: "Series",
        release_year: 2019,
        trending_score: 93
    },
    {
        id: 11,
        title: "Forrest Gump",
        poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        imdb_rating: 8.8,
        genre: "Drama",
        type: "Movie",
        release_year: 1994,
        trending_score: 86
    },
    {
        id: 12,
        title: "The Witcher",
        poster: "https://images.unsplash.com/photo-1533093818801-37a1e6c0b423?w=400&h=600&fit=crop",
        imdb_rating: 8.2,
        genre: "Fantasy",
        type: "Series",
        release_year: 2019,
        trending_score: 88
    },
    {
        id: 13,
        title: "The Matrix",
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
        imdb_rating: 8.7,
        genre: "Sci-Fi",
        type: "Movie",
        release_year: 1999,
        trending_score: 85
    },
    {
        id: 14,
        title: "Peaky Blinders",
        poster: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&h=600&fit=crop",
        imdb_rating: 8.8,
        genre: "Crime",
        type: "Series",
        release_year: 2013,
        trending_score: 89
    },
    {
        id: 15,
        title: "Gladiator",
        poster: "https://images.unsplash.com/photo-1574267432644-f610a4ab9a6c?w=400&h=600&fit=crop",
        imdb_rating: 8.5,
        genre: "Action",
        type: "Movie",
        release_year: 2000,
        trending_score: 83
    },
    {
        id: 16,
        title: "The Office",
        poster: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=600&fit=crop",
        imdb_rating: 9.0,
        genre: "Comedy",
        type: "Series",
        release_year: 2005,
        trending_score: 94
    },
    {
        id: 17,
        title: "The Godfather",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        imdb_rating: 9.2,
        genre: "Crime",
        type: "Movie",
        release_year: 1972,
        trending_score: 88
    },
    {
        id: 18,
        title: "Sherlock",
        poster: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=400&h=600&fit=crop",
        imdb_rating: 9.1,
        genre: "Mystery",
        type: "Series",
        release_year: 2010,
        trending_score: 87
    },
    {
        id: 19,
        title: "Avengers: Endgame",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
        imdb_rating: 8.4,
        genre: "Action",
        type: "Movie",
        release_year: 2019,
        trending_score: 97
    },
    {
        id: 20,
        title: "Wednesday",
        poster: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
        imdb_rating: 8.1,
        genre: "Comedy",
        type: "Series",
        release_year: 2022,
        trending_score: 99
    },
    {
        id: 21,
        title: "Parasite",
        poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
        imdb_rating: 8.6,
        genre: "Thriller",
        type: "Movie",
        release_year: 2019,
        trending_score: 91
    },
    {
        id: 22,
        title: "The Last of Us",
        poster: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop",
        imdb_rating: 8.9,
        genre: "Drama",
        type: "Series",
        release_year: 2023,
        trending_score: 100
    },
    // Netflix Original Series
    {
        id: 23,
        title: "Squid Game",
        poster: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop",
        imdb_rating: 8.0,
        genre: "Thriller",
        type: "Series",
        release_year: 2021,
        trending_score: 100
    },
    {
        id: 24,
        title: "Money Heist",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        imdb_rating: 8.2,
        genre: "Crime",
        type: "Series",
        release_year: 2017,
        trending_score: 95
    },
    {
        id: 25,
        title: "Dark",
        poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        imdb_rating: 8.8,
        genre: "Sci-Fi",
        type: "Series",
        release_year: 2017,
        trending_score: 92
    },
    {
        id: 26,
        title: "Narcos",
        poster: "https://images.unsplash.com/photo-1574267432644-f610a4ab9a6c?w=400&h=600&fit=crop",
        imdb_rating: 8.8,
        genre: "Crime",
        type: "Series",
        release_year: 2015,
        trending_score: 89
    },
    {
        id: 27,
        title: "Ozark",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        imdb_rating: 8.5,
        genre: "Crime",
        type: "Series",
        release_year: 2017,
        trending_score: 91
    },
    {
        id: 28,
        title: "Black Mirror",
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
        imdb_rating: 8.7,
        genre: "Sci-Fi",
        type: "Series",
        release_year: 2011,
        trending_score: 88
    },
    {
        id: 29,
        title: "The Queen's Gambit",
        poster: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&h=600&fit=crop",
        imdb_rating: 8.5,
        genre: "Drama",
        type: "Series",
        release_year: 2020,
        trending_score: 94
    },
    {
        id: 30,
        title: "Bridgerton",
        poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        imdb_rating: 7.3,
        genre: "Drama",
        type: "Series",
        release_year: 2020,
        trending_score: 93
    },
    {
        id: 31,
        title: "Lupin",
        poster: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=400&h=600&fit=crop",
        imdb_rating: 7.5,
        genre: "Mystery",
        type: "Series",
        release_year: 2021,
        trending_score: 87
    },
    {
        id: 32,
        title: "The Umbrella Academy",
        poster: "https://images.unsplash.com/photo-1533093818801-37a1e6c0b423?w=400&h=600&fit=crop",
        imdb_rating: 7.9,
        genre: "Sci-Fi",
        type: "Series",
        release_year: 2019,
        trending_score: 90
    },
    {
        id: 33,
        title: "Cobra Kai",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        imdb_rating: 8.5,
        genre: "Action",
        type: "Series",
        release_year: 2018,
        trending_score: 92
    },
    {
        id: 34,
        title: "You",
        poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
        imdb_rating: 7.7,
        genre: "Thriller",
        type: "Series",
        release_year: 2018,
        trending_score: 91
    },
    {
        id: 35,
        title: "Arcane",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
        imdb_rating: 9.0,
        genre: "Fantasy",
        type: "Series",
        release_year: 2021,
        trending_score: 96
    },
    {
        id: 36,
        title: "The Haunting of Hill House",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        imdb_rating: 8.6,
        genre: "Horror",
        type: "Series",
        release_year: 2018,
        trending_score: 88
    },
    {
        id: 37,
        title: "Mindhunter",
        poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
        imdb_rating: 8.6,
        genre: "Crime",
        type: "Series",
        release_year: 2017,
        trending_score: 86
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let currentCategory = 'all';
let currentGenre = 'all';
let currentSort = 'imdb-desc';
let searchQuery = '';

// ========================================
// THEME TOGGLE
// ========================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ========================================
// POPULATE GENRE FILTER
// ========================================

function populateGenreFilter() {
    const genreFilter = document.getElementById('genreFilter');
    const genres = [...new Set(moviesData.map(item => item.genre))].sort();

    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

// ========================================
// FILTER AND SORT LOGIC
// ========================================

function getFilteredData() {
    let filtered = [...moviesData];

    // Apply category filter
    if (currentCategory === 'movie') {
        filtered = filtered.filter(item => item.type === 'Movie');
    } else if (currentCategory === 'series') {
        filtered = filtered.filter(item => item.type === 'Series');
    } else if (currentCategory === 'trending') {
        filtered = filtered.filter(item => item.trending_score >= 90);
    } else if (currentCategory === 'top-imdb') {
        filtered = filtered.filter(item => item.imdb_rating >= 8.5);
    }

    // Apply genre filter
    if (currentGenre !== 'all') {
        filtered = filtered.filter(item => item.genre === currentGenre);
    }

    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Apply sorting
    switch (currentSort) {
        case 'imdb-desc':
            filtered.sort((a, b) => b.imdb_rating - a.imdb_rating);
            break;
        case 'imdb-asc':
            filtered.sort((a, b) => a.imdb_rating - b.imdb_rating);
            break;
        case 'trending-desc':
            filtered.sort((a, b) => b.trending_score - a.trending_score);
            break;
        case 'year-desc':
            filtered.sort((a, b) => b.release_year - a.release_year);
            break;
        case 'year-asc':
            filtered.sort((a, b) => a.release_year - b.release_year);
            break;
    }

    return filtered;
}

// ========================================
// RENDER CARDS
// ========================================

function renderCards() {
    const grid = document.getElementById('contentGrid');
    const noResults = document.getElementById('noResults');
    const countNumber = document.getElementById('countNumber');

    const filteredData = getFilteredData();

    // Update count
    countNumber.textContent = filteredData.length;

    // Clear grid
    grid.innerHTML = '';

    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    // Create cards
    filteredData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'movie-card fade-in-scroll';
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="card-poster">
                <img src="${item.poster}" alt="${item.title}" loading="lazy">
                <div class="card-rating">
                    <i class="fas fa-star"></i>
                    ${item.imdb_rating}
                </div>
                <div class="card-type-badge">${item.type}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="card-genre">${item.genre}</span>
                    <span class="card-year">${item.release_year}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Trigger scroll animations
    observeCards();
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function observeCards() {
    const cards = document.querySelectorAll('.fade-in-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => observer.observe(card));
}

// ========================================
// EVENT LISTENERS
// ========================================

// Category Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update category
        currentCategory = btn.getAttribute('data-category');
        renderCards();
    });
});

// Genre Filter
document.getElementById('genreFilter').addEventListener('change', (e) => {
    currentGenre = e.target.value;
    renderCards();
});

// Sort Select
document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderCards();
});

// Search Input
const searchInput = document.getElementById('searchInput');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value;
        renderCards();
    }, 300); // Debounce search
});

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    populateGenreFilter();
    renderCards();

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize authentication
    initAuth();
});

// ========================================
// AUTHENTICATION SYSTEM
// ========================================

// Modal Controls
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function switchModal(currentModalId, newModalId) {
    closeModal(currentModalId);
    setTimeout(() => openModal(newModalId), 300);
    return false;
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal(e.target.id);
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// Show/Hide Password Toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Password Strength Meter
const signupPasswordInput = document.getElementById('signupPassword');
if (signupPasswordInput) {
    signupPasswordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        const strengthFill = document.getElementById('strengthFill');
        const strengthText = document.getElementById('strengthText');

        const strength = calculatePasswordStrength(password);

        // Remove all classes
        strengthFill.classList.remove('weak', 'medium', 'strong');
        strengthText.classList.remove('weak', 'medium', 'strong');

        if (password.length === 0) {
            strengthFill.style.width = '0%';
            strengthText.textContent = 'Password strength';
        } else if (strength < 3) {
            strengthFill.classList.add('weak');
            strengthText.classList.add('weak');
            strengthText.textContent = 'Weak password';
        } else if (strength < 5) {
            strengthFill.classList.add('medium');
            strengthText.classList.add('medium');
            strengthText.textContent = 'Medium password';
        } else {
            strengthFill.classList.add('strong');
            strengthText.classList.add('strong');
            strengthText.textContent = 'Strong password';
        }
    });
}

function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    return strength;
}

// ========================================
// USER MANAGEMENT
// ========================================

function initAuth() {
    // Check if user is logged in
    const currentUser = getCurrentUser();

    if (currentUser) {
        showUserMenu(currentUser);
    } else {
        showGuestButtons();
    }

    // Event listeners for auth buttons
    document.getElementById('showLoginBtn')?.addEventListener('click', () => openModal('loginModal'));
    document.getElementById('showSignupBtn')?.addEventListener('click', () => openModal('signupModal'));

    // User menu toggle
    document.getElementById('userMenuBtn')?.addEventListener('click', toggleUserMenu);

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });

    // Form submissions
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    document.getElementById('signupForm')?.addEventListener('submit', handleSignup);
    document.getElementById('forgotForm')?.addEventListener('submit', handleForgotPassword);
}

function getCurrentUser() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        try {
            return JSON.parse(authToken);
        } catch (e) {
            return null;
        }
    }
    return null;
}

function showUserMenu(user) {
    document.getElementById('guestButtons').style.display = 'none';
    document.getElementById('userMenu').style.display = 'block';
    document.getElementById('userName').textContent = user.name;
}

function showGuestButtons() {
    document.getElementById('guestButtons').style.display = 'flex';
    document.getElementById('userMenu').style.display = 'none';
}

function toggleUserMenu() {
    document.getElementById('userMenu').classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('userMenu');
    const userMenuBtn = document.getElementById('userMenuBtn');

    if (userMenu && !userMenu.contains(e.target)) {
        userMenu.classList.remove('active');
    }
});

// ========================================
// AUTHENTICATION HANDLERS
// ========================================

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Create auth token
        const authToken = {
            userId: user.id,
            email: user.email,
            name: user.name,
            loginTime: Date.now(),
            rememberMe: rememberMe
        };

        localStorage.setItem('authToken', JSON.stringify(authToken));

        // Show success message
        showNotification('Login successful! Welcome back, ' + user.name, 'success');

        // Update UI
        showUserMenu(user);
        closeModal('loginModal');

        // Reset form
        e.target.reset();
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Validation
    if (!agreeTerms) {
        showNotification('Please agree to the Terms & Conditions', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }

    if (calculatePasswordStrength(password) < 3) {
        showNotification('Please use a stronger password', 'error');
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.find(u => u.email === email)) {
        showNotification('Email already registered', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: 'user_' + Date.now(),
        name: name,
        email: email,
        password: password, // In production, this should be hashed
        createdAt: Date.now(),
        preferences: {
            theme: document.documentElement.getAttribute('data-theme') || 'light',
            language: 'en'
        }
    };

    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto-login
    const authToken = {
        userId: newUser.id,
        email: newUser.email,
        name: newUser.name,
        loginTime: Date.now(),
        rememberMe: true
    };

    localStorage.setItem('authToken', JSON.stringify(authToken));

    // Show success message
    showNotification('Account created successfully! Welcome, ' + newUser.name, 'success');

    // Update UI
    showUserMenu(newUser);
    closeModal('signupModal');

    // Reset form
    e.target.reset();
}

function handleForgotPassword(e) {
    e.preventDefault();

    const email = document.getElementById('forgotEmail').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email exists
    const user = users.find(u => u.email === email);

    if (user) {
        // In a real app, you would send an email here
        // For this demo, we'll just show a success message
        showNotification('Password reset instructions sent to ' + email, 'success');
        closeModal('forgotModal');

        // Reset form
        e.target.reset();
    } else {
        showNotification('Email not found in our records', 'error');
    }
}

function logout() {
    localStorage.removeItem('authToken');
    showGuestButtons();
    showNotification('Logged out successfully', 'success');
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// STICKY NAVBAR
// ========================================

const stickyNavbar = document.getElementById('stickyNavbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show navbar after scrolling down 300px
    if (scrollTop > 300) {
        stickyNavbar.classList.add('visible');
    } else {
        stickyNavbar.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// LOAD MORE FUNCTIONALITY
// ========================================

let itemsPerPage = 12;
let currentPage = 1;

function updateLoadMoreButton() {
    const filteredData = getFilteredData();
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const totalItems = filteredData.length;
    const displayedItems = currentPage * itemsPerPage;

    if (displayedItems < totalItems) {
        loadMoreContainer.style.display = 'block';
    } else {
        loadMoreContainer.style.display = 'none';
    }
}

document.getElementById('loadMoreBtn')?.addEventListener('click', () => {
    currentPage++;
    renderCards();
});

// Reset pagination when filters change
function resetPagination() {
    currentPage = 1;
}

// ========================================
// MULTI-LANGUAGE SUPPORT (EN/BN)
// ========================================

const translations = {
    en: {
        home: "Home",
        movies: "Movies",
        series: "Series",
        trending: "Trending",
        loadMore: "Load More",
        noResults: "No Results Found",
        tryAdjusting: "Try adjusting your search or filters"
    },
    bn: {
        home: "হোম",
        movies: "সিনেমা",
        series: "সিরিজ",
        trending: "ট্রেন্ডিং",
        loadMore: "আরও দেখুন",
        noResults: "কোনো ফলাফল পাওয়া যায়নি",
        tryAdjusting: "আপনার অনুসন্ধান বা ফিল্টার সামঞ্জস্য করুন"
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update language toggle
    document.getElementById('currentLang').textContent = lang.toUpperCase();
}

// Language toggle button
document.getElementById('langToggle')?.addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'bn' : 'en';
    updateLanguage(newLang);
    showNotification(
        currentLanguage === 'en' ? 'Language changed to English' : 'ভাষা বাংলায় পরিবর্তিত হয়েছে',
        'success'
    );
});

// Initialize language on load
updateLanguage(currentLanguage);

// ========================================
// QUALITY TAGS SYSTEM
// ========================================

function getQualityTags(item) {
    const tags = [];

    // 4K tag for recent high-rated content
    if (item.release_year >= 2018 && item.imdb_rating >= 8.0) {
        tags.push({ text: '4K', class: 'tag-4k' });
    }
    // HD tag for older content
    else if (item.release_year >= 2010) {
        tags.push({ text: 'HD', class: 'tag-hd' });
    }

    // New tag for content from last 2 years
    if (item.release_year >= new Date().getFullYear() - 2) {
        tags.push({ text: 'NEW', class: 'tag-new' });
    }

    // Top rated tag
    if (item.imdb_rating >= 9.0) {
        tags.push({ text: 'IMDb 9+', class: 'tag-top' });
    }

    // Trending tag
    if (item.trending_score >= 95) {
        tags.push({ text: 'TRENDING', class: 'tag-trending' });
    }

    return tags;
}

// ========================================
// ENHANCED SORTING
// ========================================

// Update getFilteredData to include alphabetical sorting
const originalGetFilteredData = getFilteredData;

function getFilteredData() {
    let filtered = [...moviesData];

    // Apply category filter
    if (currentCategory === 'movie') {
        filtered = filtered.filter(item => item.type === 'Movie');
    } else if (currentCategory === 'series') {
        filtered = filtered.filter(item => item.type === 'Series');
    } else if (currentCategory === 'trending') {
        filtered = filtered.filter(item => item.trending_score >= 90);
    } else if (currentCategory === 'top-imdb') {
        filtered = filtered.filter(item => item.imdb_rating >= 8.5);
    }

    // Apply genre filter
    if (currentGenre !== 'all') {
        filtered = filtered.filter(item => item.genre === currentGenre);
    }

    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Apply sorting
    switch (currentSort) {
        case 'imdb-desc':
            filtered.sort((a, b) => b.imdb_rating - a.imdb_rating);
            break;
        case 'imdb-asc':
            filtered.sort((a, b) => a.imdb_rating - b.imdb_rating);
            break;
        case 'trending-desc':
            filtered.sort((a, b) => b.trending_score - a.trending_score);
            break;
        case 'year-desc':
            filtered.sort((a, b) => b.release_year - a.release_year);
            break;
        case 'year-asc':
            filtered.sort((a, b) => a.release_year - b.release_year);
            break;
        case 'alpha-asc':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'alpha-desc':
            filtered.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    return filtered;
}

// ========================================
// ENHANCED RENDER CARDS WITH TAGS
// ========================================

function renderCards() {
    const grid = document.getElementById('contentGrid');
    const noResults = document.getElementById('noResults');
    const countNumber = document.getElementById('countNumber');

    const filteredData = getFilteredData();

    // Update count
    countNumber.textContent = filteredData.length;

    // Clear grid
    grid.innerHTML = '';

    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        updateLoadMoreButton();
        return;
    }

    noResults.style.display = 'none';

    // Get items for current page
    const itemsToShow = filteredData.slice(0, currentPage * itemsPerPage);

    // Create cards
    itemsToShow.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'movie-card fade-in-scroll';
        card.style.animationDelay = `${(index % itemsPerPage) * 0.05}s`;

        // Get quality tags
        const tags = getQualityTags(item);
        const tagsHTML = tags.length > 0 ? `
            <div class="card-tags">
                ${tags.map(tag => `<span class="quality-tag ${tag.class}">${tag.text}</span>`).join('')}
            </div>
        ` : '';

        card.innerHTML = `
            <div class="card-poster">
                <img src="${item.poster}" alt="${item.title}" loading="lazy">
                <div class="card-rating">
                    <i class="fas fa-star"></i>
                    ${item.imdb_rating}
                </div>
                <div class="card-type-badge">${item.type}</div>
                ${tagsHTML}
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="card-genre">${item.genre}</span>
                    <span class="card-year">${item.release_year}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Update load more button
    updateLoadMoreButton();

    // Trigger scroll animations
    observeCards();
}

// Update event listeners to reset pagination
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        resetPagination();
        renderCards();
    });
});

document.getElementById('genreFilter').addEventListener('change', (e) => {
    currentGenre = e.target.value;
    resetPagination();
    renderCards();
});

document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    resetPagination();
    renderCards();
});

searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value;
        resetPagination();
        renderCards();
    }, 300);
});
