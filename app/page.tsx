<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roomify - Find Your Perfect Roommate Match</title>
    <script src="./assets/js/theme.js"></script>
    <!-- CSS -->
<link rel="stylesheet" href="./assets/css/theme.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style-home.css">  
    <link rel="stylesheet" href="./assets/css/background.css">
    <link rel="stylesheet" href="./assets/css/logo.css">
</head>

<body>
    <header>
        <div class="logo">
            <a><img src="./assets/images/logo.png" alt="Roomify Logo"></a>
        </div>
        <h1>Roomify</h1>
        <nav>
            <a href="./html-pages/login-page.html">Login</a>
            <a href="./html-pages/signup-page.html">Sign Up</a>
        </nav>
    </header>
    

<section class="hero visible">
    <h2>Find Your Perfect Roommate Match</h2>
    <p>The easiest way to find the roommate of your dreams!</p>
    <!-- One day the Get started button can check if user is signed in and if they are it takes them to 
     profile dashboard and if not they are taken to -->
    <button>Get Started</button>
</section>

<section class="how-it-works">
    <h3>How It Works</h3>
    <div class="card">
        <p><strong>Step 1:</strong> Create a profile.</p>
        <p><strong>Step 2:</strong> Browse potential roommates.</p>
        <p><strong>Step 3:</strong> Match and connect.</p>
    </div>
</section>

<section class="features">
    <h3>Features</h3>
    <div class="card">
        <p>🔍 Roommate compatibility algorithm.</p>
        <p>🛡️ Safe and secure platform with verified profiles.</p>
        <p>📊 Match based on preferences like cleanliness, noise level, and more!</p>
    </div>
</section>

<section class="testimonials">
    <h3>User Testimonials</h3>
    <div class="card">
        <p>"I found the perfect roommate in less than a week!" - Sarah M.</p>
        <p>"Roomify made the process so easy!" - John D.</p>
    </div>
</section>

<section class="faq">
    <h3>Frequently Asked Questions</h3>
    <div class="card">
        <p><strong>Q:</strong> How do I match with someone?</p>
        <p><strong>A:</strong> Simply swipe through profiles, and when both parties match, you can connect!</p>
        <p><strong>Q:</strong> Is my information secure?</p>
        <p><strong>A:</strong> Yes, we take security seriously with verified profiles and encryption.</p>
    </div>
</section>

<footer class="footer">
    <p>&copy; 2024 Roomify. All rights reserved.</p>
    <a href="./about.html">About Us</a> | 
    <a href="./privacy.html">Privacy Policy</a> | 
    <a href="./contact.html">Contact Us</a>
    <div class="social-media">
        <a href="https://www.facebook.com/"><img src="./assets/images/facebook-icon.png" alt="Facebook"></a>
        <!-- CHange link from twitter png to bluesky -->
        <a href="https://bsky.app/"><img src="./assets/images/twitter-icon.png" alt="Bluesky"></a>
        <a href="https://www.instagram.com/"><img src="./assets/images/instagram-icon.png" alt="Instagram"></a>
    </div>
</footer>

<script>
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (sectionTop < screenPosition) {
                section.classList.add('visible');
            }
        });
    });
</script>

</body>
</html>
