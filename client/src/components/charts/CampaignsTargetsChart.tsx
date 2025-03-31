import { Box, Typography, useTheme } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import BoxHeader from "./BoxHeader";
import FlexBetween from "../FlexBetween";

const pieData = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 250 },
];

const CampaignsTargetsChart = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  return (
    <>
      <BoxHeader title="Campaigns and Targets" sideText="+4%" />
      <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
        <PieChart
          width={110}
          height={100}
          margin={{ top: 0, right: -10, left: 10, bottom: 0 }}
        >
          <Pie
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
          <Typography variant="h5">Target Sales</Typography>
          <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
            83
          </Typography>
          <Typography variant="h6">
            Finance goals of the campaign that is desired
          </Typography>
        </Box>
        <Box flexBasis="40%">
          <Typography variant="h5">Losses in Revenue</Typography>
          <Typography variant="h6">Losses are down 25%</Typography>
          <Typography variant="h5" mt="0.4rem">
            Profit Margins
          </Typography>
          <Typography variant="h6">
            Margins are up by 30% from last month
          </Typography>
        </Box>
      </FlexBetween>
    </>
  );
};

export default CampaignsTargetsChart;
