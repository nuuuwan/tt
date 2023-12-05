import { Box, Typography } from "@mui/material";

const EMOJIS = ["🔴", "🟡", "🟢"];

export default function ScoreView({ resultList }) {
  const resultStr = resultList
    .map(function (result) {
      return EMOJIS[result];
    })
    .join("");
  return (
    <Box>
      <Typography variant="h6">{resultStr}</Typography>
    </Box>
  );
}
