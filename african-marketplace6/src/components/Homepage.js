import axios from "axios";
import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://african-marketplace-6.herokuapp.com/api/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Home">
      <div className="title">
        <h1>African Marketplace</h1>
        <p>
          Sauti Africa empowers small business owners, particularly women, to
          improve their business and economic opportunities to grow out of
          poverty.
        </p>
      </div>

      <h2>Products</h2>
      <div className="products">
        {items.map((item, index) => {
          return (
            <div className="plainItem" key={index}>
              <p>Item: {item.item}</p>
              <p>Price: ${item.price}</p>
            </div>
          );
        })}
      </div>
      <nav>
        <Link to="/signup">Sign up</Link>
      </nav>
    </div>
  );
}
