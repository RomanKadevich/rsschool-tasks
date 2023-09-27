import { Path } from "../../types";

export const url = "http://127.0.0.1:3000";

export const path: Path = {
  garage: "/garage",
  engine: "/engine",
  winner: "/winners",
};

export const flag = () => {
  const svg = `<svg width="31" height="60" viewBox="0 0 31 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="2" width="2" height="58" fill="#9E4E4E"/>
  <path d="M30.8278 17.4543L8.09547 32.3266L8.00646 2.71908L30.8278 17.4543Z" fill="#F40707"/>
  </svg>`;
  return svg;
};
