"use client";
import * as React from "react";
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
      <DevicesContainer>
        <DeviceCard>
          <DeviceStatus>Off</DeviceStatus>
          <DeviceIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc88d480dfb45978b14388b80d7b24537221e539?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Air Conditioner"
          />
          <DeviceName>Air Conditioner</DeviceName>
        </DeviceCard>
        <DeviceCard active>
          <DeviceStatus>On</DeviceStatus>
          <DeviceIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5fd09ec9fdf861300da0d8fa3fec4ef5dff0c3?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Smart TV"
          />
          <DeviceName>Smart TV</DeviceName>
        </DeviceCard>
        <DeviceCard>
          <DeviceStatus>Off</DeviceStatus>
          <DeviceIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e144b926df3561d6ff16f507a36a1d990793cf15?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Coffee Machine"
          />
          <DeviceName>Coffee Machine</DeviceName>
        </DeviceCard>
        <DeviceCard active>
          <DeviceStatus>On</DeviceStatus>
          <DeviceIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14939071a24ac744aee88d761bf52adb2c0bf782?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Refrigerator"
          />
          <DeviceName>Refrigerator</DeviceName>
        </DeviceCard>
      </DevicesContainer>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 40px;
  width: 100%;
  max-width: 744px;
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
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  color: rgba(43, 43, 43, 1);
`;

const Title = styled.h2`
  font-weight: 400;
`;

const OptionsIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const DevicesContainer = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: start;
  gap: 24px;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const DeviceCard = styled.div<{ active?: boolean }>`
  border-radius: 20px;
  background-color: ${(props) =>
    props.active ? "rgba(195, 219, 255, 1)" : "rgba(255, 255, 255, 1)"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 20px 17px;
  flex-direction: column;
  align-items: start;
  width: 168px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const DeviceStatus = styled.div`
  color: rgba(92, 92, 92, 1);
  font-size: 20px;
`;

const DeviceIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 50px;
  margin-top: 28px;
`;

const DeviceName = styled.h3`
  color: rgba(40, 70, 128, 1);
  font-size: 16px;
  margin-top: 16px;
  font-weight: 400;
`;
