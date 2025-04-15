"use client";
import styled from "styled-components";

export const RoomsSection = () => {
  return (
    <Container>
      <Header>
        <Title>Rooms</Title>
        <SearchInput placeholder="Search..." />
      </Header>
      <RoomsRow>
      <RoomCard selected>
        <RoomIconWrapper selected>
          <img src="/icons/Rooms/Kitchen.png" alt="Kitchen" />
        </RoomIconWrapper>
        <RoomDetails>
        <RoomName>Kitchen</RoomName>
        <DeviceCount>8 Devices</DeviceCount>
        </RoomDetails>
      </RoomCard>



        <RoomCard selected>
          <RoomIconWrapper selected>
            <img src="/icons/Rooms/LivingRoom.png" alt="Living Room" />
          </RoomIconWrapper>
          <RoomDetails>
            <RoomName>Living Room</RoomName>
            <DeviceCount>12 Devices</DeviceCount>
          </RoomDetails>
        </RoomCard>

        <RoomCard selected>
          <RoomIconWrapper selected>
            <img src="/icons/Rooms/Bedroom.png" alt="Bedroom" />
          </RoomIconWrapper>
          <RoomDetails>
            <RoomName>Bedroom</RoomName>
            <DeviceCount>4 Devices</DeviceCount>
          </RoomDetails>
        </RoomCard>

        <RoomCard selected>
          <RoomIconWrapper selected>
            <img src="/icons/Rooms/Bathroom.png" alt="Bathroom" />
          </RoomIconWrapper>
          <RoomDetails>
            <RoomName>Bathroom</RoomName>
            <DeviceCount>3 Devices</DeviceCount>
          </RoomDetails>
        </RoomCard>
      </RoomsRow>
    </Container>
  );
};

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
  // margin-top: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: rgba(43, 43, 43, 1);
  font-weight: 400;
`;

const SearchInput = styled.input`
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 240px;
  background: white;
`;

const RoomsRow = styled.div`
  display: flex;
  gap: 23px;
  overflow-x: auto;
  // padding-bottom: 8px;
  // margin-top: 24px;
`;

// const RoomCard = styled.div<{ selected?: boolean }>`
//   background: ${(props) => (props.selected ? "#3b82f6" : "white")};
//   border-radius: 16px;
//   padding: 10px;
//   width: 110px;
//   height: 110px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
// `;
// const RoomCard = styled.div<{ selected?: boolean }>`
//   background: ${(props) =>
//     props.selected
//       ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
//       : "white"};
//   border-radius: 16px;
//   padding: 10px;
//   width: 110px;
//   height: 110px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   justify-content: center;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//   color: ${(props) => (props.selected ? "white" : "#1f1f1f")};
//   transition: all 0.3s ease;
// `;
const RoomCard = styled.div<{ selected?: boolean }>`
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"
      : "white"};
  border-radius: 16px;
  padding: 10px;
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  color: ${({ selected }) => (selected ? "white" : "#1f1f1f")};
`;

// const RoomIconWrapper = styled.div`
//   width: 32px;
//   height: 32px;
//   background-color:rgb(204,230,251);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 6px;

// `;
// const RoomIconWrapper = styled.div`
//   width: 38px;
//   height: 38px;
//   background-color: rgba(204, 230, 251, 1);
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   img {
//     width: 24px;
//     height: 24px;
//     object-fit: contain;
//   }
// `;
const RoomIconWrapper = styled.div<{ selected?: boolean }>`
  width: 48px;
  height: 48px;
  background-color: ${({ selected }) =>
    selected ? "#1e3a8a" : "rgba(204, 230, 251, 1)"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    filter: ${({ selected }) => (selected ? "brightness(0) invert(1)" : "none")};
  }
`;



// const RoomIcon = styled.img`
//   width: 40px;
//   height: 40px;
//   background-color: rgb(204,230,251);
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   img {
//     width: 80%;
//     height: 80%;
//     object-fit: contain;
//   }
// `;

// const RoomDetails = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
const RoomDetails = styled.div`
  margin-top: 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

// const RoomName = styled.span`
//   font-weight: 500;
//   font-size: 15px;
//   color: #1f1f1f;
// `;

// const DeviceCount = styled.span`
//   font-size: 12px;
//   color: #777;
// `;
const RoomName = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const DeviceCount = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;
