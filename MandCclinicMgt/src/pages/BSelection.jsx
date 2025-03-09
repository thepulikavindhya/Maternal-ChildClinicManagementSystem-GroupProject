
import { Card, CardContent, CardMedia, Typography, Grid2, Box } from "@mui/material";



const BSelection = () => {
  const cards = [
    {
      title: "MOTHER",
      img: "src/images/Mom.png", 
      bgColor: "#ffc1e3",
    },
    {
      title: "BABY",
      img: "src/images/Baby1.png", 
      bgColor: "#add8e6",
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
        padding: 2,
      }}
    >
      <Grid2 container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
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
                <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default BSelection;
