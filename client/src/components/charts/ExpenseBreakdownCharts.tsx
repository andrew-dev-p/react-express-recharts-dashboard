import { PieChart, Pie, Cell } from "recharts";
import BoxHeader from "./BoxHeader";
import FlexBetween from "../FlexBetween";
import { Typography, useTheme } from "@mui/material";
import { GetKpisResponse } from "@/state/types";
import { useMemo } from "react";
import React from "react";

const ExpenseBreakdownCharts = ({
  kpiData,
}: {
  kpiData?: GetKpisResponse[];
}) => {
  const { palette } = useTheme();

  const pieColors = [palette.primary[800], palette.primary[300]];

  const data = useMemo(() => {
    if (!kpiData || kpiData.length === 0 || !kpiData[0].expensesByCategory) {
      return [];
    }

    const totalExpenses = kpiData[0].totalExpenses;

    return Object.entries(kpiData[0].expensesByCategory).map(([key, value]) => [
      {
        name: key,
        value,
      },
      {
        name: `${key} of Total`,
        value: totalExpenses - value,
      },
    ]);
  }, [kpiData]);

  if (!data) return null;

  return (
    <>
      <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
      <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
        {data.map((pieChartData, index) =>
          pieChartData[0].value ? (
            <React.Fragment key={`${pieChartData[0].name}-${index}`}>
              <PieChart
                width={110}
                height={100}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <Pie
                  data={pieChartData}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`${entry.name}-${index}`}
                      fill={pieColors[index]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{pieChartData[0].name}</Typography>
            </React.Fragment>
          ) : null
        )}
      </FlexBetween>
    </>
  );
};

export default ExpenseBreakdownCharts;
