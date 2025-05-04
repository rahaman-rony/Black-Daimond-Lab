import React, { useState } from "react";

const MasterJiConsole = () => {
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState([
    { type: "system", message: "Welcome to Master-ji Console. Ask me anything!" }
  ]);

  const handleSend = () => {
    if (!query.trim()) return;

    const userMessage = { type: "user", message: query };
    const aiResponse = generateFakeAIResponse(query);

    setChat((prev) => [...prev, userMessage, { type: "ai", message: aiResponse }]);
    setQuery("");
  };

  const generateFakeAIResponse = (input) => {
    if (input.toLowerCase().includes("wifi")) {
      return "To hack WiFi ethically, you can start with monitor mode, then use tools like airodump-ng, aireplay-ng.";
    } else if (input.toLowerCase().includes("dark web")) {
      return "Dark Web access requires a secure lab, use TOR and avoid real identities.";
    } else if (input.toLowerCase().includes("malware")) {
      return "To simulate malware, build a payload, obfuscate it, and test in isolated VM.";
    } else {
      return "That's a great question. Here's a suggestion: Study networking and Linux well before going advanced.";
    }
  };

  return (
    <div style={styles.container}>
      <h2>Master-ji Console (AI Chat Simulation)</h2>
      <div style={styles.chatbox}>
        {chat.map((msg, i) => (
          <div key={i} style={msg.type === "user" ? styles.user : msg.type === "ai" ? styles.ai : styles.system}>
            <b>{msg.type === "user" ? "You:" : msg.type === "ai" ? "Master-ji:" : ""}</b> {msg.message}
          </div>
        ))}
      </div>
      <div style={styles.inputRow}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask Master-ji something..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.sendBtn}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#111",
    color: "#eee",
    padding: "1.5rem",
    marginTop: "2rem",
    borderRadius: "10px",
    border: "1px solid #333"
  },
  chatbox: {
    backgroundColor: "#000",
    padding: "1rem",
    height: "300px",
    overflowY: "auto",
    border: "1px solid #444",
    borderRadius: "6px",
    marginBottom: "1rem"
  },
  user: {
    color: "#0f0",
    marginBottom: "0.5rem"
  },
  ai: {
    color: "#0cf",
    marginBottom: "0.5rem"
  },
  system: {
    color: "#aaa",
    fontStyle: "italic",
    marginBottom: "0.5rem"
  },
  inputRow: {
    display: "flex",
    gap: "1rem"
  },
  input: {
    flex: 1,
    padding: "0.5rem",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: "4px"
  },
  sendBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#0cf",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default MasterJiConsole;
