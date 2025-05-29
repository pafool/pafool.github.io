// Study Room Interaction Handlers
// This file contains all the interaction logic for different objects in the study room

/**
 * Laptop Interaction Handler
 * Handles clicks on the laptop/MacBook
 */
export function handleLaptopClick() {
    console.log('Laptop clicked - opening portfolio website...');
    
    // Example actions you can implement:
    // window.open('https://your-portfolio.com', '_blank');
    
    // Or show a modal with your coding projects
    showModal('Laptop', `
        <h3>💻 My Development Setup</h3>
        <p>This is my trusty MacBook where I code my projects!</p>
        <ul>
            <li>React & Next.js Applications</li>
            <li>Python Data Science Projects</li>
            <li>3D Web Experiences with Three.js</li>
            <li>Mobile Apps with React Native</li>
        </ul>
        <button onclick="window.open('https://github.com/pafool', '_blank')">
            View My GitHub
        </button>
    `);
}

/**
 * Badminton Interaction Handler
 * Handles clicks on badminton equipment
 */
export function handleBadmintonClick() {
    console.log('Badminton gear clicked - showing sports achievements...');
    
    showModal('Badminton', `
        <h3>🏸 Sports & Recreation</h3>
        <p>Badminton is one of my favorite sports!</p>
        <ul>
            <li>University Badminton Team Member</li>
            <li>Local Tournament Participant</li>
            <li>Doubles Specialist</li>
            <li>Weekend League Player</li>
        </ul>
        <p>Sports teach discipline, teamwork, and perseverance - values I bring to my work.</p>
    `);
}

/**
 * Calendar Interaction Handler
 * Handles clicks on calendar items
 */
export function handleCalendarClick() {
    console.log('Calendar clicked - showing schedule...');
    
    showModal('Calendar', `
        <h3>📅 My Schedule</h3>
        <p>Here's what I'm currently working on:</p>
        <div class="schedule">
            <div class="schedule-item">
                <strong>This Week:</strong> Final year project development
            </div>
            <div class="schedule-item">
                <strong>Upcoming:</strong> Job interviews and portfolio reviews
            </div>
            <div class="schedule-item">
                <strong>Goals:</strong> Launch personal website and mobile app
            </div>
        </div>
        <p>Always planning ahead and staying organized!</p>
    `);
}

/**
 * Certificate Interaction Handler
 * Handles clicks on certificates/credentials
 */
export function handleCertificateClick() {
    console.log('Certificate clicked - showing credentials...');
    
    showModal('Certificates', `
        <h3>🏆 Certifications & Achievements</h3>
        <p>Here are some of my achievements/awards:</p>
        <ul>
            <li>Coming soon!</li>
        </ul>
    `);
}

/**
 * Piano Interaction Handler
 * Handles clicks on piano/music equipment
 */
export function handlePianoClick() {
    console.log('Piano clicked - showing music projects...');
    
    showModal('Piano', `
        <h3>🎹 Music & Creativity</h3>
        <p>Music is my creative outlet and source of inspiration!</p>
        <ul>
            <li>Self-taught pianist (5+ years)</li>
            <li>Compose original pieces</li>
            <li>Record and produce music</li>
            <li>Perform at local events</li>
        </ul>
        <p>Music enhances my creativity and problem-solving skills in programming.</p>
        <button onclick="playPianoSample()">🎵 Play Sample</button>
    `);
}

/**
 * Modal System for Displaying Content
 */
function showModal(title, content) {
    // Remove existing modal if any
    const existingModal = document.getElementById('interaction-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML
    const modalHTML = `
        <div id="interaction-modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add CSS if not already present
    if (!document.getElementById('modal-styles')) {
        const styles = `
            <style id="modal-styles">
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    backdrop-filter: blur(5px);
                }
                
                .modal-content {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    border-radius: 15px;
                    max-width: 500px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    color: white;
                }
                
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .modal-header h2 {
                    margin: 0;
                    font-size: 24px;
                }
                
                .modal-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 30px;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background 0.3s ease;
                }
                
                .modal-close:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
                
                .modal-body {
                    padding: 20px;
                }
                
                .modal-body ul {
                    padding-left: 20px;
                    margin: 15px 0;
                }
                
                .modal-body li {
                    margin: 8px 0;
                }
                
                .modal-body button {
                    background: rgba(255, 255, 255, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 25px;
                    cursor: pointer;
                    margin: 10px 5px 0 0;
                    transition: all 0.3s ease;
                }
                
                .modal-body button:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-2px);
                }
                
                .schedule-item {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 10px;
                    margin: 8px 0;
                    border-radius: 8px;
                    border-left: 3px solid #4a90e2;
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

/**
 * Close Modal Function
 */
window.closeModal = function() {
    const modal = document.getElementById('interaction-modal');
    if (modal) {
        modal.remove();
    }
};

/**
 * Piano Sample Player (placeholder)
 */
window.playPianoSample = function() {
    console.log('Playing piano sample...');
    // You could implement actual audio playback here
    // For now, just show an alert
    alert('🎵 Playing a beautiful piano melody... 🎶');
};

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});