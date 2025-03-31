import { GetKpisResponse } from "@/state/types";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BoxHeader from "./BoxHeader";

const ProfitRevenueChart = ({ data }: { data?: GetKpisResponse[] }) => {
  const { palette } = useTheme();

  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          profit: (Number(revenue) - Number(expenses)).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <>
      <BoxHeader
        title="Profit and Revenue"
        subTitle="some description some description some description"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={revenueProfit}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <Legend
            height={20}
            wrapperStyle={{
              margin: "0 0 10px 0",
            }}
          />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
          <YAxis
            yAxisId="left"
            style={{ fontSize: "10px" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            style={{ fontSize: "10px" }}
            tickLine={false}
            axisLine={false}
            orientation="right"
          />
          <Tooltip />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="profit"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ProfitRevenueChart;
