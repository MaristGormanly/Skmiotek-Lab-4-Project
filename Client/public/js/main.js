// Page Content Templates
function loadPageContent(pageId) {
    const content = {
        home: `
        <h2 class="page-title">WELCOME TO SKULL KAP STUDIOS</h2>
    
        <div class="content-section">
            <h3 class="section-title">What Is Skull Kap Studios?</h3>
            <div class="content-box">
                <p>
                    <strong>Skull Kap Studios</strong> is your ultimate destination for everything related to music production. 
                    Whether you're just starting to make beats or you're a seasoned producer, this platform is built to support your creative journey. Explore top-tier instruments, trusted software tools, and professional-grade studio setups.</p>
                <p>
                    Connect with a vibrant community of producers, musicians, and engineers. Share knowledge, ask questions, and grow together in a space that celebrates music at every level. Visit the links at the top of the page to dive in to everything this website has to offer.</p>    
            </div>
        </div>
    
        <div class="content-section">
            <h3 class="section-title">Who Is This For?</h3>
            <div class="content-box">
                <p>Skull Kap Studios was built for creators who are passionate about music. You’ll fit right in if you're:</p>
                <ul>
                    <li>A music producer (beginner or advanced)</li>
                    <li>A musician learning to record or mix your own tracks</li>
                    <li>Interested in audio tech, DAWs, and studio gear</li>
                    <li>Someone with a deep love and passion for music</li>
                </ul>
                <p>
                    Whether you're refining your sound or just hitting your first chord — there's a place for you here.
                </p>
            </div>
        </div>
    `
    ,
    
    software: `
    <h2 class="page-title">POPULAR SOFTWARE FOR MUSIC PRODUCTION</h2>
    
    <div class="content-section">
        <div class="software-item">
            <div class="software-description">
                <h3>Ableton Live</h3>
                <p>Ableton Live is a digital audio workstation designed for music creation, recording, and performance. It's especially popular among electronic producers and live performers thanks to its unique Session View.</p>
                <ul>
                    <li>Dual Arrangement and Session Views</li>
                    <li>Advanced MIDI sequencing and audio warping</li>
                    <li>Extensive library of built-in instruments and effects</li>
                    <li>Ideal for both studio and live performance</li>
                </ul>
                <a href="https://www.ableton.com" target="_blank" class="software-link">Visit Website →</a>
            </div>
            <div class="software-image">
                <img src="../img/ableton.avif" alt="Ableton Live">
            </div>
        </div>

        <div class="software-item">
            <div class="software-description">
                <h3>FL Studio</h3>
                <p>FL Studio is a complete music production environment, known for its user-friendly workflow, pattern-based sequencing, and creative flexibility. A favorite among hip-hop and EDM producers.</p>
                <ul>
                    <li>Step sequencer and piano roll</li>
                    <li>Pattern-based workflow and automation</li>
                    <li>Lifetime free updates</li>
                    <li>VST, AU, and plugin compatibility</li>
                </ul>
                <a href="https://www.image-line.com" target="_blank" class="software-link">Visit Website →</a>
            </div>
            <div class="software-image">
                <img src="../img/flstudio.avif" alt="FL Studio">
            </div>
        </div>
    </div>
`, 
    instruments: `
       
  <section class="content-section">
    <h2 class="section-title">Featured Instruments</h2>
    <div class="instrument-item">
      <div class="instrument-image">
        <img src="../img/akaimini.jpg" alt="AKAI MPK Mini">
      </div>
      <div class="instrument-description">
        <h3>AKAI MPK Mini</h3>
        <p>A compact MIDI keyboard controller with 25 mini keys, 8 drum pads, and 8 assignable knobs. Perfect for beginners and producers on the go.</p>
        <a href="https://www.akaipro.com/mpk-mini-mk3" target="_blank" class="instrument-link">View on AKAI Website →</a>
      </div>
    </div>
    <div class="instrument-item">
      <div class="instrument-image">
        <img src="../img/rolandairatr8s.jpeg" alt="Roland TR-8S">
      </div>
      <div class="instrument-description">
        <h3>Roland TR-8S</h3>
        <p>A powerful drum machine with authentic recreations of classic Roland drum machines plus modern features and sample import capabilities.</p>
        <a href="https://www.roland.com/global/products/tr-8s/" target="_blank" class="instrument-link">View on Roland Website →</a>
      </div>
    </div>
    <div class="instrument-item">
        <div class="instrument-image">
            <img src="../img/minimoog.jpeg" alt="Minimoog Model D">
        </div>
        <div class="instrument-description">
            <h3>Minimoog Model D</h3>
            <p>The 2022 Minimoog Model D includes a dedicated analog LFO with triangle and square waveshapes, a premium Fatar keybed with velocity and after pressure available via top panel CV jacks with onboard trimpots, MIDI integration, and a mixer feedback modification which allows the Minimoog Model D to overdrive and scream with the turn of a knob.</p>
            <a href="https://www.moogmusic.com/synthesizers/minimoog-model-d/" target="_blank" class="instrument-link">View on Moog Website →</a>
        </div>
    </div>

    <div class="instrument-item">
        <div class="instrument-image">
            <img src="../img/nativeinstruments.webp" alt="Native Instruments Maschine">
        </div>
        <div class="instrument-description">
            <h3>Native Instruments Maschine</h3>
            <p>A hardware/software production system combining a sampler, sequencer, and controller in one intuitive package. Great for beat-making and live performance.</p>
            <a href="https://www.native-instruments.com/en/products/maschine/production-systems/maschine-mk3/" target="_blank" class="instrument-link">View on Natives Website →</a>
        </div>
    </div>
</section>
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

    connect: `
    <h2 class="page-title">CONNECT WITH THE COMMUNITY</h2>
    <div id="connect-section">
        <div id="connect-post-form">
            <textarea id="new-post-content" placeholder="Share your thoughts!" rows="4" cols="60"></textarea>
            <button id="submit-post">Post</button>
        </div>
        <div id="connect-feed"></div>
    </div>
`
,
    
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

document.getElementById("main-content").innerHTML = content[pageId] || "<p>Page not found.</p>";
}

// function to update the authentication button based on login status
function updateAuthButton() {
    const authBtn = document.getElementById('auth-button');
    const loginModal = document.getElementById('login-modal');
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    if (!authBtn) return;
  
    if (loggedInUser) {
      authBtn.textContent = 'Log Out';
      authBtn.onclick = () => {
        localStorage.removeItem('loggedInUser');
        updateAuthButton();
      };
    } else {
      authBtn.textContent = 'Signup/Login';
      authBtn.onclick = () => {
        if (loginModal) loginModal.style.display = 'flex';
      };
    }
  }
  
  function loadConnectFeed() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => {
        const feed = document.getElementById('connect-feed');
        if (!feed) return;
        feed.innerHTML = '';
        posts.forEach(post => {
          const div = document.createElement('div');
          div.className = 'post';
          div.innerHTML = `<strong>${post.username}</strong>: ${post.content}`;
          feed.appendChild(div);
        });
      });
  }
  
  function bindConnectPost() {
    const button = document.getElementById('submit-post');
    if (!button) return;
  
    button.addEventListener('click', () => {
      const content = document.getElementById('new-post-content').value;
      const username = localStorage.getItem('loggedInUser');
      if (!username || !content) return;
  
      fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, content })
      }).then(res => {
        if (res.ok) {
          document.getElementById('new-post-content').value = '';
          loadConnectFeed();
        } else {
          alert('Failed to post');
        }
      });
    });
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
  
    document.getElementById("nav-connect")?.addEventListener("click", (e) => {
      e.preventDefault();
      loadPageContent("connect");
      bindConnectPost();
      loadConnectFeed();
    });
  
    document.getElementById("nav-about")?.addEventListener("click", (e) => {
      e.preventDefault();
      loadPageContent("about");
    });
  
    document.getElementById("nav-home")?.addEventListener("click", (e) => {
      e.preventDefault();
      loadPageContent("home");
    });
  
    updateAuthButton();
    loadPageContent("home");
  
    const loginForm = document.getElementById('login-form');
    const loginModal = document.getElementById('login-modal');
  
    loginForm?.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'Login successful') {
            localStorage.setItem('loggedInUser', username);
            updateAuthButton();
            loginModal.style.display = 'none';
          } else {
            alert('Login failed: ' + (data.message || 'Invalid credentials'));
          }
        })
        .catch(err => {
          console.error('Login error:', err);
          alert('An error occurred during login.');
        });
    });
  
    const signupForm = document.getElementById('signup-form');
    const signupModal = document.getElementById('signup-modal');
  
    signupForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('signup-username').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
  
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
  
      if (response.ok) {
        localStorage.setItem('loggedInUser', username);
        updateAuthButton();
        signupModal.style.display = 'none';
      } else {
        alert('Signup failed');
      }
    });
  });
  
  window.onload = function () {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginButton = document.querySelector('.btn-login');
    const closeLoginModal = document.getElementById('close-modal');
    const cancelLoginButton = document.getElementById('btn-cancel');
  
    const openSignupLink = document.getElementById('open-signup');
    const closeSignupModal = document.getElementById('close-signup-modal');
    const cancelSignupButton = document.getElementById('btn-signup-cancel');
  
    loginButton?.addEventListener('click', () => loginModal && (loginModal.style.display = 'flex'));
    closeLoginModal?.addEventListener('click', () => loginModal && (loginModal.style.display = 'none'));
    cancelLoginButton?.addEventListener('click', () => loginModal && (loginModal.style.display = 'none'));
  
    openSignupLink?.addEventListener('click', (e) => {
      e.preventDefault();
      if (loginModal) loginModal.style.display = 'none';
      if (signupModal) signupModal.style.display = 'flex';
    });
  
    closeSignupModal?.addEventListener('click', () => signupModal && (signupModal.style.display = 'none'));
    cancelSignupButton?.addEventListener('click', () => signupModal && (signupModal.style.display = 'none'));
  };
  