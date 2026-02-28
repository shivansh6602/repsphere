import React, {
  useEffect,
  useState,
} from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  exerciseOptions,
  fetchData,
} from "../utils/fetchData";
import BodyPart from "./BodyPart";

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions,
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions,
      );

      const searchedExcerises =
        exerciseData.filter(
          (excercise) =>
            excercise.name
              .toLowerCase()
              .includes(search) ||
            excercise.target
              .toLowerCase()
              .includes(search) ||
            excercise.equipment
              .toLowerCase()
              .includes(search) ||
            excercise.bodyPart
              .toLowerCase()
              .includes(search),
        );
      setSearch("");
      setExercises(searchedExcerises);
    }
  };

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          placeholder="Search Exercises"
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value.toLowerCase(),
            )
          }
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
