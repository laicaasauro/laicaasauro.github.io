import React, { useState } from 'react';
import './App.css';

function App() {
  // Replace these with your actual cake details!
  const [cakes] = useState([
    { id: 1, name: "Chocolate Cake", price: "₱500", img: "chocolate.png" },
    { id: 2, name: "Ube Cake", price: "₱600", img: "ube.png" },
    { id: 3, name: "Red Velvet", price: "₱550", img: "redvelvet.png" }
  ]);

  return (
    <div className="App">
      <header className="shop-header">
        <h1>Welcome to LDA Webshop</h1>
        <p>Delicious Homemade Cakes</p>
      </header>

      <div className="cake-grid">
        {cakes.map(cake => (
          <div key={cake.id} className="cake-card">
            {/* Note: Images must be inside your "public" folder */}
            <img src={cake.img} alt={cake.name} style={{ width: '200px' }} />
            <h3>{cake.name}</h3>
            <p>{cake.price}</p>
            <button onClick={() => alert(`${cake.name} added to cart!`)}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
