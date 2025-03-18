
import { Card, CardContent, Typography, TextField, Button, Grid2, } from "@mui/material";
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.jpeg';
import { useNavigate } from "react-router-dom";


const Mother = () =>{

  const navigate = useNavigate();
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #fdfbfb, #ebedee)",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
    width: "100%",
    height: "100vh",
  };

  const leftPanelStyle = {
    flex: 1,
    backgroundImage: `url(${img7})`, 
    backgroundSize: "cover",
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
  };

  const rightPanelStyle = {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `url(${img8})` ,
    backgroundSize: "cover"
  };

  const inputStyle = {
        marginBottom: "16px",
        height: "50px",
        width:"300px",
        
  };

  const buttonStyle = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px",
    textTransform: "none",
    height: "50px",
    width:"300px"
  };

  const textStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    background: "linear-gradient(to right, #4a90e2, #f39cfc)", // Adjust colors as needed
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
 const h1style = {
    backgroundColors: "black",
    textAlign: "center",
    colors : "black",
    

 };

 const boxstyle = {
    height: "70vh",
    width:"80%",
    backgroundColor: "white",
   alignItems: "center",
   borderRadius: "10%",
   padding: '115px',
   margin: '80px'

 }


  return (
    <Grid2 style={containerStyle}>
      <Card style={cardStyle}>
        {/* Left Panel */}
        <Grid2 style={leftPanelStyle}></Grid2>

        {/* Right Panel */}
        <CardContent style={rightPanelStyle}>
            <Grid2 style = {boxstyle}>
                    <Typography style={textStyle} variant="h5" component="h1" gutterBottom>
                        Welcome Back!
                    </Typography>
                    <Typography variant="h7" gutterBottom style={h1style}>
                        Please enter your NIC and password to log in to the system
                    </Typography>
                <form>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Username"
                        style={inputStyle}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Password"
                        type="password"
                        style={inputStyle}
                    />
                    <Button onClick={() => navigate('/mselection')} fullWidth style={buttonStyle}>
                        Login
                    </Button>
                </form>

                <Typography>
                    Already You have a Account
                </Typography>

                <Button>
                        Sign In
                    </Button>
                
          </Grid2>
        </CardContent>
      </Card>
    </Grid2>
  );
}

export default Mother