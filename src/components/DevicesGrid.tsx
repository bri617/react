"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Device {
  id: string;
  name: string;
  state: string; // 🔄 match Firestore field name
  icon?: string; // optional if you fallback to imageName
}

export const DevicesGrid = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const querySnapshot = await getDocs(collection(db, "devices"));
      const fetchedDevices: Device[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Device, "id">),
      }));
      setDevices(fetchedDevices);
    };

    fetchDevices();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Devices</Title>
        <OptionsIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
          alt="Options"
        />
      </Header>
      <DevicesRow>
        {devices.map((device) => {
          const imageName = device.name.replace(/\s+/g, "");
          return (
            <DeviceCard key={device.id}>
              <DeviceIcon>
                <img
                  src={device.icon || `/icons/Devices/${imageName}.png`}
                  alt={device.name}
                />
              </DeviceIcon>
              <DeviceDetails>
                <DeviceName>{device.name}</DeviceName>
                <Toggle type="checkbox" checked={device.state === "On"} readOnly />
              </DeviceDetails>
            </DeviceCard>
          );
        })}
      </DevicesRow>
    </Container>
  );
};

// ---------------------- Styled Components ----------------------

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: Chivo, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #2b2b2b;
  font-weight: 400;
`;

const OptionsIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;

const DevicesRow = styled.div`
  display: flex;
  gap: 23px;
  overflow-x: auto;
`;

const DeviceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 10px;
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const DeviceIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const DeviceDetails = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DeviceName = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: #2b2b2b;
`;

const Toggle = styled.input`
  width: 36px;
  height: 18px;
  accent-color: #3b82f6;
  cursor: pointer;
`;
