import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import BoxHeader from "./BoxHeader";
import { GetTransactionsResponse } from "@/state/types";

const RecentOrders = ({ data }: { data?: GetTransactionsResponse[] }) => {
  const { palette } = useTheme();

  const dataColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.33,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.33,
      renderCell: (params: GridCellParams) => (params.value as string[]).length,
    },
  ];
  return (
    <>
      <BoxHeader
        title="Recent Orders"
        sideText={`${data ? data.length : 0} products`}
      />
      <Box
        mt="0.5rem"
        p="0 0.5rem"
        height="80%"
        sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter
          rows={data || []}
          columns={dataColumns}
        />
      </Box>
    </>
  );
};

export default RecentOrders;
