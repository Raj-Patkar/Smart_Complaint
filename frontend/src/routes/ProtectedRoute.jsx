import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getMe } from "../services/auth";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

 useEffect(() => {
  console.log("useEffect triggered"); // ADD THIS

  const checkAuth = async () => {
    console.log("Calling /me API..."); // ADD THIS

    try {
      const res = await getMe();
      console.log("Response:", res); // ADD THIS

      if (res && res.user) {
        setUser(res.user);
      }
    } catch (err) {
      console.log("Auth failed", err);
    }

    setLoading(false);
  };

  checkAuth();
}, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;