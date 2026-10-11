import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Deliveries";
import Sales from "./pages/Sales";
import Waste from "./pages/Waste";
import Calendar from "./pages/calendar";
import Configuration from "./pages/Configuration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/Configuration" element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
