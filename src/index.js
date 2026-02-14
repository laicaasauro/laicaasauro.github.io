import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css'; 

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Laicakes Bakeshop</p>
      <p>Email: laicakes@email.com | Phone: 0939-905-5656</p>
    </footer>
  );
}

function Sidebar({ isLoggedIn, activePage, setIsLoggedIn }) {
  return (
    <nav className="sidebar">
      <Link to="/" className={activePage === 'home' ? 'active' : ''}>Home</Link>
      <Link to="/products" className={activePage === 'products' ? 'active' : ''}>Product Catalog</Link>
      <Link to="/about" className={activePage === 'about' ? 'active' : ''}>About Us</Link>
      <Link to="/contact" className={activePage === 'contact' ? 'active' : ''}>Contact Us</Link>
      <Link to="/cart" className={activePage === 'cart' ? 'active' : ''}>Shopping Cart</Link>
      
      <div style={{ marginTop: '20px', borderTop: '1px solid #e1bee7', paddingTop: '10px' }}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className={activePage === 'login' ? 'active' : ''}>Login</Link>
            <Link to="/signup" className={activePage === 'signup' ? 'active' : ''}>Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className={activePage === 'profile' ? 'active' : ''}>My Profile</Link>
            <Link to="/" onClick={() => setIsLoggedIn(false)} style={{ color: '#e57373' }}>Logout</Link>
          </>
        )}
      </div>
    </nav>
  );
}

function ProductCatalog({ isLoggedIn, setIsLoggedIn }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const pageStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fcfaff',
    color: isDarkMode ? '#fff' : '#4a344d',
    minHeight: '100vh', display: 'flex', flexDirection: 'column'
  };

  return (
    <div style={pageStyle}>
      <header>
        <img src="logo.jpeg" alt="Logo" className="logo" />
        <h1>Laicakes Bakeshop - Catalog</h1>
      </header>
      <div className="container" style={{ flex: 1 }}>
        <Sidebar isLoggedIn={isLoggedIn} activePage="products" setIsLoggedIn={setIsLoggedIn} />
        <main className="content">
          <div className="catalog-grid">
            <div className="card">
              <img src="chocolate.png" alt="Chocolate Cake" className="cake-img" />
              <h3>Double Chocolate Cake</h3>
              <p>₱545.00</p>
              <button className="submit-btn">Add to Cart</button>
            </div>
            <div className="card">
              <img src="ube.png" alt="Ube Cake" className="cake-img" />
              <h3>Ube Custard Cake</h3>
              <p>₱345.00</p>
              <button className="submit-btn">Add to Cart</button>
            </div>
            <div className="card">
              <img src="rainbow.png" alt="Rainbow Cake" className="cake-img" />
              <h3>Rainbow Buttercream</h3>
              <p>₱345.00</p>
              <button className="submit-btn">Add to Cart</button>
            </div>
          </div>
        </main>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>🌓 {isDarkMode ? 'Light' : 'Dark'} Mode</button>
      <Footer />
    </div>
  );
}

