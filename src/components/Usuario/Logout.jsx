import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Logout() {
  const { setAuth, setCounters } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();

    setAuth({});

    setCounters({});

    navigate("/login");
  }, []);

  return <div>Cerrando sesión</div>;
}
