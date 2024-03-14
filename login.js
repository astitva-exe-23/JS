// script.js
document.addEventListener('DOMContentLoaded', function() {
    const captchaText = document.getElementById('captcha-text');
    const captchaInput = document.getElementById('captcha');
    const loginForm = document.getElementById('login-form');

    // Generate a random alphanumeric string for the captcha
    function generateCaptcha() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Set the captcha text
    captchaText.textContent = generateCaptcha();

    // Validate the captcha on form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (captchaInput.value === captchaText.textContent) {
            alert('Login successful!');
            // Here you can add your logic to proceed with the login
        } else {
            alert('Captcha does not match. Please try again.');
            // Regenerate captcha
            captchaText.textContent = generateCaptcha();
        }
    });
});
