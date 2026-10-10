import { Link } from "react-router-dom";
import "../cssFiles/Inventory.css";

const Inventory = () => {
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

      <main className="page-content">{}</main>
    </div>
  );
};

export default Inventory;
