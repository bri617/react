"use client";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { RoomsSection } from "./RoomsSection";
import { EnergyLevels } from "./EnergyLevels";
import { DevicesGrid } from "./DevicesGrid";
import { HistorySection } from "./HistorySection";

export default function DashboardHomeScreen() {
  return (
    <DashboardContainer>
      <Layout>
        <SidebarColumn>
          <Sidebar />
        </SidebarColumn>
        <MainColumn>
          <MainContent>
            <ContentWrapper>
              <Section><RoomsSection /></Section>
              <Section><EnergyLevels /></Section>
              <Section><DevicesGrid /></Section>
            </ContentWrapper>
            <HistoryColumn>
              <HistorySection />
            </HistoryColumn>
          </MainContent>
        </MainColumn>
      </Layout>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.main`
  background-color: rgba(232, 243, 252, 1);
  overflow-x: auto;
  width: 100vw;
  box-sizing: border-box;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Layout = styled.div`
  gap: 20px;
  display: flex;
  width: 100%;
  padding: 10px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const SidebarColumn = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 18%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MainColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 82%;
  margin-left: 30px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Section = styled.div`
  width: 100%;
`;

const HistoryColumn = styled.aside`
  min-width: 200px;
  position: relative;
  padding-left: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 77px;
    height: 873px;
    left: 0;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
