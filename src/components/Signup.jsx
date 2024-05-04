import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../utils/api";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function SignUp() {
  const navigate = useNavigate();

  const {
    setLoggedInUser,
    setUserAvatar,
    setIsLoggedIn,
    isLoggedIn,
    prevPath,
  } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("username") === "") {
      alert("Username cannot be empty. Please fill the form correctly.");
    } else if (data.get("email") === "") {
      alert("Email cannot be empty. Please fill the form correctly.");
    } else if (data.get("password") === "") {
      alert("Password cannot be empty. Please fill the form correctly.");
    } else {
      userSignup(
        data.get("username"),
        data.get("password"),
        data.get("avatar"),
        data.get("email")
      )
        .then((res) => {
          window.localStorage.setItem("username", res.username);
          window.localStorage.setItem("avatar", res.avatar_url);
          window.localStorage.setItem("isLoggedIn", true);
          setLoggedInUser(res.username);
          setUserAvatar(res.avatar_url);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (isLoggedIn && prevPath !== "/") {
      navigate(prevPath);
    } else if (isLoggedIn) {
      navigate("/reviews/category_name/all");
    }
  }, [isLoggedIn, prevPath, navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="appbarClass"
          position="fixed"
          sx={{
            boxShadow: "none",
            background: "transparent",
            display: { xs: "none", md: "none", lg: "flex" },
            animation: "none",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button size="large" color="inherit" onClick={() => navigate(-1)}>
                <ArrowBackIcon fontSize="large" sx={{ mr: 1 }} /> Go back
              </Button>
            </Typography>
            <Button
              size="large"
              color="inherit"
              onClick={() => navigate(`/reviews/category_name/all`)}
            >
              <SportsEsportsIcon fontSize="large" sx={{ mr: 1 }} /> HOME
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="avatar"
                  label="Avatar URL"
                  name="avatar"
                  autoComplete="Avatar URL"
                  placeholder="Avatar URL"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="We won't send marketing promotions or updates whatsoever. Well, obviously~"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => navigate(`/login`)} variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
