import { Box, Typography } from "@mui/material";
import { VERSION } from "../../nonview/constants";
export default function VersionView() {
  const onClick = function () {
    window.location.reload();
  };
  return (
    <Box onClick={onClick}>
      <Typography variant="caption" style={{ color: "#eee" }}>
        v{VERSION.DATETIME_STR}
      </Typography>
    </Box>
  );
}
