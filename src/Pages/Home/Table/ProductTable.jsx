import React, { useEffect, useMemo, useState } from "react";
import "./ProductTable.css";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import SelectLabels from "./Selection/SelectLabels";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  DelteProducts,
} from "../../../Store/Slices/prodducteSlice";
import SimpleBackdrop from "../../../Components/Loading/SimpleBackdrop";
import { useNavigate } from "react-router-dom";
import EditProductPopup from "../../UploadProduct/EditProductPopup";

export const ProductTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, loading } = useSelector((state) => state.Producte);
  const currenUser = useSelector((state) => state.Users.currenUser);

  const openPopup = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
  };
  const columns = useMemo(() => {
    return [
      { field: "id", headerName: "UID", width: 70 },

      { field: "PRODUCT", headerName: "PRODUCT", width: 300 },

      { field: "Age", headerName: "Age", width: 60 },

      { field: "Category", headerName: "Category", width: 130 },

      { field: "Price", headerName: "Price ($)", width: 120 },

      { field: "Rating", headerName: "Rating", width: 100 },

      { field: "Sales", headerName: "Sales", width: 110 },

      {
        field: "Images",
        headerName: "Images",
        width: 130,
        sortable: false,
        renderCell: (params) => (
          <img
            src={params.row.Image}
            alt={params.row.PRODUCT}
            style={{
              width: 50,
              height: 50,
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
        ),
      },

      {
        field: "Action",
        headerName: "Action",
        width: 130,
        sortable: false,
        renderCell: (params) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <IconButton
              size="small"
              color="primary"
              onClick={() =>
                currenUser
                  ? navigate(`/Product/${params.row.id}`)
                  : navigate("/Login")
              }
            >
              <Visibility />
            </IconButton>

            <IconButton
              size="small"
              color="success"
              onClick={() =>
                currenUser ? openPopup(params.row) : navigate("/Login")
              }
            >
              <Edit />
            </IconButton>

            <IconButton
              size="small"
              color="error"
              onClick={() =>
                currenUser
                  ? dispatch(DelteProducts(params.row.id))
                  : navigate("/Login")
              }
            >
              <Delete />
            </IconButton>
          </div>
        ),
      },
    ];
  }, [currenUser, navigate, dispatch]);

  const rows = useMemo(() => {
    return (
      products
        ?.filter((item) => category === "" || item.category === category)
        .map((item) => ({
          id: item.id,
          PRODUCT: item.title,
          Category: item.category,
          Price: item.price,
          Rating: item.rating?.rate || 1,
          Sales: item.rating?.count || 2,
          Image: item.image,
        })) || []
    );
  }, [products, category]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading || !products.length) {
    return <SimpleBackdrop open={true} />;
  }
  return (
    <div className="ProductTable">
      <h5>Best Selling Products</h5>

      <SelectLabels setCategory={setCategory} category={category} />
      <Paper sx={{ height: 400, width: "100%", marginTop: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: 0,
            "& .tableCellClasses.head}": {
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
            },
          }}
        />
      </Paper>
      {selectedProduct && (
        <EditProductPopup
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};
