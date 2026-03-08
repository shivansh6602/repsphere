import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
import { motion } from "framer-motion";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  if (!exerciseVideos?.length) {
    return (
      <Typography variant="h6" sx={{ mt: 4 }}>
        No exercise videos available
      </Typography>
    );
  }

  return (

    <Box sx={{ mt: 10, px: { lg: "80px", xs: "20px" } }}>

      {/* Title */}

      <Typography
        sx={{
          fontSize: { lg: "34px", xs: "26px" },
          fontWeight: 800
        }}
      >
        Watch <span style={{ color: "#FF2625" }}>{name}</span> Exercise Videos
      </Typography>

      {/* Red underline */}

      <Box
        sx={{
          width: "70px",
          height: "4px",
          background: "#FF2625",
          borderRadius: "10px",
          mt: 1,
          mb: 5
        }}
      />

      {/* Video Grid */}

      <Grid container spacing={3}>

        {exerciseVideos.slice(0, 3).map((video, index) => (

          <Grid item xs={12} sm={6} md={3} key={video.id.videoId}>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >

              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >

                <Card
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",

                    "&:hover": {
                      boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
                    }
                  }}
                >

                  {/* Thumbnail */}

                  <CardMedia
                    component="img"
                    image={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    sx={{
                      height: "180px",
                      objectFit: "cover"
                    }}
                  />

                  {/* Title */}

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center"
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#1a1a1a",
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical"
                      }}
                    >
                      {video.snippet.title}
                    </Typography>

                  </CardContent>

                </Card>

              </a>

            </motion.div>

          </Grid>

        ))}

      </Grid>

    </Box>

  );
};

export default ExerciseVideos;