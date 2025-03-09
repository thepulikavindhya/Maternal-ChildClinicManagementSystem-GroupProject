
import {Box, Typography, Avatar, Button, Card, CardContent, Stack,} from "@mui/material";
import HOME from "../Images/HOME.png"; 

const BForm = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:`url(${HOME})`,
        padding: 2,
        backgroundSize:'cover',
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 4,
          boxShadow: 3,
          textAlign: "left",
          padding: 2,
        }}
      >
        <Avatar
          src="https://via.placeholder.com/100"
          alt="Baby"
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto -40px",
            zIndex: 1,
            border: "4px solid white",
          }}
        />
        <CardContent>
          <Stack spacing={2} mt={4}>
            <Typography variant="body2">Mother&apos;s ID:</Typography>
            <Typography variant="body2">Baby&apos;s Name:</Typography>
            <Typography variant="body2">Date of Birth:</Typography>
            <Typography variant="body2">Birth Certificate No:</Typography>
            <Typography variant="body2">Date of Registered:</Typography>
            <Typography variant="body2">Sex:</Typography>
            <Typography variant="body2">Birth Weight:</Typography>
            <Typography variant="body2">Birth Height:</Typography>
            <Typography variant="body2">Mother&apos;s Name:</Typography>
            <Typography variant="body2">Mother&apos;s Birthdate:</Typography>
            <Typography variant="body2">Address:</Typography>
            <Typography variant="body2">Next Clinic Date:</Typography>
            <Typography variant="body2">Last Clinic Date:</Typography>
          </Stack><br/>
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <Button
              variant="contained"
              sx={{ borderRadius: 3, textTransform: "none", bgcolor:"#FFC0E5", color:"#000000",width:'200px' }}
            >
              view more
            </Button>
           
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BForm;
