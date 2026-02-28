import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodypart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
        <BodyPart item={item} BodyPart={BodyPart} setBodypart={setBodypart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
   