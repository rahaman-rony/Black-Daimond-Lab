import React, { useState, useEffect } from "react";

const SystemMonitor = () => {
  const [status, setStatus] = useState({
    cpu: 14,
    ram: 62,
    net: 30,
    tools: {
      darkWeb: true,
      wifi: true,
      camera: false,
      malware: true,
      masterji: true
    }
  });

  // Simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => ({
        ...prev,
        cpu: Math.floor(Math.random() * 50 + 10),
        ram: Math.floor(Math.random() * 80 + 10),
        net: Math.floor(Math.random() * 100),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toolStatus = (tool, active) => (
    <div style={styles.tool}>
      <span>{tool}</span>
      <span style={{ color: active ? "#0f0" : "#f00" }}>
        {active ? "Active" : "Offline"}
      </span>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2>System Status Monitor</h2>
      <div style={styles.stats}>
        <div>CPU Usage: {status.cpu}%</div>
        <div>RAM Usage: {status.ram}%</div>
        <div>Network Load: {status.net}%</div>
      </div>
      <div style={styles.toolSection}>
        <h3>Tool Status</h3>
        {toolStatus("Dark Web Lab", status.tools.darkWeb)}
        {toolStatus("WiFi Hacker", status.tools.wifi)}
        {toolStatus("Camera Hacker", status.tools.camera)}
        {toolStatus("Malware Lab", status.tools.malware)}
        {toolStatus("Master-ji Console", status.tools.masterji)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "1.5rem",
    border: "1px solid #333",
    borderRadius: "10px",
    marginTop: "2rem"
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    padding: "1rem",
    backgroundColor: "#000",
    borderRadius: "6px",
    border: "1px solid #444"
  },
  toolSection: {
    backgroundColor: "#000",
    padding: "1rem",
    borderRadius: "6px",
    border: "1px solid #444"
  },
  tool: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0"
  }
};

export default SystemMonitor;
