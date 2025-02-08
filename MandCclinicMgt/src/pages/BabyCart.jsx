import React from "react";
import { Card, CardContent, CardActions, Button, Typography, Grid2, Avatar, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HOME from "../Images/HOME.png"

const BabyDashboard = () => {
  const data = Array(8).fill({
    motherId: "12345",
    babyName: "Baby Name",
    dob: "01/01/2023",
    image: "https://via.placeholder.com/150",
  });

  const [gender, setGender] = React.useState("M");

  const handleGenderChange = (event, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ background: "#ff80aa", color: "white", textTransform: "none", borderRadius: "10px", marginLeft:'92rem' }}
        >
          Add New Baby
        </Button>
        
      </div>
      <Grid2 container spacing={5} sx={{ backgroundImage: `url(${HOME})`, padding: "20px", borderRadius: "10px", backgroundSize:'cover',height:'100vh', width:'100%' }}>
      <ToggleButtonGroup
          value={gender}
          exclusive
          onChange={handleGenderChange}
          aria-label="Gender Filter"
          sx={{ background: "#f3f4f6", borderRadius: "10px", height:'40px', width:'68px', ml:'1500px' }}
        >
          <ToggleButton value="M" sx={{ textTransform: "none" }}>M</ToggleButton>
          <ToggleButton value="F" sx={{ textTransform: "none" }}>F</ToggleButton>
        </ToggleButtonGroup>

        {data.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", background: "white" }}
            >
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" , flexDirection: 'column'}}>
                  <Avatar src={item.image} alt="Baby" sx={{ width: 60, height: 60, marginRight: "15px" }} />
                  <div>

                    <Typography variant="body2" color="text.secondary">Mothers ID: {item.motherId}</Typography>
                    <Typography variant="body1">Babys Name: {item.babyName}</Typography>

                    <Typography variant="body2" color="text.secondary">Mothers ID: {item.motherId}</Typography>
                    <Typography variant="body1">Babys Name: {item.babyName}</Typography>

                    <Typography variant="body2" color="text.secondary">Date of Birth: {item.dob}</Typography>
                  </div>
                </div>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  sx={{ color: "white", background: "#ff80aa", textTransform: "none", borderRadius: "15px" }}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default BabyDashboard;
