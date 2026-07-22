// Button.tsx
import React from "react";
import { TableProps } from "./Table.types";
import styled from "styled-components";

interface StyledTableProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledTableWrapper = styled.div<StyledTableProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? "#cccccc" : props.$backgroundColor || "#2563eb"};

  color: black;
  font-size: 1rem;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  width: fit-content;
  max-width: 100%;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.7 : 0.9)};
  }
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 400px;
  border-collapse: collapse;
  font-size: 1rem;
`;

const StyledTh = styled.th`
  padding: 12px;
  border: 1px solid #d1d5db;
  text-align: left;
  background-color: #f3f4f6;
`;

const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #d1d5db;
`;

export function Table({
  title,
  variant = "primary",
  backgroundColor = "#2563eb",
  disabled = false,
}: TableProps) {
  return (
    <StyledTableWrapper
      className={`btn btn-${variant}`}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="table"
    >
      <h1>{title}</h1>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Name</StyledTh>
            <StyledTh>Age</StyledTh>
            <StyledTh>Birthdate</StyledTh>
          </tr>
        </thead>

        <tbody>
          <tr>
            <StyledTd>Leroy Jencans</StyledTd>
            <StyledTd>66</StyledTd>
            <StyledTd>1960-05-14</StyledTd>
          </tr>
          <tr>
            <StyledTd>Makoto Yuki</StyledTd>
            <StyledTd>17</StyledTd>
            <StyledTd>1992-03-04</StyledTd>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <StyledTd colSpan={3}>People Listed: 2</StyledTd>
          </tr>
        </tfoot>
      </StyledTable>
    </StyledTableWrapper>
  );
}
