import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Login() {
  const { setUser, setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // API integration next step
    setUser({ email });
    setToken("dummy-token");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>

      <div className="link">
        <Link to="/signup">Create account</Link>
      </div>
    </div>
  );
}
