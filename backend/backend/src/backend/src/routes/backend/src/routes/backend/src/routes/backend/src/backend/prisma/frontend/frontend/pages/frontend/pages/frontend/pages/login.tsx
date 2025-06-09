import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function submit(type: "login"|"signup") {
    const res = await axios.post(`http://localhost:4000/auth/${type}`, { email, password, role: "USER" });
    localStorage.setItem("token", res.data.token);
    router.push("/dashboard");
  }

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold">Login / Signup</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={() => submit("login")}>Login</button>
      <button onClick={() => submit("signup")}>Signup</button>
    </div>
  );
}
