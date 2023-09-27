import { Typography } from "@mui/material";

export const ItemListContainer = ({ greeting }) => {
  return (
    <Typography
      variant="h3"
      noWrap
      component="a"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {greeting}
    </Typography>
  );
};
