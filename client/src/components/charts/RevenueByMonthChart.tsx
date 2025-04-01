import { GetKpisResponse } from "@/state/types";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import BoxHeader from "./BoxHeader";
import { useTheme } from "@mui/material";
import { useMemo } from "react";

const RevenueByMonthChart = ({ data }: { data?: GetKpisResponse[] }) => {
  const { palette } = useTheme();

  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue,
        };
      })
    );
  }, [data]);

  return (
    <>
      <BoxHeader
        title="Revenue Month by Month"
        subTitle="some description some description some description"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 17,
            right: 16,
            left: -5,
            bottom: 58,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
          />
          <Tooltip />
          <Bar dataKey="revenue" fill="url(#colorRevenue)" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueByMonthChart;
