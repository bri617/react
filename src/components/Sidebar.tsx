"use client";
import * as React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <nav>
          <MenuTitle>Menu</MenuTitle>
          <MenuItems>
            <MenuItem>
              <MenuIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69346104e30ec8f43394dce355131d825acde08a?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Home icon"
              />
              <span>Home</span>
            </MenuItem>
            <MenuItem>
              <MenuIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd21ea5208a25850c239e8b8adbd5a717eae6de5?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Insights icon"
              />
              <span>Insights</span>
            </MenuItem>
            <MenuItem>
              <MenuIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cb377a0f55c9d69ab4b512b2bb48962bbd6614?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Recommends icon"
              />
              <span>Recommends</span>
            </MenuItem>
            <MenuItem>
              <MenuIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6195a58d5e7b648f86f1043675c13f182b46d1bc?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Messages icon"
              />
              <span>Messages (2)</span>
            </MenuItem>
          </MenuItems>
          <SettingsTitle>Settings</SettingsTitle>
          <MenuItems>
            <MenuItem>
              <MenuIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/794eb99899cefbf19556b8aaed00c886542eef01?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Profile icon"
              />
              <span>Profile</span>
            </MenuItem>
            <MenuItem>
              <MenuIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3330fce03acf5ce0e248558c72bdeec50a310ea0?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                alt="Logout icon"
              />
              <span>Logout</span>
            </MenuItem>
          </MenuItems>
        </nav>
      </SidebarContent>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: start;
  gap: 10px;
  font-family:
    Chivo,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  color: rgba(64, 93, 159, 1);
  font-weight: 400;
  justify-content: start;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SidebarContent = styled.div`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 0;
  display: flex;
  min-width: 240px;
  flex-shrink: 0;
  height: 862px;
  width: 250px;
  padding: 52px 24px;
`;

const MenuTitle = styled.h2`
  color: rgba(64, 93, 159, 1);
  font-size: 20px;
  font-weight: 400;
`;

const MenuItems = styled.div`
  margin-top: 39px;
  width: 100%;
  max-width: 167px;
  color: rgba(108, 120, 148, 1);
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:first-child {
    color: rgba(41, 144, 241, 1);
  }
`;

const MenuIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  flex-shrink: 0;
`;

const SettingsTitle = styled.h2`
  margin-top: 39px;
  color: rgba(64, 93, 159, 1);
  font-size: 20px;
  font-weight: 400;
`;
