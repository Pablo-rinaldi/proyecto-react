import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          maxWidth: 1200,
          margin: "auto",
          padding: "10px",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};
