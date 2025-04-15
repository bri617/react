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
        {devices.map((device) => (
       <DeviceCard key = {device.id}>
       <TopRow>
         <DeviceState>{device.state}</DeviceState>
         <Toggle type="checkbox" />
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
  // box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: Chivo, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  // margin-top: 8px;
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
  // padding-bottom: 8px;
  // margin-top: 24px;
`;

// const DeviceCard = styled.div`
//   background: white;
//   border-radius: 16px;
//   padding: 2px;
//   width: 115px; height: 115px;
//   display: flex;
//   align-items: center;
//   gap: 18px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//   flex-shrink: 0;
// `;
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

const TopRow = styled.div`
  display: flex;
  gap: 23px;
  justify-content: space-between;
  align-items: center;
`;

// const DeviceIcon = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: #3b82f6;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   img {
//     width: 50%;
//     height: 50%;
//     object-fit: contain;
//     aspect-ratio: 1;
//   }
// `;
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

// const DeviceInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const DeviceInfo = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;


// const DeviceName = styled.span`
//   font-weight: 500;
//   font-size: 15px;
//   color: #2b2b2b;
// `;

// const DeviceState = styled.span`
//   font-size: 12px;
//   color: #777;
// `;
const DeviceName = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: #2b2b2b;
  text-align: left;
  margin-top: 6px;
`;


const DeviceState = styled.span`
  font-size: 11px;
  color: #777;
`;

const Toggle = styled.input`
  width: 36px;
  height: 18px;
  accent-color: #3b82f6;
  cursor: pointer;
`;