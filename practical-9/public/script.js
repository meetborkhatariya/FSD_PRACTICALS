// Hero button alert
document.getElementById('learnBtn').addEventListener('click', () => {
    alert("Thanks for clicking! More info coming soon.");
});

// Contact form submission
const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        responseMsg.textContent = result.message;
        form.reset();
    } catch (err) {
        responseMsg.textContent = "Error sending message. Try again.";
    }
});
