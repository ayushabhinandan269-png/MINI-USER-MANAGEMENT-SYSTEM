import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { token, user } = useAuth();
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessage("Backend connected successfully");
      } catch (err) {
        setError("Failed to connect to backend");
      }
    };

    fetchData();
  }, [token]);

  if (error) {
    return (
      <div className="container">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome {user?.email || "User"}</p>
      <p>{message}</p>
    </div>
  );
}
