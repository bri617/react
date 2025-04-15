"use client";
import React from "react";
import styled from "styled-components";
// import Sidebar from "./Sidebar";
// import History from "./History"; 

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <OuterContainer>
      <LayoutGrid>
        {/* <Sidebar /> */}
        <Main>{children}</Main>
        {/* <History /> */}
      </LayoutGrid>
    </OuterContainer>
  );
};

export default DashboardLayout;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eaf3fb;
  min-height: 100vh;
  width: 100%;
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr; // remove 3rd column for History
  gap: 32px;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
