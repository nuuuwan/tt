import { Box, Typography } from "@mui/material";

const COLORS = ["#f8f8f8", "#800", "#f80", "#084"];

export default function ScoreView({ resultList }) {
  const resultStr = resultList.map(function (result, iResult) {
    const color = COLORS[result];
    return (
      <span
        key={"result-" + iResult}
        style={{ color, display: "inline-block" }}
      >
        ⬤
      </span>
    );
  });
  return (
    <Box>
      <Typography variant="h6">
        <div style={{}}>{resultStr}</div>
      </Typography>
    </Box>
  );
}
