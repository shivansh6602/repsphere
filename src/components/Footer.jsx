import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box
      mt="120px"
      sx={{
        background: "#FFF3F4",
        borderTop: "1px solid #eee",
      }}
    >
      

      <Stack
        spacing={4}
        alignItems="center"
        sx={{
          px: { lg: "80px", xs: "20px" },
          py: "50px",
        }}
      >
      
<Typography sx={{display: "flex", fontSize: "25px", fontWeight: "800"}}>
        <img
          src={Logo}
          alt="Repsphere logo"
          style={{ width: "40px", height: "40px" }}
        />
        <p style={{marginTop: "10px"}}>Repsphere</p>
</Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#555",
            textAlign: "center",
            maxWidth: "500px"
          }}
        >
          Your personal fitness companion to discover exercises,
          improve strength, and build a stronger body.
        </Typography>

        

        <Stack spacing={1} alignItems="center">

          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon sx={{ color: "#FF2625" }} />
            <Typography fontSize="15px">
              shivanshdixit2002@gmail.com
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon sx={{ color: "#FF2625" }} />
            <Typography fontSize="15px">
              +91 8318807915
            </Typography>
          </Stack>

        </Stack>

      </Stack>

      <Divider />

    

      <Typography
        sx={{
          textAlign: "center",
          py: "18px",
          fontSize: "14px",
          color: "#666"
        }}
      >
        Crafted with ❤️ by{" "}
        <span style={{ color: "#FF2625", fontWeight: 600 }}>
          Shivansh Dixit
        </span>{" "}
        © {new Date().getFullYear()} Repsphere. All Rights Reserved.
      </Typography>

    </Box>
  );
};

export default Footer;