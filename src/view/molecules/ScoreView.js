import { Box, Typography } from "@mui/material";

const COLORS = ["#800", "#f80", "#084"];
const N_DISPLAY = 10;

export default function ScoreView({ resultList }) {
  const resultStr = resultList
    .slice(-N_DISPLAY)
    .map(function ({ level, points }, iResult) {
      const color = COLORS[level];
      return (
        <span
          key={"result-" + iResult}
          style={{ color, display: "inline-block" }}
        >
          ⬤
        </span>
      );
    });
  const points = resultList.reduce(function (sum, { points }) {
    return sum + points;
  }, 0);
  return (
    <Box sx={{ height: 200 }}>
      {" "}
      {points > 0 ? (
        <Typography variant="h6">{points.toLocaleString()}</Typography>
      ) : null}
      <Typography variant="h6">
        <div style={{}}>{resultStr}</div>
      </Typography>
    </Box>
  );
}
