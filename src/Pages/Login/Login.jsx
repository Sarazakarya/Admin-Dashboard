import React, { useState } from "react";
import "./Login.css";
import img from "../../images/download.png";
import {
  Box,
  TextField,
  Button as MuiButton,
  Typography,
  InputAdornment,
  Divider,
  Paper,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/Slices/usersSlice";
export const Login = () => {
  const [emmil, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const naviage = useNavigate();

  function handelSighIn(e) {
    e.preventDefault();
    if (!emmil || !Password) {
      Swal.fire("Error", "Please fill in all required fields!", "error");
      return;
    }
    dispatch(
      loginUser({
        email: emmil,
        password: Password,
      }),
    )
      .unwrap()
      .then(() => {
        setEmail("");
        setPassword("");
        naviage("/");
      })
      .catch((err) => Swal.fire(err || "Something went wrong"));
  }
  return (
    <div className="Login">
      <img src={img} alt="" />
      <Typography variant="h5" fontWeight="bold" mb={1}>
        Login
      </Typography>

      <Paper sx={{ p: 4, width: 350, backgroundColor: "#F0F0F0" }}>
        <form onSubmit={handelSighIn}>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <TextField
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={emmil}
              required
              placeholder="Enter Your Email"
              sx={{ backgroundColor: "#FFFFFF", width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              value={Password}
              required
              fullWidth
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{ backgroundColor: "#FFFFFF", width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />

            <MuiButton
              variant="contained"
              type="submit"
              size="large"
              sx={{
                backgroundColor: "#0B62E0",
                color: "#fff",
                mt: 1,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#42a5f5",
                  border: "1px solid #42a5f5",
                },
              }}
            >
              Sign Up
            </MuiButton>

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  I agree to all{" "}
                  <Link
                    href="/terms"
                    target="_blank"
                    sx={{ color: "#0B62E0", textDecoration: "none" }}
                  >
                    Terms & Conditions
                  </Link>
                </Typography>
              }
            />
            <Divider>OR</Divider>
            <MuiButton
              variant="outlined"
              size="large"
              startIcon={<FcGoogle size={22} />}
              sx={{
                borderColor: "#",
                color: "#555",
                textTransform: "#42a5f5",
                "&:hover": {
                  borderColor: "#42a5f5",
                  backgroundColor: "#f5faff",
                },
              }}
            >
              Sign in with Google
            </MuiButton>
          </Box>
        </form>
      </Paper>

      <Paper
        sx={{
          p: 2,
          width: 350,
          backgroundColor: "#F0F0F0",
          mt: 6,
          textAlign: "center",
        }}
      >
        <span className="fw-bold">
          Don't have an account ?{" "}
          <Link to={"/SignUp"} style={{ color: "#0857F5" }}>
            Sign Up
          </Link>{" "}
        </span>
      </Paper>
    </div>
  );
};
