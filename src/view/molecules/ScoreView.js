import { Box, Typography } from "@mui/material";

export default function ScoreView({ actualPoints, topScore }) {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6">{actualPoints.toLocaleString()}</Typography>
      <Typography variant="h6" sx={{ fontSize: "80%", opacity: 0.2 }}>
        🏆{topScore.toLocaleString()}
      </Typography>
    </Box>
  );
}
