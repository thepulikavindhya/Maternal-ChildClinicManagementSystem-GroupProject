
import {Box, Card,Grid2, Typography } from "@mui/material";



const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 1200, width: "100%", borderRadius: "16px", overflow: "hidden" }}>
        
        <Grid2 container sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              padding: 4,
            }}>
 
          <Grid2
            item
            xs={12}
            md={6} >
            <Box
      sx={{
        display: "flex",
        alignItems: "left",
        justifyContent: "space-between",

        width: "22%", // Adjust width as needed
      }}
    >
      <img src="src/images/img 4.png" alt="Logo" width="60px" height="60px" />
      <Typography>Maternal and Child Health <br></br>Sri Lanka</Typography>
    </Box>
     <img src="src\images\img 2.jpeg"/>

  


          </Grid2>

          
        </Grid2>
      </Card>
    </Box>
  );
};

export default Home;
