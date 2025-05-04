import React, { useState } from "react";

const fakeCameras = [
  { id: 1, ip: "192.168.0.101", location: "Office Lobby" },
  { id: 2, ip: "192.168.0.102", location: "Server Room" },
  { id: 3, ip: "192.168.0.103", location: "Parking Lot" },
];

const CameraTool = () => {
  const [connected, setConnected] = useState(null);
  const [logs, setLogs] = useState([]);

  const connectCamera = (cam) => {
    setConnected(cam);
    setLogs((prev) => [...prev, `Connected to ${cam.ip}`]);
  };

  const simulateControl = (action) => {
    if (connected) {
      setLogs((prev) => [...prev, `Executed "${action}" on ${connected.ip}`]);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Camera Exploitation (Simulation)</h2>
      <ul style={styles.list}>
        {fakeCameras.map((cam) => (
          <li key={cam.id} style={styles.item}>
            <span>{cam.location}</span>
            <span>{cam.ip}</span>
            <button onClick={() => connectCamera(cam)}>Access</button>
          </li>
        ))}
      </ul>

      {connected && (
        <div style={styles.controlPanel}>
          <h3>Connected: {connected.location} ({connected.ip})</h3>
          <button onClick={() => simulateControl("Pan Left")}>Pan Left</button>
          <button onClick={() => simulateControl("Pan Right")}>Pan Right</button>
          <button onClick={() => simulateControl("Zoom In")}>Zoom In</button>
          <button onClick={() => simulateControl("Zoom Out")}>Zoom Out</button>
        </div>
      )}

      <div style={styles.logs}>
        <h4>Logs</h4>
        <ul>
          {logs.map((log, i) => (
            <li key={i} style={{ color: "#aaa" }}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem ",
    backgroundColor: "#111",
    borderRadius: "10px",
    marginTop: "2rem",
    border: "1px solid #333"
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "1rem"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.8rem",
    borderBottom: "1px solid #444",
    color: "#ccc"
  },
  controlPanel: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#1a1a1a",
    border: "1px solid #444",
    borderRadius: "8px"
  },
  logs: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#000",
    border: "1px solid #333",
    borderRadius: "6px"
  }
};

export default CameraTool;
