import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HumidityForm from "./Components/HumidityForm/HumidityForm";
import Header from "./Header";
import MoistureForm from "./Components/MoistureForm/MoistureForm";
import TemperatureForm from "./Components/TemperatureForm/TemperatureForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="humidity" element={<HumidityForm />} />
        <Route path="moisture" element={<MoistureForm />} />
        <Route path="temperature" element={<TemperatureForm />} />
      </Routes>
    </Router>
  );
}

export default App;
