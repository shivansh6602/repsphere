import React, { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
                                                                         
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <Box position="relative">

      {/* Left Arrow */}
      <Typography
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          left: 0,
          top: "40%",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>

      {/* Right Arrow */}
      <Typography
        onClick={scrollRight}
        sx={{
          position: "absolute",
          right: 0,
          top: "40%",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>

      {/* Scrollable Row */}
      <Stack
        ref={scrollRef}
        direction="row"
        spacing={4}
        sx={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
          padding: "20px",
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {data.map((item) => (
          <Box key={item.id || item} sx={{ flex: "0 0 auto" }}>
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </Stack>

    </Box>
  );
};


export default HorizontalScrollbar;
