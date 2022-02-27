import { Navigate, Route, Router, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
