import React from "react";
import styled from "styled-components";

const color = "#111";
const primary = "#FFAB9D";

const Link = styled.a`
  text-decoration: none;
  color: ${color};
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: rgba(255, 171, 157, 0.5);
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: #ffab9d;
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;
const Icon = styled.svg`
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #111;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(0);
  }
`;
const Label = styled.span`
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
`;

const ExploreButton = () => {
  return (
    <Link href="#">
      <Label>Explore</Label>
      <Icon width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </Icon>
    </Link>
  );
};

export default ExploreButton;
