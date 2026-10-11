import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Could not reach backend:", error));
  }, []);

  return (
    <main>
      <h1>Dash</h1>
      <p>{message}</p>

      <Link to="/inventory">Go to Inventory</Link>
    </main>
  );
};

export default Dashboard;
