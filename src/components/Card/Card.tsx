// Button.tsx
import React from "react";
import { CardProps } from "./Card.types";
import styled from "styled-components";

interface StyledCardProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? "#cccccc" : props.$backgroundColor || "#2563eb"};

  color: black;
  font-size: 1rem;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  width: fit-content;
  max-width: 100%;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.7 : 0.9)};
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 1.5rem;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

export function Card({
  title,
  label,
  variant = "primary",
  backgroundColor = "#2563eb",
  disabled = false,
}: CardProps) {
  return (
    <StyledCard
      className={`btn btn-${variant}`}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="card"
    >
      <CardTitle>{title}</CardTitle>
      <CardText>{label}</CardText>
    </StyledCard>
  );
}
