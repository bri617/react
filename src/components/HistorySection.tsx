"use client";
import * as React from "react";
import styled from "styled-components";

export const HistorySection = () => {
  return (
    <Container>
      <Header>
        <Title>History</Title>
        <ViewAll>View all</ViewAll>
      </Header>
      <HistoryList>
        <HistoryItem>
          <ItemContent>
            <StatusDot status="on" />
            <ItemDetails>
              <DeviceName>Air Conditioner</DeviceName>
              <Status>Turned on</Status>
            </ItemDetails>
          </ItemContent>
          <Time>03:20 PM</Time>
        </HistoryItem>

        <HistoryItem>
          <ItemContent>
            <StatusDot status="on" />
            <ItemDetails>
              <DeviceName>Refrigerator</DeviceName>
              <Status>Turned on</Status>
            </ItemDetails>
          </ItemContent>
          <Time>01:48 PM</Time>
        </HistoryItem>

        <HistoryItem>
          <ItemContent>
            <StatusDot status="off" />
            <ItemDetails>
              <DeviceName>Air Conditioner</DeviceName>
              <Status>Turned off</Status>
            </ItemDetails>
          </ItemContent>
          <Time>11:36 AM</Time>
        </HistoryItem>

        <HistoryItem>
          <ItemContent>
            <StatusDot status="off" />
            <ItemDetails>
              <DeviceName>Coffee Machine</DeviceName>
              <Status>Turned off</Status>
            </ItemDetails>
          </ItemContent>
          <Time>09:15 AM</Time>
        </HistoryItem>
      </HistoryList>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  // min-width: 150px;
  // min-height: 740px;
  flex-direction: column;
  align-items: center;
  font-family:
    Chivo,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 400;
  justify-content: start;
  width: 220px;
  margin-top: 45px;
  padding-right:25px;
`;

const Header = styled.div`
  display: flex;
  width: 264px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
`;

const ViewAll = styled.button`
  color: rgba(60, 128, 247, 1);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-family: inherit;
`;

const HistoryList = styled.div`
  // margin-top: 40px;
  width: 100%;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  
`;

const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;


const ItemContent = styled.div`
  display: flex;
  align-items: start;
  gap: 6px;
  white-space: nowrap;
`;

const StatusDot = styled.div<{ status: "on" | "off" }>`
  background-color: ${(props) =>
    props.status === "on" ? "rgba(43, 237, 179, 1)" : "rgba(255, 110, 110, 1)"};
  border-radius: 50%;
  width: 11px;
  height: 11px;
  margin-top: 10px;
  margin-left:-4px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeviceName = styled.div`
  font-size: 16px;
  margin-top: 6px;

`;

const Status = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  // gap: 190px;

`;

const Time = styled.div`
  color: rgba(0, 0, 0, 1);
`;
