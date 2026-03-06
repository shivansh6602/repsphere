import React from "react";
import { Box, Typography, Grid, Card, CardContent, Stack } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { motion } from "framer-motion";

const ExerciseCard = ({ exercise, index }) => (
 <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: "flex" }}>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -8 }}
    style={{ width: "100%" }}
  >
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        background: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        borderTop: "3px solid #FF2625",
        transition: "box-shadow 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
        },
      }}
    >
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: "#FFECEC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FitnessCenterIcon sx={{ color: "#FF2625", fontSize: 24 }} />
            </Box>

            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 700,
                textTransform: "capitalize",
                color: "#1a1a1a",
                lineHeight: 1.3,
              }}
            >
              {exercise.name}
            </Typography>

          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  </Grid>
);

const SectionHeader = ({ title }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      sx={{
        fontSize: { lg: "32px", xs: "24px" },
        fontWeight: 800,
        color: "#1a1a1a",
      }}
    >
      {title}
    </Typography>
    <Box
      sx={{
        width: 60,
        height: 4,
        background: "#FF2625",
        borderRadius: "10px",
        mt: 1.5,
      }}
    />
  </Box>
);

const SimilarExercises = ({ targetMuscleExercises = [] }) => {
  return (
    <Box sx={{ px: { lg: "80px", xs: "20px" }, py: { lg: "60px", xs: "40px" } }}>
      {/* Similar Target Muscle Exercises */}
      {targetMuscleExercises.length > 0 && (
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Similar Target Muscle Exercises" />
         <Grid container spacing={3} columns={12}>
            {targetMuscleExercises.slice(0, 8).map((exercise, index) => (
              <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
            ))}
          </Grid>
        </Box>
      )}

      
        
      
    </Box>
  );
};

export default SimilarExercises;
