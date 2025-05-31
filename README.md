
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holle - Limited Edition T-Shirts</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Lato&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Lato', sans-serif; background: #FFFFFF; line-height: 1.6; }
    /* Logo Section */
    .logo-section {
      text-align: center;
      padding: 20px;
      background: #F9FAFB;
    }
    .logo-section img {
      max-width: 150px;
      height: auto;
    }
    /* Hero Section */
    .hero {
      background: url('hero.jpg') center/cover no-repeat;
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
    .qr-code {
      margin-top: 20px;
    }
    .qr-code img {
      max-width: 150px;
      height: auto;
    }
    /* Responsive */
    @media (max-width: 600px) {
      .hero { height: 80vh; }
      .hero h1 { font-size: 28px; }
      .hero p { font-size: 16px; }
      .btn { padding: 10px 20px; font-size: 14px; }
      .product-section { padding: 30px 10px; }
      .product-section h2 { font-size: 24px; }
      .product-showcase { gap: 15px; }
      .product-card { width: 160px; }
      .product-card img { height: 120px; }
      .product-card h3 { font-size: 16px; }
      .product-card p { font-size: 14px; }
      .progress-bar { width: 80%; }
      .social-proof { padding: 30px 10px; }
      .social-proof h2 { font-size: 24px; }
      .testimonial { width: 100%; max-width: 300px; }
    }
  </style>
</head>
<body>
  <!-- Logo Section -->
  <div class="logo-section">
    <img src="holle-logo.png" alt="Holle Logo" loading="lazy">
  </div>
  <!-- Hero Section -->
  <div class="hero">
    <h1>Holle: Limited Edition T-Shirts</h1>
    <p>Discover the exclusive Holle T-shirt collection – only 100 pieces available this month!</p>
    <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20a%20T-shirt%21%20Can%20you%20help%20me%20with%20my%20order%3F" class="btn">Shop Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" loading="lazy"></a>
  </div>
  <!-- Product Section -->
  <div class="product-section">
    <h2>Explore Holle T-Shirts</h2>
    <div class="product-showcase">
      <div class="product-card">
        <img src="classic-tee.jpg" alt="Holle Classic Tee" loading="lazy">
        <h3>Holle Classic Tee</h3>
        <p>$25</p>
        <a href="https://wa.me/917889240438?
