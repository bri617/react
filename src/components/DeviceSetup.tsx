// src/components/DeviceSetup.tsx
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const DeviceSetup: React.FC = () => {
  const [message, setMessage] = useState("Click below to discover your device.");

  const handleDeviceDiscovery = async () => {
    setMessage("Searching for device...");
    // Simulate device discovery (replace with your actual code)
    setTimeout(async () => {
      const discoveredDeviceId = "device-12345"; // This would come from your discovery process
      setMessage(`Device discovered: ${discoveredDeviceId}`);

      // Ensure the user is authenticated before storing device data
      const user = auth.currentUser;
      if (user) {
        const deviceData = {
          deviceId: discoveredDeviceId,
          status: "connected",
          lastUpdated: serverTimestamp(),
          owner: user.uid,
        };

        try {
          // Save device information in Firestore
          await setDoc(doc(db, "devices", discoveredDeviceId), deviceData);
          setMessage((prev) => prev + "\nDevice data stored successfully.");
        } catch (error) {
          setMessage("Failed to store device data.");
          console.error("Error storing device data:", error);
        }
      } else {
        setMessage("User not authenticated.");
      }
    }, 1500);
  };

  return (
    <div>
      <h2>Device Setup</h2>
      <p>{message}</p>
      <button onClick={handleDeviceDiscovery}>Discover Device</button>
    </div>
  );
};

export default DeviceSetup;
