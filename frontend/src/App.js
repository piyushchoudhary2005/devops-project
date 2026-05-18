import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const callBackend = async () => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.text();
    setMsg(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>DevOps Full Stack Demo</h1>

      <button onClick={callBackend}>
        Call Backend
      </button>

      <h2>{msg}</h2>
    </div>
  );
}

export default App;