import AddPatient from "./pages/AddPatient";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';  // Correct import for Login
import Register from './pages/Register'; // Correct import for Register
import Dashboard from './pages/Dashboard'; // Correct import for Dashboard

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-patient" element={<AddPatient />} />
      </Routes>
    </Router>
  );
};

export default App;
