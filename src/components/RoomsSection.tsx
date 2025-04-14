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
          <RoomIconWrapper>
            <RoomIcon src="/icons/Rooms/Kitchen.png" alt="Kitchen" />
          </RoomIconWrapper>
          <RoomDetails>
            <RoomName>Kitchen</RoomName>
            <DeviceCount>8 Devices</DeviceCount>
          </RoomDetails>
        </RoomCard>

        <RoomCard>
          <RoomIconWrapper>
            <RoomIcon src="/icons/Rooms/LivingRoom.png" alt="Living Room" />
          </RoomIconWrapper>
          <RoomDetails>
            <RoomName>Living Room</RoomName>
            <DeviceCount>12 Devices</DeviceCount>
          </RoomDetails>
        </RoomCard>

        <RoomCard>
          <RoomIconWrapper>
            <RoomIcon src="/icons/Rooms/Bedroom.png" alt="Bedroom" />
          </RoomIconWrapper>
          <RoomDetails>
            <RoomName>Bedroom</RoomName>
            <DeviceCount>4 Devices</DeviceCount>
          </RoomDetails>
        </RoomCard>

        <RoomCard>
          <RoomIconWrapper>
            <RoomIcon src="/icons/Rooms/Bathroom.png" alt="Bathroom" />
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
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-top: 24px;
`;

const RoomCard = styled.div<{ selected?: boolean }>`
  background: ${(props) => (props.selected ? "#3b82f6" : "white")};
  border-radius: 16px;
  padding: 20px;
  height: 140px;
  width: 200px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
`;

const RoomIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomIcon = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  aspect-ratio: 1;
`;

const RoomDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #1f1f1f;
`;

const DeviceCount = styled.span`
  font-size: 12px;
  color: #777;
`;
