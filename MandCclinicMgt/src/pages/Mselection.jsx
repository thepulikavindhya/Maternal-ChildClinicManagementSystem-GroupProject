import { Card, CardContent, CardMedia, Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const cards = [
    {
      title: "MOTHER",
      img: "src/images/Mom.png",
      bgColor: "#ffc1e3",
      path: "/mreport",
    },
    {
      title: "BABY",
      img: "src/images/Baby1.png",
      bgColor: "#add8e6",
      path: "/breport",
    },
  ];

  // Click handler function
  const handleClick = (title, path) => {
    alert(`You clicked on ${title}`); // Show alert message
    navigate(path); // Navigate to the respective page
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)", // Soft gradient
        padding: 2,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => handleClick(card.title, card.path)} // Added click on whole card
            >
              <CardMedia
                component="img"
                height="450"
                image={card.img}
                alt={card.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <Button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents Card click from triggering
                    handleClick(card.title, card.path);
                  }}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "1rem",
                  }}
                >
                  {card.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Selection;
