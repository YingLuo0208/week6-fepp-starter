// src/hooks/useSignup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = (setIsAuthenticated) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signup = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
        navigate("/");
      } else {
        setError("Signup failed. Please check your input and try again.");
      }
    } catch (err) {
      setError("Error during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;
