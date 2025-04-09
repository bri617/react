"use client";
import * as React from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { RoomsSection } from "./RoomsSection";
import { EnergyLevels } from "./EnergyLevels";
import { DevicesGrid } from "./DevicesGrid";
import { HistorySection } from "./HistorySection";

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function DashboardHomeScreen() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const dataRef = ref(db, "liveEnergyData"); 

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
    });

    return () => unsubscribe();
  }, []);

  return (
    <DashboardContainer>
      <Layout>
        <SidebarColumn>
          <Sidebar />
        </SidebarColumn>
        <MainColumn>
          <MainContent>
            <ContentWrapper>
              <RoomsSection />
              <EnergyLevels />
              <DevicesGrid />
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

// const DashboardContainer = styled.main`
//   background-color: rgba(232, 243, 252, 1);
//   padding: 28px 24px;
//   overflow: hidden;
//   @media (max-width: 991px) {
//     padding-left: 20px;
//   }
// `;
const DashboardContainer = styled.main`
  background-color: rgba(232, 243, 252, 1);
  padding: 28px 24px;
  overflow-x: auto; /* Add this */
  width: 100vw;      /* Add this to force full width */
  box-sizing: border-box;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;


// possible layout problem
// const Layout = styled.div`
//   gap: 20px;
//   display: flex;
//   @media (max-width: 991px) {
//     flex-direction: column;
//     align-items: stretch;
//     gap: 0px;
//   }
// `;
const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;  /* Add this to prevent overflow */
  gap: 20px;
  width: 100%;
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
  width: flex;
  margin-left: 1px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

// const MainContent = styled.div`
//   display: flex;
//   margin-top: auto;
//   margin-bottom: auto;
//   align-items: end;
//   gap: 38px;
//   align-self: stretch;
//   justify-content: start;
//   flex-wrap: wrap;
//   @media (max-width: 991px) {
//     max-width: 100%;
//     margin-top: 40px;
//   }
// `;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
  width: 100%;
`;


// const ContentWrapper = styled.div`
//   min-width: 240px;
//   width: 744px;
//   @media (max-width: 991px) {
//     max-width: 100%;
//   }
// `;

// const ContentWrapper = styled.div` //2
//   min-width: 240px;
//   width: 100%;  /* Change from 744px to 100% or max-width */
//   max-width: 744px;
//   box-sizing: border-box;
// `;
const ContentWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  min-width: 300px;
`;

const Divider = styled.img`
  object-fit: contain;
  object-position: center;
  width: 0px;
  flex-shrink: 0;
`;

const HistoryColumn = styled.aside`
  min-width: 220px;
  max-width: 300px;
  flex-shrink: 0;
`;

