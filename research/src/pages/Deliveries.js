import { Link } from "react-router-dom";
import "../cssFiles/navBar.css";
import { useEffect, useState } from "react";

const Deliveries = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/inventory")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);
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
        <h1>This is the Deliveries page</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Deliveries;
