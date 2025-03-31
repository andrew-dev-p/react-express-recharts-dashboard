import React from "react";
import FlexBetween from "../FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

const BoxHeader = ({
  title,
  subTitle,
  sideText,
  icon,
}: {
  title: string;
  subTitle?: string;
  sideText: string;
  icon?: React.ReactNode;
}) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" marginBottom="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6" marginBottom="-0.1rem">
            {subTitle}
          </Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
