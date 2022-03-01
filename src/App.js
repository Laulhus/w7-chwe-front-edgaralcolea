import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "./redux/actions/actionCreators";
import MainPage from "./pages/MainPage";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { picture, userName, id } = jwtDecode(token);
      dispatch(loginUserAction({ picture, userName, id, loggedIn: true }));
    }
    navigate("/main");
  }, [dispatch, navigate]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
