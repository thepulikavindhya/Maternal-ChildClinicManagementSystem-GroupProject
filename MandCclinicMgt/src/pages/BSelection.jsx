import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BSelection = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "MOTHER",
      img: "src/images/Mom.png",
      bgColor: "#ffc1e3",
      path: "/mothercart",
    },
    {
      title: "BABY",
      img: "src/images/Baby1.png",
      bgColor: "#add8e6",
      path: "/babycart",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)", // Soft gradient
        padding: 3,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => navigate(card.path)}
            >
              <CardMedia
                component="img"
                height="400"
                image={card.img}
                alt={card.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.6)", // Darker overlay for better contrast
                  textAlign: "center",
                  padding: "12px",
                }}
              >
                <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BSelection;
