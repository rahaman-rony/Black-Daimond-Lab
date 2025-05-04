import React from "react";

const LabInfoPanel = () => {
  const handleShutdown = () => {
    alert("System shutting down... (Simulation)");
  };

  const handleRestart = () => {
    alert("System restarting... (Simulation)");
  };

  return (
    <div style={styles.container}>
      <h2>Lab Control Panel</h2>
      <div style={styles.info}>
        <p><strong>Lab Name:</strong> Black Diamond Cyber Arsenal</p>
        <p><strong>Version:</strong> 1.0.0</p>
        <p><strong>Creator:</strong> Master-ji</p>
        <p><strong>Built With:</strong> React + Vite + Raw CSS</p>
        <p><strong>Status:</strong> Simulation Mode</p>
      </div>
      <div style={styles.actions}>
        <button style={styles.btnRed} onClick={handleShutdown}>Shutdown</button>
        <button style={styles.btnGreen} onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem ",
    backgroundColor: "#111",
    color: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    border: "1px solid #333",
    marginTop: "2rem"
  },
  info: {
    marginBottom: "1.5rem",
    lineHeight: "1.6"
  },
  actions: {
    display: "flex",
    gap: "1rem"
  },
  btnRed: {
    backgroundColor: "#d00",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  btnGreen: {
    backgroundColor: "#0c0",
    color: "#000",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default LabInfoPanel;
