// src/components/DevicesGrid.tsx

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Device {
  id: string;
  name: string;
  status?: string;
  [key: string]: any; // for any other fields
}

const DevicesGrid: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const snapshot = await getDocs(collection(db, "devices"));
        const devicesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Device[];
        setDevices(devicesData);
      } catch (error) {
        console.error("Error fetching devices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  if (loading) {
    return <div>Loading devices...</div>;
  }

  return (
    <div>
      <h2>Devices</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {devices.map((device) => (
          <div key={device.id} style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>{device.name}</h3>
            <p>Status: {device.status ?? "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevicesGrid;
