import React from "react";
import Navbar from "../components/Navbar";
import WiFiTool from "../components/WiFiTool";
import DarkWebLab from "../components/DarkWebLab";

function Home() {
  return (
    <div>
      <Navbar />
      

      <div style={{ padding: "2rem" }}>
        <h1>Welcome to Black Diamond Lab</h1>
        <p>
          Ethical Hacking | Dark Web Lab | WiFi Tool | Malware Dev | Camera Exploits
        </p>
        
        <div id="wifi">
            <h2>WiFi Hacking Tool</h2>
            <p>Launch and control WiFi exploits from here.</p>
            <WiFiTool />
        </div>

        <div id="darkweb">
            <h2>Dark Web Research Lab</h2>
            <p>Explore simulated dark net safely.</p>
            <DarkWebLab />
        </div>

        <div id="camera">
            <h2>Camera Exploitation Tool</h2>
            <p>Simulate and test camera-based vulnerabilities.</p>
        </div>

        <div id="malware">
            <h2>Malware Developer Lab</h2>
            <p>Build, simulate and analyze malware.</p>
        </div>

      </div>
    </div>
  );
}

export default Home;
