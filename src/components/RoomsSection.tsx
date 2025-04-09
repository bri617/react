"use client";
import * as React from "react";
import styled from "styled-components";

export const RoomsSection = () => {
  return (
    <Container>
      <Header>
        <Title>Rooms</Title>
        <SearchWrapper>
          <SearchBox>
            <SearchIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe4875f75c3dcb8fb2b4cc279b5d7239f5121a6?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
              alt="Search"
            />
            <SearchInput placeholder="Search..." />
          </SearchBox>
        </SearchWrapper>
      </Header>
      <RoomsGrid>
        <RoomCard active>
          <RoomIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec7b3aca72d39e59a6f1f695a4606759a24b119?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Living Room"
          />
          <RoomName>Living Room</RoomName>
          <DeviceCount>12 Devices</DeviceCount>
        </RoomCard>
        <RoomCard>
          <RoomIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a50663f694ec78d4839b34f6dde798e2e1e4887?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Bedroom"
          />
          <RoomName>Bedroom</RoomName>
          <DeviceCount>4 Devices</DeviceCount>
        </RoomCard>
        <RoomCard>
          <RoomIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a0bbcdb6f1337594017dfd34bd534fc3e86b976?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Bathroom"
          />
          <RoomName>Bathroom</RoomName>
          <DeviceCount>3 Devices</DeviceCount>
        </RoomCard>
        <RoomCard>
          <RoomIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c207eef3581e919e7d62bb5567729ceb51896d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Kitchen"
          />
          <RoomName>Kitchen</RoomName>
          <DeviceCount>8 Devices</DeviceCount>
        </RoomCard>
      </RoomsGrid>
    </Container>
  );
};

const Container = styled.section`
  font-family:
    Chivo,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 400;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: end;
  justify-content: start;
  white-space: nowrap;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Title = styled.h1`
  color: rgba(43, 43, 43, 1);
  font-size: 24px;
  font-weight: 400;
`;

const SearchWrapper = styled.div`
  border-radius: 0px 0px 0px 0px;
  min-width: 240px;
  font-size: 16px;
  color: rgba(26, 26, 26, 1);
  width: 438px;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const SearchBox = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: 16px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SearchIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  flex-shrink: 0;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  flex-grow: 1;
  font-size: 16px;
  color: rgba(26, 26, 26, 1);
  outline: none;

  &::placeholder {
    color: rgba(26, 26, 26, 1);
  }
`;

const RoomsGrid = styled.div`
  display: flex;
  margin-top: 28px;
  align-items: start;
  gap: 24px;
  font-size: 20px;
  color: rgba(29, 29, 29, 1);
  justify-content: start;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const RoomCard = styled.div<{ active?: boolean }>`
  border-radius: 20px;
  background-color: ${(props) =>
    props.active ? "rgba(41, 144, 241, 1)" : "rgba(255, 255, 255, 1)"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 28px 20px 20px;
  flex-direction: column;
  align-items: start;
  width: 168px;
  color: ${(props) => (props.active ? "rgba(255, 255, 255, 1)" : "inherit")};
`;

const RoomIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 48px;
  border-radius: 12px;
`;

const RoomName = styled.h3`
  font-size: 20px;
  margin-top: 16px;
  font-weight: 400;
`;

const DeviceCount = styled.p`
  font-size: 16px;
  margin-top: 4px;
`;
