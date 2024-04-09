import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { AuthProvider } from "../context/AuthProvider";
import Logout from "../components/Usuario/Logout";

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
