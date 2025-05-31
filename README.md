
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holle - T-Shirts for Men</title>
  <link rel="icon" type="image/png" href="favicon.png">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Lato&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Lato', sans-serif; background: #FFFFFF; line-height: 1.6; }
    /* Header Section */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background: #F9FAFB;
    }
    .header .logo img {
      max-width: 150px;
      height: auto;
    }
    .cart {
      text-align: right;
    }
    .cart p {
      font-size: 14px;
      color: #666;
    }
    /* Filter Section */
    .filter-section {
      padding: 20px;
      background: #F9FAFB;
      text-align: center;
    }
    .filter-section h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: #1E3A8A;
      margin-bottom: 10px;
    }
    .filter-section .item-count {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }
    .filter-section .colors {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .filter-section .color {
      padding: 5px 10px;
      border: 1px solid #E5E7EB;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
    }
    .filter-section .color:hover {
      background: #F59E0B;
      color: white;
    }
    /* Main Content */
    .main-content {
      padding: 50px 20px;
      text-align: center;
    }
    .main-content h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      color: #1E3A8A;
      margin-bottom: 20px;
    }
    .main-content .read-more {
      font-size: 16px;
      color: #F59E0B;
      text-decoration: none;
      margin-bottom: 30px;
      display: inline-block;
    }
    .main-content .read-more:hover {
      text-decoration: underline;
    }
    .main-content h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 28px;
      color: #1E3A8A;
      margin: 40px 0 20px;
    }
    .main-content p {
      font-size: 16px;
      color: #333;
      margin-bottom: 20px;
    }
    .main-content .sub-section {
      margin: 30px 0;
    }
    .main-content .sub-section h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      color: #1E3A8A;
      margin-bottom: 10px;
    }
    .main-content .sub-section ul {
      list-style: none;
      padding: 0;
    }
    .main-content .sub-section ul li {
      font-size: 16px;
      color: #333;
      margin: 10px 0;
    }
    .main-content .product-card {
      background: #F9FAFB;
      padding: 20px;
      border-radius: 10px;
      margin: 20px auto;
      max-width: 300px;
      text-align: center;
    }
    .main-content .product-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
    }
    .main-content .product-card h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      margin: 10px 0;
    }
    .main-content .product-card p {
      font-size: 16px;
      color: #EF4444;
    }
    .main-content .product-card .pro-tip {
      font-size: 14px;
      color: #666;
      margin: 10px 0;
    }
    .main-content .product-card select {
      width: 100%;
      padding: 5px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #E5E7EB;
      font-family: 'Lato', sans-serif;
    }
    .main-content .product-card .btn {
      display: inline-flex;
      align-items: center;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      background: #F59E0B;
      color: white;
      transition: transform 0.2s;
    }
    .main-content .product-card .btn:hover {
      transform: scale(1.1);
    }
    .main-content .product-card .btn img {
      width: 20px;
      height: 20px;
      margin-left: 8px;
    }
    /* Why Shop Section */
    .why-shop {
      padding: 50px 20px;
      background: #F9FAFB;
      text-align: center;
    }
    .why-shop h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 28px;
      color: #1E3A8A;
      margin-bottom: 20px;
    }
    .why-shop ul {
      list-style: none;
      padding: 0;
    }
    .why-shop ul li {
      font-size: 16px;
      color: #333;
      margin: 10px 0;
    }
    /* Call to Action */
    .cta {
      padding: 50px 20px;
      text-align: center;
    }
    .cta h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 28px;
      color: #1E3A8A;
      margin-bottom: 20px;
    }
    /* FAQ Section */
    .faq {
      padding: 50px 20px;
      background: #F9FAFB;
      text-align: center;
    }
    .faq h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 28px;
      color: #1E3A8A;
      margin-bottom: 20px;
    }
    .faq .question {
      margin: 20px 0;
    }
    .faq .question h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      color: #1E3A8A;
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
      .header { flex-direction: column; text-align: center; }
      .header .logo img { margin-bottom: 10px; }
      .main-content { padding: 30px 10px; }
      .main-content h1 { font-size: 24px; }
      .main-content h2 { font-size: 20px; }
      .main-content .sub-section h3 { font-size: 18px; }
      .product-card { max-width: 100%; }
      .why-shop, .cta, .faq { padding: 30px 10px; }
      .why-shop h2, .cta h2, .faq h2 { font-size: 20px; }
    }
  </style>