function HomePage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="main-wrapper">
      <header><img src="logo.jpeg" className="logo" alt="Logo" /><h1>Laicakes Bakeshop</h1></header>
      <div className="container">
        <Sidebar isLoggedIn={isLoggedIn} activePage="home" setIsLoggedIn={setIsLoggedIn} />
        <main className="content">
          <h2>Our Featured Delights</h2>
          <div className="catalog-grid">
            <div className="card">
              <img src="blackforest.jpeg" className="cake-img" alt="Black Forest" />
              <h3>Black Forest Cake</h3>
              <p className="product-price">₱950.00</p>
              <button className="submit-btn">View Details</button>
            </div>
            <div className="card">
              <img src="shortcake.jpeg" className="cake-img" alt="Strawberry Shortcake" />
              <h3>Strawberry Shortcake</h3>
              <p className="product-price">₱850.00</p>
              <button className="submit-btn">View Details</button>
            </div>
            <div className="card">
              <img src="redvelvet.jpeg" className="cake-img" alt="Red Velvet" />
              <h3>Red Velvet Cake</h3>
              <p className="product-price">₱900.00</p>
              <button className="submit-btn">View Details</button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function AboutUs({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="main-wrapper">
      <header><img src="logo.jpeg" alt="Logo" className="logo" /><h1>Laicakes Bakeshop</h1></header>
      <div className="container">
        <Sidebar isLoggedIn={isLoggedIn} activePage="about" setIsLoggedIn={setIsLoggedIn} />
        <main className="content">
          <h2>About Us</h2>
          <section className="about-section">
            <h3>About Our Bakeshop</h3>
            <p>Artisanal flavors meet elegant design. At Laicakes Bakeshop, we specialize in handcrafted cakes that celebrate the harmony of premium ingredients and sophisticated textures.</p>
          </section>
          <section className="about-section">
            <h3>About the Owner</h3>
            <p>Founded at the intersection of technology and tradition, Laicakes Bakeshop is the creative pursuit of an IT student dedicated to mastering the art of the perfect bake.</p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function ContactUs({ isLoggedIn, setIsLoggedIn }) {
  const handleSubmit = (e) => { e.preventDefault(); alert("Inquiry sent!"); };
  return (
    <div className="main-wrapper">
      <header><img src="logo.jpeg" alt="Logo" className="logo" /><h1>Laicakes Bakeshop</h1></header>
      <div className="container">
        <Sidebar isLoggedIn={isLoggedIn} activePage="contact" setIsLoggedIn={setIsLoggedIn} />
        <main className="content">
          <h2>Contact Us</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Visit the Bakeshop</h3>
              <p><strong>Main Branch:</strong> 123 Sweet Street, Pastry City</p>
              <p><strong>Phone:</strong> 0939-905-5656</p>
            </div>
            <div className="contact-form-wrapper">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit}> 
                <div className="input-group"><label>Your Name</label><input type="text" placeholder="Full Name" required /></div>
                <div className="input-group"><label>Message</label><textarea rows="4" placeholder="How can we help?" required></textarea></div>
                <button type="submit" className="submit-btn">Send Inquiry</button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function ShoppingCart({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="main-wrapper">
      <header>
        <img src="logo.jpeg" alt="Logo" className="logo" />
        <h1>Laicakes Bakeshop</h1>
      </header>

      <div className="container">
        <Sidebar isLoggedIn={isLoggedIn} activePage="cart" setIsLoggedIn={setIsLoggedIn} />

        <main className="content">
          <h2>Shopping Cart</h2>
          
          {/* Item 1 */}
          <div className="cart-item">
            <span><strong>Black Forest Cake (Qty: 1)</strong></span>
            <span>₱1,200.00</span>
          </div>
          
          {/* Item 2 - Restored missing item */}
          <div className="cart-item">
            <span><strong>Strawberry Shortcake (Qty: 2)</strong></span>
            <span>₱1,800.00</span>
          </div>

          {/* Total Section */}
          <div style={{ textAlign: 'right', padding: '20px' }}>
            <h3>Total: ₱3,000.00</h3>
            <Link 
              to="/payment" 
              className="submit-btn" 
              style={{ 
                textDecoration: 'none', 
                display: 'inline-block', 
                width: 'auto', 
                padding: '10px 30px' 
              }}
            >
              Proceed to Payment
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function LoginPage({ isLoggedIn, setIsLoggedIn }) {
  const handleLogin = (e) => { e.preventDefault(); setIsLoggedIn(true); alert("Login successful!"); };
  return (
    <div className="main-wrapper">
      <header><img src="/logo.jpeg" alt="Logo" className="logo" /><h1>Laicakes Bakeshop</h1></header>
      <div className="container">
        <Sidebar isLoggedIn={isLoggedIn} activePage="login" setIsLoggedIn={setIsLoggedIn} />
        <main className="content">
          <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group"><label>Email</label><input type="email" required /></div>
              <div className="input-group"><label>Password</label><input type="password" required /></div>
              <button type="submit" className="submit-btn">Login</button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function SignUp({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="main-wrapper">
      <header><img src="logo.jpeg" alt="Logo" className="logo" /><h1>Laicakes Bakeshop</h1></header>
      <div className="container">
        <Sidebar isLoggedIn={isLoggedIn} activePage="signup" setIsLoggedIn={setIsLoggedIn} />
        <main className="content">
          <div className="form-container">
            <h2>Create Account</h2>
            <button className="submit-btn">Register</button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function UserProfile({ isLoggedIn, setIsLoggedIn }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const pageStyle = {
    backgroundColor: isDarkMode ? '#2c3e50' : '#ffffff',
    color: isDarkMode ? '#ecf0f1' : '#000000',
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={pageStyle}>
      <header>
        <img src="/logo.jpeg" alt="Logo" className="logo" />
        <h1>Laicakes Bakeshop</h1>
      </header>
      
      <div className="container" style={{ flex: 1 }}>
        <Sidebar isLoggedIn={isLoggedIn} activePage="profile" setIsLoggedIn={setIsLoggedIn} />
        
        <main className="content">
          <div className="form-container" style={{color: '#000'}}>
            <h2>User Profile</h2>
            
            {}
            <div className="profile-grid">
              <div className="profile-label">Full Name:</div>
              <div>Laica Asauro</div>
              
              <div className="profile-label">Email:</div>
              <div>laica@gmail.com</div>
              
              <div className="profile-label">Mobile:</div>
              <div>0939-905-5656</div>
            </div>
            
            <button className="submit-btn" style={{ marginTop: '20px' }}>
              Edit Profile
            </button>
          </div>
        </main>
      </div>

      {}
      <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        🌓 {isDarkMode ? 'Light' : 'Dark'} Theme
      </button>
      
      <Footer />
    </div>
  );
}

function PaymentPage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="main-wrapper">
      <header>
        <img src="logo.jpeg" alt="Logo" className="logo" />
        <h1>Checkout - Laicakes</h1>
      </header>
      <div className="container">
        <nav className="sidebar">
          {}
          <Link to="/cart">Back to Cart</Link>
        </nav>
        <main className="content">
          <div className="form-container">
            <h2>Payment Details</h2>
            <p>Total Amount: ₱3,000.00</p>
            
            <div className="input-group">
              <label>Card Number</label>
              <input type="text" placeholder="0000 0000 0000 0000" required />
            </div>

            <div className="input-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" required />
            </div>

            <div className="input-group">
              <label>CVV</label>
              <input type="password" placeholder="123" required />
            </div>

            <button 
              className="submit-btn" 
              onClick={() => alert('Payment Successful!')}
            >
              Confirm Payment
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router basename="/ldawebshop"> 
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/products" element={<ProductCatalog isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={<AboutUs isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/contact" element={<ContactUs isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<ShoppingCart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={<UserProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/payment" element={<PaymentPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);