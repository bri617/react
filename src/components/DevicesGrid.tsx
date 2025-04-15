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
            <TopRow>
              <DeviceState>{device.state}</DeviceState>
              <input type="checkbox" checked={device.state === "On"} readOnly />
            </TopRow>
            <DeviceIcon>
              <img src={device.icon} alt={device.name} />
            </DeviceIcon>
            <DeviceName>{device.name}</DeviceName>
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
  width: 115px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeviceState = styled.span`
  font-size: 12px;
  opacity: 0.6;
`;

const DeviceIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const DeviceName = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