</head>
<body>
  <!-- Header Section -->
  <div class="header">
    <div class="logo">
      <img src="holle-logo.png" alt="Holle Logo" loading="lazy">
    </div>
    <div class="cart">
      <p>looks like your cart is on a diet<br>waiting for some trendy threads to bulk it up!</p>
    </div>
  </div>

  <!-- Filter Section -->
  <div class="filter-section">
    <h2>Filter By Color</h2>
    <div class="item-count">50 items</div>
    <div class="colors">
      <div class="color">Black</div>
      <div class="color">White</div>
      <div class="color">Navy</div>
      <div class="color">Red</div>
      <div class="color">Green</div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    <h1>T-Shirts for Men</h1>
    <a href="#tshirt-guide" class="read-more">Read More about T-Shirts for Men</a>

    <div id="tshirt-guide">
      <h2>T-Shirts for Men: Style, Fit and Everything in Between</h2>
      <p>Ever stood in front of your closet, wondering what to wear? A Holle T-shirt is your ultimate style hack! Whether you’re heading to college, hanging out with friends, or planning a weekend adventure, our T-shirts are your go-to choice. They’re casual, comfortable, and when styled right, make you look effortlessly cool.</p>
      <p>Ready to explore the best T-shirts for men? Let’s dive into fits, fabrics, trendy colors, styling tips, and the hottest Holle T-shirts that deserve a spot in your wardrobe.</p>

      <div class="sub-section">
        <h3>Different Men's T-Shirt Fits and Which One Suits You Best</h3>
        <p>Not all T-shirts are created equal. The right fit can elevate your outfit, while the wrong one can ruin your look. Here’s how to choose:</p>
        <ul>
          <li><strong>Slim Fit – For the Gym Bros and Lean Machines:</strong> Perfect for showing off your physique. Pair with cargo joggers and sneakers for a sharp look.</li>
          <li><strong>Oversized Fit – The Streetwear King:</strong> Gen-Z’s favorite! Great for a baggy, effortless vibe. Layer with a flannel shirt and wear with cargo pants.</li>
          <li><strong>Regular Fit – The Everyday Hero:</strong> Not too tight, not too loose. Ideal for college or casual days at home.</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>Neck Types: Which One Should You Pick?</h3>
        <ul>
          <li><strong>Round Neck:</strong> A classic that works with all outfits.</li>
          <li><strong>V-Neck:</strong> Great for layered looks and elongates the neck.</li>
          <li><strong>Polo Neck:</strong> Smart-casual, perfect for standalone or layered wear.</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>Trending Colors in Holle T-Shirts for Men</h3>
        <p>Go beyond basic black and white with these trendy shades:</p>
        <ul>
          <li><strong>Earthy Tones (Olive, Tan):</strong> For a minimal, cool vibe.</li>
          <li><strong>Pastels (Mint Green, Lavender):</strong> Soft yet bold – Gen-Z energy.</li>
          <li><strong>Classic Navy and Red:</strong> Timeless colors for every occasion.</li>
        </ul>
      </div>

      <div class="sub-section">
        <h3>Fabric Matters: Choosing the Right Material</h3>
        <p>Comfort is key! Here’s what to look for:</p>
        <ul>
          <li><strong>Cotton T-Shirts:</strong> Soft, breathable, and ideal for summer.</li>
          <li><strong>Cotton Blends:</strong> Durable mix of cotton and polyester.</li>
          <li><strong>Polyester:</strong> Great for workouts and moisture-wicking comfort.</li>
        </ul>
      </div>

      <h2>Best-Selling T-Shirts for Men and How to Style Them</h2>
      <div class="product-card">
        <img src="oversized-tee.jpg" alt="Holle Oversized Tee" loading="lazy">
        <h3>Oversized T-Shirts – The Ultimate Chill Vibe</h3>
        <p>$30</p>
        <p>Perfect for casual outings, these are lightweight and cool.</p>
        <p class="pro-tip">Pro Tip: Pair with cargo pants for a trendy streetwear aesthetic.</p>
        <select class="size-select" data-base-url="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Oversized%20Tee%20for%20%2430%20in%20size%20">
          <option value="S">Small (S)</option>
          <option value="M" selected>Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
        </select>
        <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Oversized%20Tee%20for%20%2430%20in%20size%20M." class="btn buy-now-btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" loading="lazy"></a>
      </div>

      <div class="product-card">
        <img src="classic-tee.jpg" alt="Holle Classic Tee" loading="lazy">
        <h3>Classic T-Shirts – The Everyday Hero</h3>
        <p>$25</p>
        <p>A must-have for every wardrobe. Comfortable and versatile.</p>
        <p class="pro-tip">Pro Tip: Wear with jeans and sneakers for a casual look.</p>
        <select class="size-select" data-base-url="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Classic%20Tee%20for%20%2425%20in%20size%20">
          <option value="S">Small (S)</option>
          <option value="M" selected>Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
        </select>
        <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Classic%20Tee%20for%20%2425%20in%20size%20M." class="btn buy-now-btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" loading="lazy"></a>
      </div>

      <div class="product-card">
        <img src="graphic-tee.jpg" alt="Holle Graphic Tee" loading="lazy">
        <h3>Graphic T-Shirts – For That Extra Pop</h3>
        <p>$30</p>
        <p>Make a statement with bold designs and vibrant colors.</p>
        <p class="pro-tip">Pro Tip: Pair with denim jeans or cotton cargos.</p>
        <select class="size-select" data-base-url="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Graphic%20Tee%20for%20%2430%20in%20size%20">
          <option value="S">Small (S)</option>
          <option value="M" selected>Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
        </select>
        <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Graphic%20Tee%20for%20%2430%20in%20size%20M." class="btn buy-now-btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" loading="lazy"></a>
      </div>

      <div class="product-card">
        <img src="retro-tee.jpg" alt="Holle Retro Tee" loading="lazy">
        <h3>Retro T-Shirts – Vintage Vibes</h3>
        <p>$28</p>
        <p>Bring back the classics with a modern twist.</p>
        <p class="pro-tip">Pro Tip: Style with shorts and slides for a laid-back look.</p>
        <select class="size-select" data-base-url="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Retro%20Tee%20for%20%2428%20in%20size%20">
          <option value="S">Small (S)</option>
          <option value="M" selected>Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
        </select>
        <a href="https://wa.me/917889240438?text=Hi%20Holle%2C%20I%27d%20like%20to%20buy%20the%20Holle%20Retro%20Tee%20for%20%2428%20in%20size%20M." class="btn buy-now-btn">Buy Now <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" loading="lazy"></a>
      </div>
    </div>
  </div>

  <!-- Why Shop Section -->
  <div class="why-shop">
    <h2>Why Shop for Men’s T-Shirts Online at Holle?</h2>
    <ul>
      <li><strong>Insane Variety:</strong> From classic to graphic tees, we have styles for every mood.</li>
      <li><strong>Easy Returns and Exchanges:</strong> Got the wrong fit? Swap it out hassle-free.</li>
      <li><strong>Secure Payment and Fast Delivery:</strong> Order from home and get it delivered quickly.</li>
      <li><strong>Exclusive Online Discounts:</strong> Snag the best deals on Holle T-shirts.</li>
    </ul>
  </div>

  <!-- Call to Action -->
  <div class="cta">
    <h2>Time to Elevate Your T-Shirt Game - Shop Online</h2>
    <p>Your wardrobe deserves an upgrade! Explore our range, including sizes up to XL, and make every outfit count.</p>
  </div>

  <!-- FAQ Section -->
  <div class="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="question">
      <h3>How do I find the perfect T-shirt size?</h3>
      <p>We offer sizes from S to XL. Check our size guide before you buy.</p>
    </div>
    <div class="question">
      <h3>What’s the best way to style a Holle oversized T-shirt?</h3>
      <p>Pair it with cargo pants and sneakers for a trendy streetwear look.</p>
    </div>
    <div class="question">
      <h3>Are Holle’s cotton T-shirts good for summer?</h3>
      <p>Yes! Our cotton T-shirts are breathable and perfect for warm weather.</p>
    </div>
    <div class="question">
      <h3>Can I return a T-shirt if the fit isn’t right?</h3>
      <p>Yes! We have a 7-day hassle-free return and exchange policy.</p>
    </div>
    <div class="question">
      <h3>What payment options are available?</h3>
      <p>We accept all major cards, UPI, net banking, and COD.</p>
    </div>
    <div class="question">
      <h3>What’s the best way to care for my Holle T-shirts?</h3>
      <p>Machine wash with cold water and avoid high heat drying.</p>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <p>Holle © 2025</p>
    <a href="#about">About</a> | <a href="#contact">Contact</a> | <a href="#faq">FAQ</a> | <a href="#privacy">Privacy Policy</a>
    <p><a href="https://instagram.com">Instagram</a> | <a href="https://x.com">X</a></p>
    <div class="qr-code">
      <p>Scan to Order via WhatsApp</p>
      <img src="whatsapp-qr.png" alt="WhatsApp QR Code" loading="lazy">
    </div>
  </div>

  <!-- JavaScript for Size Selection -->
  <script>
    document.querySelectorAll('.size-select').forEach(select => {
      select.addEventListener('change', function() {
        const baseUrl = this.getAttribute('data-base-url');
        const size = this.value;
        const btn = this.nextElementSibling;
        btn.href = baseUrl + size + '.';
      });
    });
  </script>
</body>
</html>
