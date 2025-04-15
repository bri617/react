"use client";

import styled from "styled-components";

const StyledCard = styled.article`
  border-radius: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  z-index: 0;
  display: flex;
  width: 168px;
  flex-shrink: 0;
  height: 171px;
`;

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className }) => {
  return <StyledCard className={className} />;
};

export default Card;
