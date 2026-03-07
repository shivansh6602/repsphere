import React from "react";
import { Box, Typography, Grid, Card, CardContent, Stack } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const ExerciseCard = ({ exercise, index }) => {

  const image = `https://loremflickr.com/640/480/gym,${exercise?.target}`;

  return (

    <Grid size={{ xs: 12, sm: 6, md: 3 }}>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ y: -8 }}
      >

        <Link
          to={`/exercise/${exercise.id}`}
          style={{ textDecoration: "none" }}
        >

          <Card
            sx={{
              borderRadius: "18px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
              borderTop: "4px solid #FF2625",
              transition: "0.3s",

              "&:hover": {
                boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
              }
            }}
          >

            <Box
              component="img"
              src={image}
              alt={exercise?.name}
              loading="lazy"
              sx={{
                width: "100%",
                height: "180px",
                objectFit: "cover"
              }}
            />

            <CardContent>

              <Stack spacing={2}>

                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "10px",
                    background: "#FFECEC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FitnessCenterIcon sx={{ color: "#FF2625" }} />
                </Box>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    color: "#1a1a1a",
                    lineHeight: 1.3
                  }}
                >
                  {exercise?.name}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">

                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      background: "#FFECEC",
                      color: "#FF2625",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "capitalize"
                    }}
                  >
                    {exercise?.target}
                  </Box>

                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      background: "#F2F2F2",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "capitalize"
                    }}
                  >
                    {exercise?.equipment}
                  </Box>

                </Stack>

              </Stack>

            </CardContent>

          </Card>

        </Link>

      </motion.div>

    </Grid>
  );
};



const SectionHeader = ({ title }) => (

  <Box sx={{ mb: 5 }}>

    <Typography
      sx={{
        fontSize: { lg: "34px", xs: "26px" },
        fontWeight: 800,
        color: "#1a1a1a"
      }}
    >
      {title}
    </Typography>

    <Box
      sx={{
        width: "70px",
        height: "4px",
        background: "#FF2625",
        borderRadius: "10px",
        mt: 1
      }}
    />

  </Box>
);



const SimilarExercises = ({ equipmentExercises = [] }) => {

  return (

    <Box sx={{ px: { lg: "80px", xs: "20px" }, py: "60px" }}>

      {equipmentExercises.length > 0 && (

        <Box>

          <SectionHeader title="Similar Equipment Exercises" />

          <Grid container spacing={3}>

            {equipmentExercises
              .slice(0, 8)
              .map((exercise, index) => (

                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  index={index}
                />

              ))}

          </Grid>

        </Box>

      )}

    </Box>

  );
};

export default SimilarExercises;