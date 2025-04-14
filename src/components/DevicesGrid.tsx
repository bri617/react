"use client";
import styled from "styled-components";

export const DevicesGrid = () => {
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
        {devices.map((device, index) => (
          <DeviceCard key={index}>
            <DeviceIcon>
              <img src={device.icon} alt={device.name} />
            </DeviceIcon>
            <DeviceInfo>
              <DeviceName>{device.name}</DeviceName>
              <DeviceState>{device.state}</DeviceState>
            </DeviceInfo>
          </DeviceCard>
        ))}
      </DevicesRow>
    </Container>
  );
};

const devices = [
  {
    name: "Air Conditioner",
    state: "Off",
    icon: "/icons/Devices/AirConditioner.png",
  },
  {
    name: "Smart TV",
    state: "On",
    icon: "/icons/Devices/SmartTV.png",
  },
  {
    name: "Coffee Machine",
    state: "Off",
    icon: "/icons/Devices/CoffeeMachine.png",
  },
  {
    name: "Refrigerator",
    state: "On",
    icon: "/icons/Devices/Refrigerator.png",
  },
];

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
  gap: 24px;
  padding-bottom: 8px;
  margin-top: 24px;
  justify-content: flex-start;
`;

const DeviceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  height: 140px;
  flex: 1 1 180px;
  max-width: 220px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const DeviceIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #3b82f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    aspect-ratio: 1;
  }
`;

const DeviceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeviceName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #2b2b2b;
`;

const DeviceState = styled.span`
  font-size: 12px;
  color: #777;
`;

