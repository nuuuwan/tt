import { Box, Typography } from "@mui/material";

export default function ScoreView({ totalPoints, pointsForCurrentProblem, topScore }) {
  const sign = pointsForCurrentProblem > 0 ? "+" : "";
  const color = pointsForCurrentProblem > 0 ? "#084" : "#800";
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6">⭐{totalPoints.toLocaleString()}</Typography>
      <Typography variant="h4" sx={{color}}>{sign}{pointsForCurrentProblem.toLocaleString()}</Typography>
      <Typography variant="h6" sx={{ fontSize: "80%", opacity: 0.2 }}>
        🏆{topScore.toLocaleString()}
      </Typography>
    </Box>
  );
}
