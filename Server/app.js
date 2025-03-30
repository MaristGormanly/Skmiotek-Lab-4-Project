const express = require('express'); 
const app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views' })
})
app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

        // Navigation and Page Loading
        document.addEventListener('DOMContentLoaded', function() {
            // Default to home page
            loadPage('home');
            
            // Set up navigation
            document.getElementById('site-title').addEventListener('click', function() {
                loadPage('home');
            });
            
            document.getElementById('nav-instruments').addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('instruments');
            });
            
            document.getElementById('nav-software').addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('software');
            });
            
            document.getElementById('nav-studios').addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('studios');
            });
            
            document.getElementById('nav-about').addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('about');
            });
            
            // Modal functionality
            const modal = document.getElementById('login-modal');
            const btnLogin = document.getElementById('btn-login');
            const closeModal = document.getElementById('close-modal');
            const btnCancel = document.getElementById('btn-cancel');
            const loginForm = document.getElementById('login-form');
            
            btnLogin.addEventListener('click', function() {
                modal.style.display = 'flex';
            });
            
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            btnCancel.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // Here you would typically handle authentication
                alert('Login functionality would be implemented here in a production site.');
                modal.style.display = 'none';
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // Function to load page content
        function loadPage(page) {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = pageTemplates[page] || pageTemplates.home;
            
            // Update active nav item
            document.querySelectorAll('nav a').forEach(item => {
                item.classList.remove('active');
            });
            
            const activeNav = document.getElementById(`nav-${page}`);
            if (activeNav) {
                activeNav.classList.add('active');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update browser history
            history.pushState({page: page}, `${page.charAt(0).toUpperCase() + page.slice(1)} - Skull Kap Studios`, `/${page}.html`);
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', function(e) {
            if (e.state && e.state.page) {
                loadPage(e.state.page);
            } else {
                loadPage('home');
            }
        });
  
