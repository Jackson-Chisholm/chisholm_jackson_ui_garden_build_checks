// Button.tsx
import React from "react";
import { DropdownProps } from "./Dropdown.types";
import styled from "styled-components";

interface StyledDropdownProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledDropdown = styled.select<StyledDropdownProps>`
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

export function Dropdown({
  id,
  optionA,
  optionB,
  variant = "primary",
  backgroundColor = "#2563eb",
  disabled = false,
}: DropdownProps) {
  return (
    <StyledDropdown
      id={id}
      className={`btn btn-${variant}`}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="dropdown"
    >
      <option value={optionA}>{optionA}</option>
      <option value={optionB}>{optionB}</option>
    </StyledDropdown>
  );
}
