import { Box, Typography } from "@mui/material";
import { Time } from "../../nonview/core";
import { useState } from "react";

export default function ScoreView({ totalPoints, timeStart, topScore }) {
  const [unixTime, setUnixTime] = useState(Time.getUnixTime());

  setInterval(function () {
    setUnixTime(Time.getUnixTime());
  }, 1_000);

  const { actualPoints, color } = Time.actualPoints(
    totalPoints,
    unixTime - timeStart
  );
  if (actualPoints < 1) {
    window.location.reload();
  }

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" sx={{ color }}>
        {actualPoints.toLocaleString()}
      </Typography>
      <Typography variant="h6" sx={{ fontSize: "80%", opacity: 0.2 }}>
        🏆{topScore.toLocaleString()}
      </Typography>
    </Box>
  );
}
