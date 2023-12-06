import React from "react";
import { Typography } from "@mui/material";
import { Number } from "../../nonview/core";

function getNumberColor(n) {
  const number = new Number(n);
  if (number.isPrime()) {
    return "#800";
  }
  if (number.isEven()) {
    return "#084";
  }
  return "#f80";
}

export default function NumberView({ n, variant = "h1" }) {
  const color = getNumberColor(n);
  return (
    <Typography variant={variant} component="span">
      <span style={{ color }}>{n.toLocaleString()}</span>
    </Typography>
  );
}
