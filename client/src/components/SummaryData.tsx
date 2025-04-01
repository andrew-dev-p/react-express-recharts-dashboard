import { Box, Typography, useTheme } from "@mui/material";
import BoxHeader from "./charts/BoxHeader";

const SummaryData = () => {
  const { palette } = useTheme();

  return (
    <>
      <BoxHeader title="Overall Summary and Explanation Data" sideText="+15%" />
      <Box
        height="15px"
        margin="1.25rem 1rem 0.4rem 1rem"
        bgcolor={palette.primary[800]}
        borderRadius="1rem"
      >
        <Box
          height="15px"
          bgcolor={palette.primary[600]}
          borderRadius="1rem"
          width="40%"
        />
        <Typography margin="0.5rem 0" variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, error?
          Molestiae, voluptas. Voluptatum quis dolore ullam neque reiciendis,
          asperiores at quasi, consectetur quam provident cumque fugiat maiores
          facilis qui enim cupiditate ab ratione minima aperiam dignissimos.
          Numquam consectetur quibusdam quae praesentium explicabo? Nobis quo
          cupiditate ipsam deleniti, esse quae nemo, odit dicta necessitatibus
          ab modi facere, asperiores sit minus? Aperiam facere illo voluptatibus
          dolores. Quia repellendus aliquam consectetur voluptatibus amet ipsa
          ut eligendi deserunt dicta qui sequi dolorem molestias accusamus harum
          provident facilis ab iure, voluptate officiis recusandae minima. Rerum
          adipisci nostrum deleniti officiis natus perspiciatis quo ullam animi
          neque!
        </Typography>
      </Box>
    </>
  );
};

export default SummaryData;
