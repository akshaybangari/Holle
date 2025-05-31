<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holle - Limited Edition T-Shirts</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Lato&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Lato', sans-serif; background: #FFFFFF; line-height: 1.6; }
    /* Hero Section */
    .hero {
      background: url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600&h=900&fit=crop') center/cover no-repeat;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    .hero h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 48px;
      margin-bottom: 10px;
    }
    .hero p {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      padding: 12px 24px;
      border-radius: 5px;
      text-decoration: none;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      background: #F59E0B;
      color: white;
      transition: transform 0.2s;
    }
    .btn:hover {
      transform: scale(1.1);
    }
    .btn img {
      width: 20px;
      height: 20px;
      margin-left: 8px;
    }
    /* Product Section */
    .product-section {
      padding: 50px 20px;
      text-align: center;
      background: #F9FAFB;
    }
    .product-section h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      color: #1E3A8A;
      margin-bottom: 20px;
    }
    .product-showcase {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin: 20px 0;
    }
    .product-card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      width: 200px;
      text-align: center;
    }
    .product-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
    }
    .product-card h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      margin: 10px 0;
    }
    .product-card p {
      font-size: 16px;
      color: #EF4444;
    }
    .product-card .btn {
      margin-top: 10px;
      font-size: 14px;
    }
    /* Progress Bar */
    .progress-bar {
      width: 50%;
      margin: 20px auto;
      background: #E5E7EB;
      border-radius: 5px;
      overflow: hidden;
    }
    .progress {
      width: 70%;
      height: 20px;
      background: #F59E0B;
      text-align: center;
      color: white;
      line-height: 20px;
      font-size: 12px;
    }
    /* Social Proof */
    .social-proof {
      padding: 50px 20px;
      text-align: center;
    }
    .social-proof h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      color: #1E3A8A;
      margin-bottom: 20px;
    }
    .testimonials {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    .testimonial {
      background: #F9FAFB;
      padding: 20px;
      border-radius: 10px;
      width: 250px;
      text-align: center;
    }
    .testimonial img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    /* Footer */
    .footer {
      background: #1E3A8A;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .footer a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
    /* Responsive */
    @media (max-width: 600px) {
      .hero h1 { font-size: 32px; }
      .hero p { font-size: 16px; }
      .product-section h2 { font-size: 24px; }
      .social-proof h2 { font-size: 24px; }
      .progress-bar { width: 80%; }
    }
  </style>
</head>
<body>
  <!-- Hero Section -->
  <div class="hero">
    <h1>Holle: Limited Edition T-Shirts</h1>
    <p>Discover the exclusive Holle T-shirt collection – only 100 pieces available this month!</p>
    <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20a%20T-shirt%21%20Can%20you%20help%20me%20with%20my%20order%3F" class="btn">Shop Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a>
  </div>
  <!-- Product Section -->
  <div class="product-section">
    <h2>Explore Holle T-Shirts</h2>
    <div class="product-showcase">
      <div class="product-card">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=150&fit=crop" alt="Holle Classic Tee">
        <h3>Holle Classic Tee</h3>
        <p>$25</p>
        <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Classic%20Tee%20for%20%2425.%20Can%20you%20help%20me%20with%20my%20order%3F" class="btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a>
      </div>
      <div class="product-card">
        <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=200&h=150&fit=crop" alt="Holle Graphic Tee">
        <h3>Holle Graphic Tee</h3>
        <p>$30</p>
        <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Graphic%20Tee%20for%20%2430.%20Can%20you%20help%20me%20with%20my%20order%3F" class="btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a>
      </div>
      <div class="product-card">
        <img src="https://images.unsplash.com/photo-1594032194509-095602d7e0d6?w=200&h=150&fit=crop" alt="Holle Retro Tee">
        <h3>Holle Retro Tee</h3>
        <p>$28</p>
        <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Retro%20Tee%20for%20%2428.%20Can%20you%20help%20me%20with%20my%20order%3F" class="btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress">70% Sold Out – Hurry!</div>
    </div>
    <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20a%20T-shirt%21%20Can%20you%20help%20me%20with%20my%20order%3F" id="buy-now" class="btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a>
  </div>
  <!-- Social Proof -->
  <div class="social-proof">
    <h2>What Our Customers Say</h2>
    <div class="testimonials">
      <div class="testimonial">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" alt="Customer">
        <p>“I love my Holle T-shirt! The design is unique and the quality is amazing.” – Sarah K.</p>
      </div>
      <div class="testimonial">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop" alt="Customer">
        <p>“Fast shipping and the T-shirt fits perfectly. Will buy again!” – Mike T.</p>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <div class="footer">
    <p>Holle © 2025</p>
    <a href="#about">About</a> | <a href="#contact">Contact</a> | <a href="#faq">FAQ</a> | <a href="#privacy">Privacy Policy</a>
    <p><a href="https://instagram.com">Instagram</a> | <a href="https://x.com">X</a></p>
  </div>
</body>
</html>
