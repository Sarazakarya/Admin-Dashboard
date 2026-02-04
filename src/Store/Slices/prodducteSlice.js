import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "getProducte/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      const data = await res.json();
      return data;
    } catch {
      let msg = "Somthing go wrong";
      return thunkAPI.rejectWithValue(msg);
    }
  },
);

export const EditProducts = createAsyncThunk(
  "getProducte/EditProducts",
  async (product, thunkAPI) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        },
      );
      const data = await res.json();
      return data;
    } catch {
      let msg = "Somthing go wrong";
      return thunkAPI.rejectWithValue(msg);
    }
  },
);

export const DelteProducts = createAsyncThunk(
  "getProducte/DelteProducts",
  async (productId, thunkAPI) => {
    try {
     await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "DELETE",
        },
      );
       return productId
    } catch {
      let msg = "Somthing go wrong";
      return thunkAPI.rejectWithValue(msg);
    }
  },
);

export const producteSlice = createSlice({
  name: "producteSlice",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(EditProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(EditProducts.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (ele) => ele.id === action.payload.id,
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(EditProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DelteProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});
