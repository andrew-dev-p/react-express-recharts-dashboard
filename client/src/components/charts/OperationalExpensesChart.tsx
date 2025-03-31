import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import BoxHeader from "./BoxHeader";
import { useTheme } from "@mui/material";
import { GetKpisResponse } from "@/state/types";
import { useMemo } from "react";

const OperationalExpensesChart = ({ data }: { data?: GetKpisResponse[] }) => {
  const { palette } = useTheme();

  const operationalExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [data]);

  return (
    <>
      <BoxHeader
        title="Operational vs Non-Operational Expenses"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={operationalExpenses}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
          <YAxis
            yAxisId="left"
            style={{ fontSize: "10px" }}
            tickLine={false}
            axisLine={false}
            orientation="left"
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
            dataKey="Non Operational Expenses"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Operational Expenses"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default OperationalExpensesChart;
