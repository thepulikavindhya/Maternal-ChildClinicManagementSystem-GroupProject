import { Box, Button, Card, Container, Grid2, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();


  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 1, sm: 2, md: 4, lg: 6 },
      }}
    >
      <Card sx={{ maxWidth: { xs: 350, sm: 600, md: 800, lg: 1000 }, width: "90%", borderRadius: "16px", overflow: "hidden" }}>
      <Grid2 sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#f9f9f9',
      borderBottom: '1px solid #ddd',
      width: '100%',
      boxSizing: 'border-box', 
    }}>
 
      <Grid2 sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="src/images/img 4.png"  
          alt="Maternal and Child Health Logo"
          style={{
            height: '50px',
            marginRight: '10px',
            maxWidth: '60px', 
          }}
        />
        <Grid2 style={{ lineHeight: '1.2' }}>
          <Typography variant="h8" sx={{ margin: 0, fontSize: '1rem' }}>Maternal and Child Health</Typography>
          <Typography variant="h5" sx={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>Sri Lanka</Typography>
        </Grid2>
      </Grid2>

   
      <Grid2 sx ={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="src/images/img 3.png" 
          alt="Ministry of Health Logo"
          style={{
            height: '45px',
            width: '130px',
            marginLeft: '5px',
            maxWidth: '150px', 
          }}
        />

      </Grid2>
    </Grid2>

        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 1, sm: 2, md: 4 },
            backgroundImage: "url('src/images/img 1.jpeg')",
            backgroundSize: "cover",
          }}
        >
          <Grid2 container spacing={2} justifyContent="center" alignItems="center">
            <Grid2 item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="src/images/img 2.jpeg"
                alt="Maternal and Child Clinic"
                style={{ width: "80%", maxWidth: "300px", height: "auto" }}
              />
            </Grid2>

            <Grid2 item xs={12} md={6}>
              <Container
                maxWidth="sm"
                sx={{
                  textAlign: "center",
                  padding: { xs: 1, sm: 2, md: 3 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#8155a5",
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                  }}
                >
                  MATERNAL AND CHILD CLINIC
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "#8155a5",
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  }}
                >
                  MANAGEMENT SYSTEM
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: "#474658",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  }}
                >
                  Every pregnancy and birth is unique. Addressing inequalities that affect health outcomes,
                  especially sexual and reproductive health and rights and gender, is fundamental to ensuring
                  all women have access to respectful and high-quality maternity care.
                </Typography>
             
                  <Button
                    variant="contained"
                    startIcon={<PersonIcon />}
                    sx={{
                      mb: 2,
                      width: "90%",
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "25px",
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                    }}
                    onClick={() => navigate("/mother")}
                  >
                    Login as Mother
                  </Button>
                      <Button
                      variant="contained"
                      startIcon={<PersonIcon />}
                      sx={{
                        mb: 4,
                        width: "90%",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "25px",
                        fontSize: { xs: "0.8rem", sm: "1rem" },
                      }}
                      onClick={() => navigate("/midwife")} // Navigate to the login mother page
                    >
                      Login as Midwife
                    </Button>

                <Typography variant="body2" sx={{ mb: 1, color: "#474658", fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                  To view the National Maternal and Child Health Policy
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor: "#ACD6FC",
                    borderRadius: "20px",
                    backgroundColor: "#ACD6FC",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                  }}
                >
                  Click Here
                </Button>
              </Container>
            </Grid2>
          </Grid2>
        </Box>
      </Card>
    </Box>
  );
};

export default Home;