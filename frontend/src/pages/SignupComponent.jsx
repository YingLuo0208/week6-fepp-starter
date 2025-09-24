// src/pages/Signup.jsx
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, loading, error } = useSignup(setIsAuthenticated);

  const handleSignup = () => {
    signup(email, password);
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSignup} disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
      {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
    </div>
  );
};

export default SignupComponent;
