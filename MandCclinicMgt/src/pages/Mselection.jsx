
import { Card, CardContent, CardMedia,  Grid2, Box, Button } from "@mui/material";



const Selection = () => {
  const cards = [
    {
      title: "MOTHER",
      img: "src/images/Mom.png", 
      bgColor: "#ffc1e3",
      link: "/mform", // Example route or URL
    },
    {
      title: "BABY",
      img: "src/images/Baby1.png", 
      bgColor: "#add8e6",
      link: "/bform", // Example route or URL
    },
  ];

  // Click handler function
  // eslint-disable-next-line no-unused-vars
  const handleClick = (title, _link) => {
    alert(`You clicked on ${title}`); // Example action
    // window.location.href = link; // Uncomment to navigate to a page
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
                <Button
                  onClick={() => handleClick(card.title, card.link)}
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
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Selection;
