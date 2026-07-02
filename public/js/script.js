const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionState = document.getElementById('questionState');
const successState = document.getElementById('successState');
const cuteVideo = document.getElementById('cuteVideo');

// Fixed default coordinates matching the initial CSS layout center
let isFirstMove = true;

function runAway() {
    // Get button dimensions dynamically
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Boundary constraints ensuring full visibility inside screen frame
    const maxX = window.innerWidth - btnWidth - 30;
    const maxY = window.innerHeight - btnHeight - 30;

    // Compute random coordinates (min 30px away from edges)
    const randomX = Math.max(30, Math.floor(Math.random() * maxX));
    const randomY = Math.max(30, Math.floor(Math.random() * maxY));

    // Ensure style stays active and visible
    noBtn.style.display = 'block';
    noBtn.style.visibility = 'visible';
    noBtn.style.opacity = '1';
    
    // Assign position
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Track actions seamlessly across desktop and mobile browsers
noBtn.addEventListener('mouseenter', runAway);
noBtn.addEventListener('mouseover', runAway);
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    runAway();
});

// Clean slate execution for "Yes" click action
yesBtn.addEventListener('click', () => {
    // Hide question block and the mischievous "No" button permanently
    questionState.style.display = 'none';
    noBtn.style.display = 'none'; 
    
    // Activate success UI views
    successState.classList.remove('hidden');
    successState.style.opacity = '1';
    
    // Play video
    cuteVideo.play().catch(err => {
        console.log("Autoplay policies caught; audio streaming requires a click trigger.", err);
    });
});