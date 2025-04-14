"use client";
import React from "react";
import styled from "styled-components";



interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <LayoutGrid>
          <Main>{children}</Main> 
        </LayoutGrid>
      </InnerContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eaf3fb;
  min-height: 100vh;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr 300px;
  gap: 32px;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
