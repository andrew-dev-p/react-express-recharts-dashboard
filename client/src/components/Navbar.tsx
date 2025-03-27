import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useState } from "react";
import PixIcon from "@mui/icons-material/Pix";
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    label: "Dashboard",
    value: "dashboard",
    route: "/",
  },
  {
    label: "Predictions",
    value: "predictions",
    route: "/predictions",
  },
];

const Navbar = () => {
  const { palette } = useTheme();

  const [selected, setSelected] =
    useState<(typeof navbarLinks)[number]["value"]>();

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        {navbarLinks.map((link) => (
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to={link.route}
              onClick={() => setSelected(link.value)}
              style={{
                color: selected === link.value ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              {link.label}
            </Link>
          </Box>
        ))}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
