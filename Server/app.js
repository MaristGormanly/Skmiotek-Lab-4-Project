const express = require('express');
const app = express();

// Serve static files from the client directory
app.use(express.static('./client'));

// Route for the main HTML page
app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views'});
});

app.listen(1337, () => console.log('Skull Kap Studios listening on port 1337!'));

// Page Content Templates
const pageTemplates = {
    home: `
        <h2 class="page-title">WELCOME TO SKULL KAP STUDIOS</h2>
        
        <div class="content-section">
            <h3 class="section-title">Website Description</h3>
            <div class="content-box">
                <p>Skull Kap Studios is your ultimate destination for all things music production. Whether you're a beginner looking to start making beats or a professional producer searching for the best equipment and software, we've got you covered. Our community connects musicians, producers, and audio engineers of all experience levels.</p>
                <p>Browse our curated selection of instruments, software recommendations, and studio setups. Share your own experiences, ask questions, and connect with like-minded creators in an ever growing community.</p>
            </div>
        </div>
        
        <div class="content-section">
            <h3 class="section-title">Website Audience</h3>
            <div class="content-box">
                <p>This platform was created for:</p>
                <ul>
                    <li>Music producers of all levels</li>
                    <li>Musicians looking to improve their production/engineering skills</li>
                    <li>Anyone interested in music technology and production techniques</li>
                    <li>Those that have a deep love and passion for all things music!</li>
                </ul>
                <p>Whether you're just getting started or have years of experience, there is a home for you here at Skull Kap Studios.</p>
            </div>
        </div>
    `,
    
    software: `
        <h2 class="page-title">POPULAR SOFTWARE FOR MUSIC PRODUCTION</h2>
        
        <div class="content-section">
            <div class="software-item">
                <div class="content-box">
                    <h3>Ableton Live</h3>
                    <p>Ableton Live is a digital audio workstation designed for music creation, recording, arrangement, mixing, and mastering. Known for its unique session view, it's particularly popular with electronic music producers and live performers.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Dual arrangement and session views</li>
                        <li>Powerful MIDI sequencing</li>
                        <li>Intuitive sample warping</li>
                        <li>Built-in instruments and effects</li>
                    </ul>
                    <a href="https://www.ableton.com" target="_blank">Visit Website</a>
                </div>
                <div class="content-box instrument-image">Image</div>
            </div>
            
            <div class="software-item">
                <div class="content-box">
                    <h3>FL Studio</h3>
                    <p>FL Studio (formerly known as FruityLoops) is a complete software music production environment. Popular with beat makers and electronic producers, it's known for its pattern-based sequencer and intuitive workflow.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Step sequencer and piano roll</li>
                        <li>Pattern-based workflow</li>
                        <li>Lifetime free updates</li>
                        <li>Extensive plugin compatibility</li>
                    </ul>
                    <a href="https://www.image-line.com" target="_blank">Visit Website</a>
                </div>
                <div class="content-box instrument-image">Image</div>
            </div>
        </div>
    `,
    
    instruments: `
        <h2 class="page-title">INSTRUMENTS</h2>
        
        <div class="content-section">
            <div class="grid-4">
                <div class="instrument-item">
                    <div class="instrument-image">Instrument Image</div>
                    <h3 class="section-title">AKAI MPK Mini</h3>
                    <div class="content-box">
                        <p>A compact MIDI keyboard controller with 25 mini keys, 8 drum pads, and 8 assignable knobs. Perfect for beginners and producers on the go.</p>
                    </div>
                </div>
                
                <div class="instrument-item">
                    <div class="instrument-image">Instrument Image</div>
                    <h3 class="section-title">Roland TR-8S</h3>
                    <div class="content-box">
                        <p>A powerful drum machine with authentic recreations of classic Roland drum machines plus modern features and sample import capabilities.</p>
                    </div>
                </div>
                
                <div class="instrument-item">
                    <div class="instrument-image">Instrument Image</div>
                    <h3 class="section-title">Moog Subsequent 37</h3>
                    <div class="content-box">
                        <p>A paraphonic analog synthesizer with rich, powerful sound. Features a 37-note keyboard, dual oscillators, and extensive modulation options.</p>
                    </div>
                </div>
                
                <div class="instrument-item">
                    <div class="instrument-image">Instrument Image</div>
                    <h3 class="section-title">Native Instruments Maschine</h3>
                    <div class="content-box">
                        <p>A hardware/software production system combining a sampler, sequencer, and controller in one intuitive package. Great for beat-making and live performance.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    studios: `
        <h2 class="page-title">STUDIOS</h2>
        
        <div class="content-section">
            <h3 class="section-title">Featured Studios</h3>
            <div class="content-box">
                <p>This section is under development. We'll soon be featuring professional studios for recording, mixing, and mastering, as well as showcasing home studio setups from our community members.</p>
                <p>Check back soon for:</p>
                <ul>
                    <li>Studio tours and equipment lists</li>
                    <li>Acoustic treatment tips</li>
                    <li>Budget-friendly studio solutions</li>
                    <li>Professional studio recommendations</li>
                    <li>Community studio showcases</li>
                </ul>
            </div>
        </div>
    `,
    
    about: `
        <h2 class="page-title">ABOUT ME</h2>
        
        <div class="content-section">
            <h3 class="section-title">Brief Personal Music Background</h3>
            <div class="content-box">
                <p>I've been producing music for over 10 years, specializing in hip-hop, electronic, and experimental genres. My journey began with a simple MIDI controller and a cracked version of FL Studio, and has since evolved to a fully-equipped home studio setup.</p>
                <p>Throughout my career, I've collaborated with various artists, released music on independent labels, and scored several short films. I'm passionate about sound design, vintage synthesizers, and combining traditional instruments with modern production techniques.</p>
                <p>Skull Kap Studios began as a personal project to document my own production journey and has grown into a platform to share knowledge and connect with other music creators worldwide.</p>
            </div>
        </div>
        
        <div class="content-section">
            <h3 class="section-title">My goals for this website</h3>
            <div class="content-box">
                <p>With Skull Kap Studios, I aim to:</p>
                <ul>
                    <li>Create a supportive community for music producers of all levels</li>
                    <li>Provide honest reviews and recommendations for production equipment</li>
                    <li>Share production techniques and workflow tips</li>
                    <li>Connect producers for collaborations and skill-sharing</li>
                    <li>Demystify the technical aspects of music production</li>
                </ul>
                <p>This isn't just another gear review site – I want to foster real connections and help creators find their unique sound without getting lost in endless equipment options.</p>
            </div>
        </div>
        
        <div class="about-images">
            <div class="about-image">Studio Image</div>
            <div class="about-image">Creator Image</div>
        </div>
    `
};

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
