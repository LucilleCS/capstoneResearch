import { Link } from "react-router-dom";
import "../cssFiles/navBar.css";
import { useEffect, useState } from "react";

const Deliveries = () => {
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
      </main>
    </div>
  );
};

export default Deliveries;
