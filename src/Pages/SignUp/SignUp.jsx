import React, { useState } from "react";
import "./SignUp.css";
import Button from "react-bootstrap/Button";
import { IoMdHome } from "react-icons/io";
import img from "../../images/download.png";
import {
  Box,
  TextField,
  Button as MuiButton,
  Typography,
  InputAdornment,
  Divider,
} from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import { GiConfirmed } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { PostUser } from "../../Store/Slices/usersSlice";
import Swal from "sweetalert2";
export const SignUp = () => {
  const dispatch = useDispatch();
  const [emmil, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const naviage = useNavigate();

  function handelSighUp(e) {
    e.preventDefault();
    if (!username || !emmil || !Password || !confrimPassword) {
      Swal.fire("Error", "Please fill in all required fields!", "error");
      return;
    }

    if (Password !== confrimPassword) {
      Swal.fire("Error", "Passwords do not match!", "error");
      return;
    }
    if (confrimPassword !== Password) {
      Swal.fire(" Passwords do not match!");
      return;
    }

    if (!agree) {
      Swal.fire("Error", "You must agree to Terms & Conditions", "error");
      return;
    }
    dispatch(
      PostUser({
        name: username,
        email: emmil,
        password: Password,
      }),
    )
      .unwrap()
      .then(() => {
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        naviage("/");
      })
      .catch((err) => Swal.fire(err || "Something went wrong"));
  }

  return (
    <div className="SignUp">
      <div className="SignUp__Left">
        <h1>
          BEST UX/UI FASHION <br /> <span>ECOMMERCE DASHBOARD </span> & <br />{" "}
          ADMIN PANEL
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <Button
          variant="primary"
          size="sm"
          href="/"
          className="d-inline-flex align-items-center gap-2 text-white fw-bold p-2"
        >
          <IoMdHome />
          Go To Home
        </Button>
      </div>

      <div className="SignUp__right">
        <div className="Sign__Image">
          <img src={img} alt="" />
        </div>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          {" "}
          Create Account
        </Typography>
        <form onSubmit={handelSighUp}>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <TextField
              required
              fullWidth
              type="text"
              value={username}
              sx={{ backgroundColor: "#fff" }}
              placeholder="Enter Your Name"
              onChange={(e) => setUserName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              required
              placeholder="Enter Your Email"
              value={emmil}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              sx={{ backgroundColor: "#fff", width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              fullWidth
              placeholder="Enter Your Password"
              value={Password}
              sx={{ backgroundColor: "#fff", width: "100%" }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              fullWidth
              placeholder="Confirm Your Password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ backgroundColor: "#fff", width: "100%" }}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GiConfirmed />
                  </InputAdornment>
                ),
              }}
            />
            <MuiButton
              variant="contained"
              size="large"
              type="submit"
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
              control={
                <Checkbox
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
              }
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

            <span className="fw-bold">
              Don't have an account ?{" "}
              <Link to={"/Login"} style={{ color: "#0857F5" }}>
                Sign In
              </Link>{" "}
            </span>
          </Box>
        </form>
      </div>
    </div>
  );
};
