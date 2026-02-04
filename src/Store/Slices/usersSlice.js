import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostUser = createAsyncThunk(
  "userSlice/PostUser",
  async (userData, thunkAPI) => {
    try {
      const res = await fetch(
        "https://6982a2389c3efeb892a2dcde.mockapi.io/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: userData.name,
            email: userData.email,
            password: userData.password,
          }),
        },
      );
      const data = await res.json();
      localStorage.setItem("CurrentUser", JSON.stringify(data));
      return data;
    } catch {
      const msg = "Somthing Gors Wrong";
      return thunkAPI.rejectWithValue(msg);
    }
  },
);

export const loginUser = createAsyncThunk(
  "userSlice/GetUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch(
        `https://6982a2389c3efeb892a2dcde.mockapi.io/users`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );
      const users = await res.json();
      const UserData = users.find(
        (ele) => ele.email === email && ele.password === password,
      );
      if (!UserData) {
        return thunkAPI.rejectWithValue("Email or Password is incorrect");
      }
      localStorage.setItem("CurrentUser", JSON.stringify(UserData));
      return UserData;
    } catch {
      const msg = "Somthing Gors Wrong";
      return thunkAPI.rejectWithValue(msg);
    }
  },
);

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    loading: false,
    error: null,
    currenUser: JSON.parse(localStorage.getItem("CurrentUser")) || null,
  },
  reducers: {
    logout: (state) => {
      state.currenUser = null;
      localStorage.removeItem("CurrentUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currenUser = action.payload;
      })
      .addCase(PostUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currenUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = usersSlice.actions;
