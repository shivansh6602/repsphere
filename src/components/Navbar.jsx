import React from "react";
import { Link,NavLink } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 1000
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={{ lg: "80px", xs: "20px" }}
        py="10px"
      >
      
        <Link to="/" style={{ textDecoration: "none" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain"
              }}
            />

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "26px",
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center"
              }}
            >
              <span style={{ color: "#FF2625" }}>Rep</span>
              <span style={{ color: "#222" }}>Sphere</span>
            </Typography>
          </Stack>
        </Link>

       <Stack
  direction="row"
  spacing={4}
  sx={{
    fontFamily: "sans-serif",
    fontSize: "18px",
    fontWeight: 600
  }}
>

  <NavLink
    to="/"
    style={({ isActive }) => ({
      textDecoration: "none",
      color: "#222",
      borderBottom: isActive ? "3px solid #FF2625" : "none",
      paddingBottom: "4px"
    })}
  >
    Home
  </NavLink>

  <NavLink
    to="/#exercises"
    style={({ isActive }) => ({
      textDecoration: "none",
      color: "#222",
      borderBottom: isActive ? "3px solid #FF2625" : "none",
      paddingBottom: "4px"
    })}
  >
    Exercises
  </NavLink>

</Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;