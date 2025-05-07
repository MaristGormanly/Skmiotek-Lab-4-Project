// Page Content Templates
function loadPageContent(pageId) {
    const content = {
    home: `
        <h2 class="page-title">WELCOME TO SKULL KAP STUDIOS</h2>
        
        <div class="content-section">
            <h3 class="section-title">Website Description</h3>
            <div class="content-box">
                <p>Skull Kap Studios is your ultimate destination for all things music production. Whether you're a beginner looking to start making beats or a professional producer searching for the best equipment and software, we've got you covered. Our community connects musicians, producers, and audio engineers of all experience levels. Browse our curated selection of instruments, software recommendations, and studio setups. Share your own experiences, ask questions, and connect with like-minded creators in an ever growing community.</p>
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
       
  <section class="content-section">
    <h2 class="section-title">Featured Instruments</h2>
    <div class="instrument-item">
      <div class="instrument-image">
        <img src="/assets/instruments/akai-mpk-mini.jpg" alt="AKAI MPK Mini">
      </div>
      <div class="instrument-description">
        <h3>AKAI MPK Mini</h3>
        <p>A compact MIDI keyboard controller with 25 mini keys, 8 drum pads, and 8 assignable knobs. Perfect for beginners and producers on the go.</p>
      </div>
    </div>
    <div class="instrument-item">
      <div class="instrument-image">
        <img src="/assets/instruments/roland-tr8s.jpg" alt="Roland TR-8S">
      </div>
      <div class="instrument-description">
        <h3>Roland TR-8S</h3>
        <p>A powerful drum machine with authentic recreations of classic Roland drum machines plus modern features and sample import capabilities.</p>
      </div>
    </div>
  </section>

                <div class="instrument-item">
    <div class="instrument-image">
        <img src="/assets/instruments/moog-subsequent-37.jpg" alt="Moog Subsequent 37">
    </div>
    <div class="instrument-description">
        <h3>Moog Subsequent 37</h3>
        <p>A paraphonic analog synthesizer with rich, powerful sound. Features a 37-note keyboard, dual oscillators, and extensive modulation options.</p>
    </div>
</div>

<div class="instrument-item">
    <div class="instrument-image">
        <img src="/assets/instruments/maschine.jpg" alt="Native Instruments Maschine">
    </div>
    <div class="instrument-description">
        <h3>Native Instruments Maschine</h3>
        <p>A hardware/software production system combining a sampler, sequencer, and controller in one intuitive package. Great for beat-making and live performance.</p>
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
    
    about: `\
        <h2 class="page-title">ABOUT ME</h2>
        
        <div class="content-section">
            <h3 class="section-title">Brief Personal Music Background</h3>
            <div class="content-box">
                <p>Details coming soon</p>
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
                </ul>
                
        </div>
        
        <div class="about-images">
            <div class="about-image">Studio Image</div>
            <div class="about-image">Creator Image</div>
        </div>
    `
};

// main.js

document.getElementById("main-content").innerHTML = content[pageId] || "<p>Page not found.</p>";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-instruments")?.addEventListener("click", (e) => {
        e.preventDefault();
        loadPageContent("instruments");
    });

    document.getElementById("nav-software")?.addEventListener("click", (e) => {
        e.preventDefault();
        loadPageContent("software");
    });

    document.getElementById("nav-studios")?.addEventListener("click", (e) => {
        e.preventDefault();
        loadPageContent("studios");
    });

    document.getElementById("nav-about")?.addEventListener("click", (e) => {
        e.preventDefault();
        loadPageContent("about");
    });

    document.getElementById("nav-home")?.addEventListener("click", (e) => {
        e.preventDefault();
        loadPageContent("home");
    });
    

    // Load home page content initially
    loadPageContent("home");
});

// Modal Logic
const modal = document.getElementById("login-modal");
const loginBtn = document.querySelector(".btn-login");
const closeBtn = document.getElementById("close-modal");
const cancelBtn = document.getElementById("btn-cancel");

loginBtn?.addEventListener("click", () => modal.style.display = "flex");
closeBtn?.addEventListener("click", () => modal.style.display = "none");
cancelBtn?.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
