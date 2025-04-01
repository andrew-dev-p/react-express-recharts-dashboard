import DashboardBox from "@/components/DashboardBox";
import { Box, useMediaQuery } from "@mui/material";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import RevenueExpensesChart from "@/components/charts/RevenueExpensesChart";
import ProfitRevenueChart from "@/components/charts/ProfitRevenueChart";
import RevenueByMonthChart from "@/components/charts/RevenueByMonthChart";
import OperationalExpensesChart from "@/components/charts/OperationalExpensesChart";
import CampaignsTargetsChart from "@/components/charts/CampaignsTargetsChart";
import PricesExpensesChart from "@/components/charts/PricesExpensesChart";
import ProductsList from "@/components/charts/ProductsList";
import RecentOrders from "@/components/charts/RecentOrders";
import ExpenseBreakdownCharts from "@/components/charts/ExpenseBreakdownCharts";
import SummaryData from "@/components/SummaryData";

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
  const { data: kpisData } = useGetKpisQuery();
  const { data: productsData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();

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
        <RevenueExpensesChart data={kpisData} />
      </DashboardBox>
      <DashboardBox gridArea="b">
        <ProfitRevenueChart data={kpisData} />
      </DashboardBox>
      <DashboardBox gridArea="c">
        <RevenueByMonthChart data={kpisData} />
      </DashboardBox>
      <DashboardBox gridArea="d">
        <OperationalExpensesChart data={kpisData} />
      </DashboardBox>
      <DashboardBox gridArea="e">
        <CampaignsTargetsChart />
      </DashboardBox>
      <DashboardBox gridArea="f">
        <PricesExpensesChart data={productsData} />
      </DashboardBox>
      <DashboardBox gridArea="g">
        <ProductsList data={productsData} />
      </DashboardBox>
      <DashboardBox gridArea="h">
        <RecentOrders data={transactionsData} />
      </DashboardBox>
      <DashboardBox gridArea="i">
        <ExpenseBreakdownCharts kpiData={kpisData} />
      </DashboardBox>
      <DashboardBox gridArea="j">
        <SummaryData />
      </DashboardBox>
    </Box>
  );
};

export default Dashboard;
