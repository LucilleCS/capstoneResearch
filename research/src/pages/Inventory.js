import { Link } from "react-router-dom";
import "../cssFiles/navBar.css";
import { useEffect, useState } from "react";

const Inventory = () => {
  const [inventoryMessage, setInventoryMessage] = useState("");

  const loadInventory = () => {
    fetch("http://localhost:8080/api/inventory")
      .then((response) => response.text())
      .then((data) => setInventoryMessage(data))
      .catch((error) => console.error("Could not reach backend:", error));
  };
  return (
    <div className="inventory-layout">
      <aside className="sidebar">
        <h2 className="logo">StockUp</h2>

        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/deliveries">Deliveries</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/waste">Waste</Link>
          <Link to="/calendar">Calendar View</Link>
          <Link to="/configuration">Configuration</Link>
        </nav>
      </aside>

      <main className="page-content">
        <h1>This is the inventory page</h1>

        <button onClick={loadInventory}>Load Inventory</button>
        <p>{inventoryMessage}</p>
      </main>
    </div>
  );
};

export default Inventory;
