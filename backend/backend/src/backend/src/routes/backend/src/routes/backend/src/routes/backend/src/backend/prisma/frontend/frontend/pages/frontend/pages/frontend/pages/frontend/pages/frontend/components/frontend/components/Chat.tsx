import { useState } from "react";

export default function Chat({ bookingId, socket, messages }) {
  const [txt, setTxt] = useState("");
  return (
    <div>
      <div>
        {messages.map((m,i) => <div key={i}><strong>{m.sender}</strong>: {m.text}</div>)}
      </div>
      <input value={txt} onChange={e => setTxt(e.target.value)} />
      <button onClick={() => { socket.emit("message", { bookingId, text: txt, sender: "user" }); setTxt(""); }}>
        Envoyer
      </button>
    </div>
  );
}
