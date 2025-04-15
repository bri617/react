
// "use client";
// import styled from "styled-components";

// export const EnergyLevels = () => {
//   return (
//     <Container>
//       <Header>
//         <Title>Levels</Title>
//         <OptionsIcon
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
//           alt="Options"
//         />
//       </Header>
//       <ChartsContainer>
//         <KitchenEnergyChart>
//           <ChartHeader>
//             <ChartTitle>
//               <ChartIconWrapper>
//                 <ChartIcon src="/icons/Levels/KitchenEnergy.png" alt="Kitchen" />
//               </ChartIconWrapper>
//               <h3>Kitchen Energy</h3>
//             </ChartTitle>
//             <TimeSelector>
//               <span>Today</span>
//               <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
//                 alt="Dropdown"
//               />
//             </TimeSelector>
//           </ChartHeader>
//           <ChartImage
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebfc25ce2b4a71007b5bcb2b076ba9d68c17065?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
//             alt="Energy chart"
//           />
//           <TimeLabels>
//             <TimeLabel>12 PM</TimeLabel>
//             <TimeLabel>1 PM</TimeLabel>
//             <TimeLabel>2 PM</TimeLabel>
//             <TimeLabel>3 PM</TimeLabel>
//             <TimeLabel>4 PM</TimeLabel>
//             <TimeLabel>5 PM</TimeLabel>
//           </TimeLabels>
//         </KitchenEnergyChart>

//         <TotalEnergyChart>
//           <ChartHeader>
//             <ChartTitle>
//               <ChartIconWrapper>
//                 <ChartIcon src="/icons/Levels/TotalEnergy.png" alt="Total Energy" />
//               </ChartIconWrapper>
//               <h3>Total Energy</h3>
//             </ChartTitle>
//             <TimeSelector>
//               <span>Week</span>
//               <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
//                 alt="Dropdown"
//               />
//             </TimeSelector>
//           </ChartHeader>
//           <WeeklyChart>
//             <ChartBars>
//               <EnergyBar height="60%" />
//               <EnergyBar height="80%" />
//               <EnergyBar height="40%" />
//               <EnergyBar height="100%" active>
//                 <EnergyValue>20.6 kWh</EnergyValue>
//               </EnergyBar>
//               <EnergyBar height="70%" />
//               <EnergyBar height="50%" />
//               <EnergyBar height="30%" />
//             </ChartBars>
//             <DayLabels>
//               <DayLabel>Sun</DayLabel>
//               <DayLabel>Mon</DayLabel>
//               <DayLabel>Tue</DayLabel>
//               <DayLabel>Wed</DayLabel>
//               <DayLabel>Thu</DayLabel>
//               <DayLabel>Fri</DayLabel>
//               <DayLabel>Sat</DayLabel>
//             </DayLabels>
//           </WeeklyChart>
//         </TotalEnergyChart>
//       </ChartsContainer>
//     </Container>
//   );
// };

// const Container = styled.section`
//   // margin-top: 40px;
//   width: 100%;
//   max-width: 100%;
// `;

// const Header = styled.div`
//   display: flex;
//   width: 100%;
//   align-items: center;
//   justify-content: space-between;
//   font-family: Chivo, -apple-system, Roboto, Helvetica, sans-serif;
//   font-weight: 400;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   color: rgba(43, 43, 43, 1);
//   font-weight: 400;
// `;

// const OptionsIcon = styled.img`
//   aspect-ratio: 1;
//   object-fit: contain;
//   object-position: center;
//   width: 24px;
// `;

// const ChartsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 24px;
//   // margin-top: 24px;
// `;


// const ChartHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
// `;

// const ChartTitle = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;
//   font-size: 21px;
//   color: rgba(80, 80, 80, 1);
// `;

// const ChartIconWrapper = styled.div`
//   width: 40px;
//   height: 40px;
//   background-color: #3b82f6;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const ChartIcon = styled.img`
//   width: 60%;
//   height: 60%;
//   object-fit: contain;
//   aspect-ratio: 1;
// `;

// const TimeSelector = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 4px;
//   font-size: 16px;
//   color: rgba(29, 29, 29, 1);
// `;

// const BaseChart = styled.div`

//   background: white;
//   border-radius: 16px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const KitchenEnergyChart = styled(BaseChart)``;
// const TotalEnergyChart = styled(BaseChart)``;

// const ChartImage = styled.img`
//   aspect-ratio: 7.04;
//   object-fit: contain;
//   object-position: center;
//   width: 309px;
//   border-radius: 24px;
//   margin-top: 33px;
// `;

// const TimeLabels = styled.div`
//   display: flex;
//   margin-top: 68px;
//   margin-left: 16px;
//   justify-content: space-between;
//   font-family: Chivo, -apple-system, Roboto, Helvetica, sans-serif;
//   font-size: 13px;
//   color: rgba(69, 68, 68, 1);
// `;

// const TimeLabel = styled.span`
//   flex-grow: 1;
// `;

// const WeeklyChart = styled.div`
//   margin-top: 22px;
// `;

// const ChartBars = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   height: 200px;
//   padding: 20px 0;
// `;

// const EnergyBar = styled.div<{ height: string; active?: boolean }>`
//   width: 24px;
//   height: ${(props) => props.height};
//   background-color: ${(props) =>
//     props.active ? "rgba(35, 150, 239, 1)" : "rgba(232, 243, 252, 1)"};
//   border-radius: 4px;
//   position: relative;
// `;

// const EnergyValue = styled.div`
//   position: absolute;
//   top: -25px;
//   left: 50%;
//   transform: translateX(-50%);
//   white-space: nowrap;
//   font-size: 10px;
//   color: rgba(35, 150, 239, 1);
// `;

// const DayLabels = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 13px;
//   font-family: Chivo, -apple-system, Roboto, Helvetica, sans-serif;
//   font-size: 14px;
//   color: rgba(69, 68, 68, 1);
// `;

// const DayLabel = styled.span`
//   flex-grow: 1;
//   text-align: center;
// `;

"use client";
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
              <ChartIconWrapper>
                <ChartIcon src="/icons/Levels/KitchenEnergy.png" alt="Kitchen" />
              </ChartIconWrapper>
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
              <ChartIconWrapper>
                <ChartIcon src="/icons/Levels/TotalEnergy.png" alt="Total Energy" />
              </ChartIconWrapper>
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
  width: 100%;
  max-width: 100%;
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

const OptionsIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  // margin-top: 24px;
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
  gap: 7px;
  font-size: 13px;
  color: rgba(80, 80, 80, 1);
`;

const ChartIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartIcon = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
  aspect-ratio: 1;
`;

const TimeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: rgba(29, 29, 29, 1);
`;

const BaseChart = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  // height: 260px;
`;

const KitchenEnergyChart = styled(BaseChart)`
  flex: 1;
`;
const TotalEnergyChart = styled(BaseChart)`
  flex: 1;
`;

const ChartImage = styled.img`
  aspect-ratio: 7.04;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 24px;
  margin-top: 33px;
`;

const TimeLabels = styled.div`
  // display: flex;
  margin-top: 16px;
  margin-left: 8px;
  justify-content: space-between;
  font-family: Chivo, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 13px;
  color: rgba(69, 68, 68, 1);
`;

const TimeLabel = styled.span`
  flex-grow: 1;
`;

const WeeklyChart = styled.div`
  // margin-top: 22px;
`;

const ChartBars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 50px;
  // padding: 20px 0;
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
  // margin-top: 3px;
  font-family: Chivo, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  color: rgba(69, 68, 68, 1);
`;

const DayLabel = styled.span`
  flex-grow: 1;
  text-align: center;
`;