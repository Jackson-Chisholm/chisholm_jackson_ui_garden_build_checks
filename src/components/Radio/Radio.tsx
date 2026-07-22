// Button.tsx
import React from "react";
import { RadioProps } from "./Radio.types";
import styled from "styled-components";

interface StyledRadioProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledRadioWrapper = styled.label<StyledRadioProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? "#cccccc" : props.$backgroundColor || "#2563eb"};

  color: white;
  font-size: 1rem;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  width: fit-content;
  max-width: 100%;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.7 : 0.9)};
  }
`;

const StyledRadio = styled.input`
  cursor: not-allowed;
`;

export function Radio({
  label,
  variant = "primary",
  backgroundColor = "#2563eb",
  disabled = false,
}: RadioProps) {
  return (
    <StyledRadioWrapper
      className={`btn btn-${variant}`}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
    >
      <StyledRadio type="radio" name={label} disabled={disabled} />
      {label}
    </StyledRadioWrapper>
  );
}
