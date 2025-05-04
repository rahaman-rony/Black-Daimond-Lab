import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Black Diamond Lab</div>
      <ul style={styles.menu}>
        <li><a href="/">Home</a></li>
        <li><a href="#wifi">WiFi Tool</a></li>
        <li><a href="#darkweb">Dark Web Lab</a></li>
        <li><a href="#camera">Camera Tool</a></li>
        <li><a href="#malware">Malware Dev</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#101010",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #444"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#38f"
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "1.5rem"
  }
};

export default Navbar;
