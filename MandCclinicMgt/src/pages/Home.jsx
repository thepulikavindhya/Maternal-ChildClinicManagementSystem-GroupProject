
import {Box, Button, Card,Container,Grid2, Typography } from "@mui/material";



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
  <Grid2 item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box mr={2}>
          <img src="src\images\img 4.png" alt="Maternal and Child Health" style={{ width: '50px' }} />
        </Box>
       
          <Typography variant="h9">Maternal and Child Health<br></br>Sri Lanka</Typography>
            <Box ml={'90'} sx={{display: 'flex-end'}}>
             <img src="src\images\img 3.png" alt="Ministry of Health" style={{ width: '50px', backgroundSize:'cover' }}  />
        </Box>
      </Grid2>

      

      <Box sx={{ flexGrow: 1, p: 2 ,  backgroundImage: "url('./src/images/img 1.jpeg')"}}>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        <Grid2 item xs={6} sm={4} md={3}>
        <Grid2 container sx={{ height: "100vh", alignItems: "center" }}>
      {/* Left Side: Image */}
      <Grid2 item xs={12} md={6}>
        <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <img
            src="src/images/img 2.jpeg"
            alt="Maternal and Child Clinic"
            style={{
              width: "90%",
              height: "50%",
                          }}
          />
        </Box>
      </Grid2>

      {/* Right Side: Text Content */}
      <Grid2 item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            px: 4,
          }}
        >
          <Container maxWidth="sm" sx={{ textAlign: "center", zIndex: 1 }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "bold", mb: 2, color: "#8155a5" }}
            >
              MATERNAL AND CHILD CLINIC
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              sx={{ fontWeight: "bold", mb: 3, color: "#8155a5" }}
            >
              MANAGEMENT SYSTEM
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: "#474658", fontSize: "1.1rem" }}
            >
              Every pregnancy and birth is unique. Addressing inequalities that
              affect health outcomes, especially sexual and reproductive health
             
            </Typography>
            <Button
              variant="contained"
              sx={{
                mb: 2,
                width: "100%",
                backgroundColor: "white",
                color: "black",
                borderRadius: "25px",
              }}
            >
              Login as Midwife
            </Button>
            <Button
              variant="contained"
              sx={{
                mb: 4,
                width: "100%",
                backgroundColor: "white",
                color: "black",
                borderRadius: "25px",
              }}
            >
              Login as Mother
            </Button>
            <Typography variant="body2" sx={{ mb: 1, color: "#ffffff" }}>
              To view the National Maternal and Child Health Policy
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#5a8ddc",
                borderColor: "#5a8ddc",
                borderRadius: "20px",
              }}
            >
              Click 
            </Button>
          </Container>
          <Box sx={{ position: "absolute", bottom: 0, right: 0, p: 2, zIndex: 1 }}>
            <Typography variant="body2" sx={{ color: "#474658" }}>
              @MoHSL
            </Typography>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
        
        </Grid2>
        
      </Grid2>
    </Box>
    

        

      

     </Grid2>
    
     


   



          
     
      </Card>
    </Box>
  );
};

export default Home;
