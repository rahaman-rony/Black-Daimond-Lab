import React from "react";
import Navbar from "../components/Navbar";
import WiFiTool from "../components/WiFiTool";
import DarkWebLab from "../components/DarkWebLab";
import CameraTool from "../components/CameraTool";
import MalwareLab from "../components/MalwareLab";
import MasterJiConsole from "../components/MasterJiConsole";
import SystemMonitor from "../components/SystemMonitor";
import LabInfoPanel from "../components/LabInfoPanel";

function Home() {
  return (
    <div>
      <Navbar />
      

      <div style={{ padding: "2rem 2rem 2rem 250px" }}>
        <h1 id="dashboard" >Welcome to Black Diamond Lab</h1>
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
            <CameraTool />
        </div>

        <div id="malware">
            <h2>Malware Developer Lab</h2>
            <p>Build, simulate and analyze malware.</p>
            <MalwareLab />
        </div>

        <div id="ai"> 
          <MasterJiConsole />
        </div>

        <div id="monitor">
          <SystemMonitor />
        </div>

        <div id="info"> 
          <LabInfoPanel />
        </div>

      </div>
    </div>
  );
}

export default Home;
