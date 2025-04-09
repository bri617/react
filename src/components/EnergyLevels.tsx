"use client";
import * as React from "react";
import styled from "styled-components";

export const EnergyLevels = () => {
  return (
    <Container>
      <Header>
        <Title>Levels</Title>
        <OptionsIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
          alt="Options"
        />
      </Header>
      <ChartsContainer>
        <KitchenEnergyChart>
          <ChartHeader>
            <ChartTitle>
              <ChartIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d604fb4340ae5de13c2bd780f8a7a3ff16b6f9d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Kitchen"
              />
              <h3>Kitchen Energy</h3>
            </ChartTitle>
            <TimeSelector>
              <span>Today</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Dropdown"
              />
            </TimeSelector>
          </ChartHeader>
          <ChartImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebfc25ce2b4a71007b5bcb2b076ba9d68c17065?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            alt="Energy chart"
          />
          <TimeLabels>
            <TimeLabel>12 PM</TimeLabel>
            <TimeLabel>1 PM</TimeLabel>
            <TimeLabel>2 PM</TimeLabel>
            <TimeLabel>3 PM</TimeLabel>
            <TimeLabel>4 PM</TimeLabel>
            <TimeLabel>5 PM</TimeLabel>
          </TimeLabels>
        </KitchenEnergyChart>

        <TotalEnergyChart>
          <ChartHeader>
            <ChartTitle>
              <ChartIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0336d6d1d4ff356318aac83b58336b4e981b9ba8?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Total Energy"
              />
              <h3>Total Energy</h3>
            </ChartTitle>
            <TimeSelector>
              <span>Week</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Dropdown"
              />
            </TimeSelector>
          </ChartHeader>
          <WeeklyChart>
            <ChartBars>
              {/* Weekly energy bars */}
              <EnergyBar height="60%" />
              <EnergyBar height="80%" />
              <EnergyBar height="40%" />
              <EnergyBar height="100%" active>
                <EnergyValue>20.6 kWh</EnergyValue>
              </EnergyBar>
              <EnergyBar height="70%" />
              <EnergyBar height="50%" />
              <EnergyBar height="30%" />
            </ChartBars>
            <DayLabels>
              <DayLabel>Sun</DayLabel>
              <DayLabel>Mon</DayLabel>
              <DayLabel>Tue</DayLabel>
              <DayLabel>Wed</DayLabel>
              <DayLabel>Thu</DayLabel>
              <DayLabel>Fri</DayLabel>
              <DayLabel>Sat</DayLabel>
            </DayLabels>
          </WeeklyChart>
        </TotalEnergyChart>
      </ChartsContainer>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 40px;
  width: 100%;
  max-width: 744px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family:
    Chivo,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 400;
`;

const Title = styled.h2`
  font-size: 24px;
  color: rgba(43, 43, 43, 1);
  font-weight: 400;
`;

const OptionsIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

// const ChartsContainer = styled.div`
//   display: flex;
//   margin-top: 24px;
//   align-items: start;
//   gap: 24px;
//   justify-content: start;
//   flex-wrap: wrap;
//   @media (max-width: 991px) {
//     max-width: 100%;
//   }
// `;
const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 24px;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ChartTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 21px;
  color: rgba(80, 80, 80, 1);
`;

const ChartIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 48px;
  border-radius: 12px;
`;

const TimeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: rgba(29, 29, 29, 1);
`;

// const BaseChart = styled.div`
//   border-radius: 16px;
//   background-color: rgba(255, 255, 255, 1);
//   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
//   padding: 21px 19px;
//   width: 360px;
//   @media (max-width: 991px) {
//     width: 100%;
//   }
// `;
const BaseChart = styled.div`
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  padding: 21px 19px;
  flex: 1;
  min-width: 300px;
  max-width: 48%;
  box-sizing: border-box;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const KitchenEnergyChart = styled(BaseChart)``;

const TotalEnergyChart = styled(BaseChart)``;

const ChartImage = styled.img`
  aspect-ratio: 7.04;
  object-fit: contain;
  object-position: center;
  width: 309px;
  border-radius: 24px;
  margin-top: 33px;
`;

const TimeLabels = styled.div`
  display: flex;
  margin-top: 68px;
  margin-left: 16px;
  justify-content: space-between;
  font-family:
    Chivo,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  color: rgba(69, 68, 68, 1);
  @media (max-width: 991px) {
    margin-left: 10px;
    margin-top: 40px;
  }
`;

const TimeLabel = styled.span`
  flex-grow: 1;
`;

const WeeklyChart = styled.div`
  margin-top: 22px;
`;

const ChartBars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  padding: 20px 0;
`;

const EnergyBar = styled.div<{ height: string; active?: boolean }>`
  width: 24px;
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.active ? "rgba(35, 150, 239, 1)" : "rgba(232, 243, 252, 1)"};
  border-radius: 4px;
  position: relative;
`;

const EnergyValue = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 10px;
  color: rgba(35, 150, 239, 1);
`;

const DayLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  font-family:
    Chivo,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(69, 68, 68, 1);
`;

const DayLabel = styled.span`
  flex-grow: 1;
  text-align: center;
`;
