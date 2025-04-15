"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface Room {
  id: string;
  name: string;
  devices: number;
}

export const RoomsSection = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const querySnapshot = await getDocs(collection(db, "rooms"));
      const fetchedRooms: Room[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Room, "id">),
      }));
      setRooms(fetchedRooms);
    };

    fetchRooms();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Rooms</Title>
        <SearchInput placeholder="Search..." />
      </Header>

      <RoomsRow>
      {rooms.map((room) => {
        const imageName = room.name.replace(/\s+/g, ""); // removes all spaces
        return (
          <RoomCard key={room.id}>
            <RoomIconWrapper>
              <img src={`/icons/Rooms/${imageName}.png`} alt={room.name} />
            </RoomIconWrapper>
            <RoomDetails>
              <RoomName>{room.name}</RoomName>
              <DeviceCount>{room.devices} Devices</DeviceCount>
            </RoomDetails>
          </RoomCard>
        );
      })}

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
  gap: 23px;
  overflow-x: auto;
`;

const RoomCard = styled.div<{ selected?: boolean }>`
  background: ${({ selected }) =>
    selected ? "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)" : "white"};
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

const RoomDetails = styled.div`
  margin-top: 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const RoomName = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const DeviceCount = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;
