import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} exact /> 
      </Routes>
    </Router>
  );
}