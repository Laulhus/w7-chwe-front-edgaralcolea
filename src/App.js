import { Navigate, Route, Routes } from "react-router-dom";
import RegisterFormComponent from "./components/RegisterFormComponent/RegisterFormComponent";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <RegisterFormComponent />
    </div>
  );
}

export default App;
