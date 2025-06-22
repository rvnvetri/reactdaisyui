import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://localhost:7030/api/auth/login", {
        email,
        password,
      });
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <input className="input input-bordered" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="input input-bordered mt-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary mt-4" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
