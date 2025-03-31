import { GetProductsResponse } from "@/state/types";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import BoxHeader from "./BoxHeader";
import { Box, useTheme } from "@mui/material";

const ProductsList = ({ data }: { data?: GetProductsResponse[] }) => {
  console.log("🚀 ~ ProductsList ~ data:", data);
  const { palette } = useTheme();

  const dataColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  return (
    <>
      <BoxHeader
        title="List of Products"
        sideText={`${data ? data.length : 0} products`}
      />
      <Box
        mt="0.5rem"
        p="0 0.5rem"
        height="75%"
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

export default ProductsList;
