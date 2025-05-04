import React, { useState } from "react";

const fakeSites = [
  { name: "Black Market", url: "http://blackmarket.onion", status: "Offline" },
  { name: "Hack Forums", url: "http://hackforums.onion", status: "Online" },
  { name: "ZeroDay DB", url: "http://0daydb.onion", status: "Online" },
  { name: "DarkWiki", url: "http://darkwiki.onion", status: "Offline" },
];

const DarkWebLab = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <div style={styles.container}>
      <h2>Dark Web Research Lab (Simulation)</h2>
      <ul style={styles.list}>
        {fakeSites.map((site, idx) => (
          <li key={idx} style={styles.item}>
            <span>{site.name}</span>
            <span>{site.url}</span>
            <span style={{ color: site.status === "Online" ? "#0f0" : "#f00" }}>
              {site.status}
            </span>
            <button onClick={() => setSelectedSite(site)}>Visit</button>
          </li>
        ))}
      </ul>

      {selectedSite && (
        <div style={styles.browser}>
          <h3>Browsing: {selectedSite.name}</h3>
          <p>This is a simulated page of <b>{selectedSite.url}</b></p>
          <p>Content is hidden for security purposes.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    marginTop: "2rem",
    backgroundColor: "#111",
    borderRadius: "10px",
    border: "1px solid #333"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr 1fr auto",
    alignItems: "center",
    padding: "0.5rem",
    borderBottom: "1px solid #333",
    color: "#ccc"
  },
  browser: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#1a1a1a",
    color: "#eee",
    borderRadius: "8px",
    border: "1px solid #444"
  }
};

export default DarkWebLab;
