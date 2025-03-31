import DashboardBox from "@/components/DashboardBox";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";
import RevenueExpensesChart from "@/components/charts/RevenueExpensesChart";
import ProfitRevenueChart from "@/components/charts/ProfitRevenueChart";
import RevenueByMonthChart from "@/components/charts/RevenueByMonthChart";

const gridTemplateLg = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSm = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = () => {
  const { data } = useGetKpisQuery();

  const isLgScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isLgScreen
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLg,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSm,
            }
      }
    >
      <DashboardBox gridArea="a">
        <RevenueExpensesChart data={data} />
      </DashboardBox>
      <DashboardBox gridArea="b">
        <ProfitRevenueChart data={data} />
      </DashboardBox>
      <DashboardBox gridArea="c">
        <RevenueByMonthChart data={data} />
      </DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </Box>
  );
};

export default Dashboard;
