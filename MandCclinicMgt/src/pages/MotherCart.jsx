
import { Card, CardContent, CardActions, Button, Typography, Grid2, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HOME from "../Images/HOME.png"
import { useNavigate } from "react-router-dom";

const MotherCart = () => {
  const data = Array(8).fill({
    motherId: "12345",
   motherName: "name",
    dd: "01/01/2023",
    image: "https://via.placeholder.com/150",
  });

  const navigate = useNavigate();
 

  return (

    


    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ background: "#ff80aa", color: "white", textTransform: "none", borderRadius: "10px", marginLeft:'100px' }}
          onClick={() => navigate("/motherform")}
        >
          Add New Mother
        </Button>
        
      </div>
      <Grid2 container spacing={5} sx={{ backgroundImage: `url(${HOME})`, padding: "20px", borderRadius: "10px", backgroundSize:'cover',height:'100vh', width:'100%' }}>
      

        {data.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", background: "white" }}
            >
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" , flexDirection: 'column'}}>
                  <Avatar src={item.image} alt="Baby" sx={{ width: 60, height: 60, marginRight: "15px" }} />
                  <div>
                    <Typography variant="body2" color="text.secondary">Mother&apos;s ID: {item.motherId}</Typography>
                    <Typography variant="body1">Mother&apos;s Name: {item.motherName}</Typography>
                    <Typography variant="body2" color="text.secondary">Delivary Date: {item.dd}</Typography>
                  </div>
                </div>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  sx={{ color: "white", background: "#ff80aa", textTransform: "none", borderRadius: "15px" }}
                  onClick={() => navigate("/midmform")}
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

export default MotherCart;
