import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid2, Box } from "@mui/material";




const Selection = () => {
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
    <Box className="Selection"   >
      <Grid2 container spacing={0} justifyContent="center" style={{ width: "100%" }}>
        {cards.map((card, index) => (
          
            <Card
              style={{
                backgroundColor: card.bgColor,
                borderRadius: "0px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                width: '50%',
                height: '100vh'
              }}
            >
              <CardMedia
                component="img"
                height="700"
                image={card.img}
                alt={card.title}
                style={{ borderRadius: "0px 0px 0 0" }}
              />
              <CardContent>
                <button
                  variant="h1"
                  component="div"
                  align="center"
                  style={{ fontWeight: "bold", padding:'20px 20px 20px 20px', }}
                >
                  {card.title}
                </button>
              </CardContent>
            </Card>
        
        ))}
      </Grid2>
    </Box>
  );
};

export default Selection;
