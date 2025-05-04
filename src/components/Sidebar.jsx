import React from "react";

const Sidebar = () => {
  const sections = [
    { id: "dashboard", label: "Dashboard" },
    { id: "wifi", label: "WiFi Hacker" },
    { id: "camera", label: "Camera Hacker" },
    { id: "malware", label: "Malware Lab" },
    { id: "ai", label: "Master-ji Console" },
    { id: "monitor", label: "System Monitor" },
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Black Diamond</h2>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          style={styles.link}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
};

const styles = {
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "220px",
    backgroundColor: "#0a0a0a",
    padding: "2rem 1rem",
    borderRight: "1px solid #222",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    zIndex: 1000
  },
  title: {
    color: "#0f0",
    marginBottom: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "0.5rem",
    borderRadius: "6px",
    transition: "all 0.3s",
  }
};

export default Sidebar;
