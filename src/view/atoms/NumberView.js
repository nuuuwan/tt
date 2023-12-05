import React from "react";
import { Typography } from "@mui/material";

const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23];

function getNumberColor(n) {
  if (PRIME_NUMBERS.includes(n)) {
    return "#800";
  }
  if (n % 2 === 0) {
    return "#084";
  }
  return "#f80";
}

export default function NumberView({ n }) {
  const color = getNumberColor(n);
  return (
    <Typography variant="h1" component="span">
      <span style={{ color }}>{n}</span>
    </Typography>
  );
}
