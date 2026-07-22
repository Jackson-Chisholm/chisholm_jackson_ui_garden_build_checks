// Button.tsx
import React from "react";
import { HeroImgProps } from "./HeroImg.types";
import styled from "styled-components";

interface StyledHeroImgProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledHeroImg = styled.div<StyledHeroImgProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? "#cccccc" : props.$backgroundColor || "#2563eb"};

  color: white;
  font-size: 1rem;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  width: fit-content;
  max-width: 100%;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.7 : 0.9)};
  }
`;

const HeroText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

const HeroImage = styled.img`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

export function HeroImg({
  src,
  alt,
  variant = "primary",
  backgroundColor = "#2563eb",
  disabled = false,
}: HeroImgProps) {
  return (
    <StyledHeroImg
      className={`btn btn-${variant}`}
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="hero-image"
    >
      <HeroText>Come Check this out!</HeroText>
      <HeroImage src={src} alt={alt}></HeroImage>
    </StyledHeroImg>
  );
}
