// DOM Elements
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const waxSeal = document.getElementById('waxSeal');
const hiddenMessage = document.getElementById('hiddenMessage');

// Love Letter Content - WITHOUT DECEMBER 2024 DATE
const letterContent = `
    <div class="letter-content">
        <div class="salutation">Babbu,</div>
        
        <div class="letter-line">
            <p class="message">I love your patience, your pureness, and your endless love.</p>
        </div>
        
        <div class="letter-line" style="animation-delay: 0.3s">
            <p class="message">Remember when you fed me with your hands? That memory still makes my heart smile.</p>
        </div>
        
        <div class="letter-line" style="animation-delay: 0.6s">
            <div class="special-message">
                I'm really grateful for you and your love, it completes me.
            </div>
        </div>
        
        <div class="letter-line" style="animation-delay: 0.9s">
            <div class="special-message">
                You are the only one I never wanna lose in life, and the best thing that ever happened to me.
            </div>
        </div>
        
        <div class="letter-line" style="animation-delay: 1.2s">
            <p class="message">Here's to us living together happily in 2026.</p>
        </div>
        
        <div class="letter-line" style="animation-delay: 1.5s">
            <div class="new-year-wish">
                💝 Happy New Year Love 💝
            </div>
        </div>
        
        <div class="signature">Forever yours,<br>Barre</div>
    </div>
`;

// State variables
let isLetterOpen = false;

// Initialize
function init() {
    // Insert letter content
    letter.innerHTML = letterContent;
    
    // Add envelope click event
    envelope.addEventListener('click', openLetter);
    
    // Add wax seal click event
    waxSeal.addEventListener('click', showHiddenMessage);
}

// Open the love letter
function openLetter() {
    if (isLetterOpen) return;
    
    isLetterOpen = true;
    
    // Add open class to letter
    letter.classList.add('open');
    
    // Change instruction text
    const instruction = document.querySelector('.instruction');
    if (instruction) {
        instruction.textContent = 'Click the wax seal for a surprise! ✨';
        instruction.style.animation = 'none';
        setTimeout(() => {
            instruction.style.animation = 'pulse 2s infinite';
        }, 100);
    }
    
    // Disable envelope click
    envelope.style.cursor = 'default';
    envelope.style.pointerEvents = 'none';
}

// Show hidden message
function showHiddenMessage() {
    if (!isLetterOpen) {
        alert('Open the letter first! 💌');
        return;
    }
    
    hiddenMessage.classList.add('active');
}

// Close hidden message
function closeMessage() {
    hiddenMessage.classList.remove('active');
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', init);

// Make functions globally available for HTML onclick
window.closeMessage = closeMessage;