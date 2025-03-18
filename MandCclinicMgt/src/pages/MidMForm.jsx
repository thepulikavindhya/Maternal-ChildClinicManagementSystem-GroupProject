import{ useState } from "react";
import {Box, Typography, Avatar, Button, Card, CardContent, Stack,TextField} from "@mui/material";
import HOME from "../Images/HOME.png"; 
import { useNavigate } from "react-router-dom";

const BForm = () => {

  const navigate = useNavigate();
    const [editable, setEditable] = useState(false);
      const [formData, setFormData] = useState({
        MotherId: "M-12345",
        BabyName: "Baby John",
        DateOfBirth: "01/01/2023",
        BirthCertNo: "BC-67890",
        RegisteredDate: "05/01/2023",
        Sex: "Male",
        BirthWeight: "3.2 kg",
        BirthHeight: "50 cm",
        MotherName: "Asheni",
        MotherDateOfBirth: "12/12/1990",
        Address: "123 Street, City",
        NextClinicDate: "",
        LastClinicDate: "02/02/2025",
      });
    // Handle Update Button Click
  const handleUpdate = () => {
    setEditable(!editable);
    
  };

  // Handle Input Change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
   <Box
         sx={{
           minHeight: "100vh",
           width: "100%",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           backgroundImage: `url(${HOME})`,
           padding: 2,
           backgroundSize: "cover",
         }}
       >
         <Card sx={{ maxWidth: 600, width: "100%", borderRadius: 4, boxShadow: 3, textAlign: "left", padding: 2 }}>
           <Avatar
             src="https://via.placeholder.com/100"
             alt="Baby"
             sx={{ width: 80, height: 80, margin: "0 auto -40px", zIndex: 1, border: "4px solid white" }}
           />
           <CardContent>
             <Stack spacing={2} mt={4}>
               {Object.entries(formData).map(([key, value]) => (
                 <Typography key={key} variant="body2">
                   {key.replace(/([A-Z])/g, " $1")}:{" "}
                   {editable ? (
                     <TextField name={key} value={value} onChange={handleChange} size="small" sx={{ width: "70%" }} />
                   ) : (
                     value
                   )}
                 </Typography>
               ))}
             </Stack>
             <br />
             <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
               <Button
                 variant="contained"
                 sx={{ borderRadius: 3, textTransform: "none", bgcolor: "#FFC0E5", color: "#000000", width: "200px" }}
                 onClick={handleUpdate} 
               >
                 {editable ? "Save" : "Update"}
               </Button>
               <Button onClick={() => navigate("/mothercart")} variant="contained" color="error" sx={{ borderRadius: 3, textTransform: "none", bgcolor: "#FFC0E5", color: "#000000", width: "200px" }}>
                 Back
               </Button>

             </Stack>
           </CardContent>
         </Card>
       </Box>
  );
};

export default BForm;
