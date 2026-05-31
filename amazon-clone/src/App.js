import "./App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  const removeFromCart = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
  };

  return (
    <div>
      <div className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />

        <input
          className="search"
          type="text"
          placeholder="Search Amazon"
        />

        <h3 className="cart">🛒 Cart: {cart}</h3>
      </div>

      <div className="products">

        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"
            alt=""
          />

          <h3>iPhone 16</h3>

          <p>₹79,999</p>

          <p>⭐⭐⭐⭐⭐</p>

          <p>
            <del>₹89,999</del>
          </p>

          <p style={{ color: "green" }}>
            11% OFF
          </p>

          <button onClick={addToCart}>
            Add To Cart
          </button>

          <button onClick={removeFromCart}>
            Remove
          </button>
        </div>

        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
            alt=""
          />

          <h3>HP Laptop</h3>

          <p>₹59,999</p>

          <p>⭐⭐⭐⭐</p>

          <p>
            <del>₹69,999</del>
          </p>

          <p style={{ color: "green" }}>
            14% OFF
          </p>

          <button onClick={addToCart}>
            Add To Cart
          </button>

          <button onClick={removeFromCart}>
            Remove
          </button>
        </div>

        <div className="product">
          <img
            src="https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg"
            alt=""
          />

          <h3>Samsung TV</h3>

          <p>₹34,999</p>

          <p>⭐⭐⭐⭐⭐</p>

          <p>
            <del>₹39,999</del>
          </p>

          <p style={{ color: "green" }}>
            12% OFF
          </p>

          <button onClick={addToCart}>
            Add To Cart
          </button>

          <button onClick={removeFromCart}>
            Remove
          </button>
        </div>

      </div>

      <footer className="footer">
        © 2026 Amazon Clone | Made by Anuj
      </footer>
    </div>
  );
}

export default App;