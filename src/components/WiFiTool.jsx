import React, { useState } from "react";

const fakeNetworks = [
  { ssid: "BD_Public_Wifi", strength: "Strong", secure: true },
  { ssid: "Home_24Ghz", strength: "Medium", secure: false },
  { ssid: "Hidden_Network", strength: "Weak", secure: true },
];

const WiFiTool = () => {
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("");

  const handleSelect = (network) => {
    setSelected(network);
    setStatus("Connecting...");
    setTimeout(() => {
      if (network.secure) {
        setStatus("Attempting WPS Crack...");
        setTimeout(() => setStatus("Failed to crack: WPA2 too strong!"), 1500);
      } else {
        setStatus("Connected successfully (Open Network)");
      }
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <h2>WiFi Hacking Simulation</h2>
      <ul style={styles.list}>
        {fakeNetworks.map((net, idx) => (
          <li key={idx} style={styles.item}>
            <span>{net.ssid}</span>
            <span>{net.strength}</span>
            <button onClick={() => handleSelect(net)}>Target</button>
          </li>
        ))}
      </ul>
      {selected && (
        <div style={styles.result}>
          <strong>Target:</strong> {selected.ssid} <br />
          <strong>Status:</strong> {status}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem ",
    backgroundColor: "#111",
    borderRadius: "10px",
    marginTop: "1rem",
    border: "1px solid #333"
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    borderBottom: "1px solid #444",
    color: "#ccc"
  },
  result: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#222",
    color: "#00ffaa"
  }
};

export default WiFiTool;
