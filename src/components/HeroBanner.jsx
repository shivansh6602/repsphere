import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "98vh",
        width: "100%",
        backgroundImage: `url(${HeroBannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
     
      <Box
        sx={{
          backdropFilter: "blur(5px)",
          background: "rgba(0,0,0,0.3)",
          padding: "30px",
          borderRadius: "20px",
     
        }}
      >
        <Typography color="#FF2625" fontWeight="700" fontSize="26px">
          Fitness Club
        </Typography>

        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "54px", xs: "36px" } }}
          mb="20px"
          mt="10px"
          color="white"
        >
          Sweat, Smile <br /> And Repeat
        </Typography>

        <Typography fontSize="20px" color="white">
          Discover the best exercises to transform your body
        </Typography>

        <Stack mt={4}>
          <a
            href="#exercises"
            style={{
              textDecoration: "none",
              width: "220px",
              textAlign: "center",
              background: "#FF2625",
              padding: "14px",
              fontSize: "20px",
              color: "white",
              borderRadius: "6px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Explore Exercises
          </a>
        </Stack>
      </Box>

   
      <Typography
        sx={{
          position: "absolute",
          bottom: "45px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { lg: "40px", xs: "28px" },
          fontWeight: "900",
          color: "#FF2625",
          letterSpacing: "4px",  
        fontSize: "109px",
        fontFamily: "fantasy",
        marginLeft: "1%",
        }}
      >
        STAY FIT
      </Typography>
    </Box>
  );
};

export default HeroBanner;