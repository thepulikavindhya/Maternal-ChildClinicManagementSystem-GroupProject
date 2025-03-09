
import {Box, TextField,   Avatar, Card, CardContent,  useMediaQuery, Grid2,} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import HOME from "../Images/HOME.png"; 

const MotherBViewForm = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${HOME})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 2,
        }}
      >
        <Card sx={{ width: isMobile ? "100%" : 1200, borderRadius: 4, boxShadow: 3, mt:8  }}>
          <CardContent>
            <Avatar
              src="https://via.placeholder.com/100"
              alt="Baby"
              sx={{
                width: 80,
                height: 80,
                position: "absolute",
                top: 40,
                left: 200,
                border: "4px solid white",
              }}
            />
            <Box mt={6}>
              <Grid2 container spacing={4}>
                <Grid2 item xs={12} sm={4} sx={{width:400}}>
                  <TextField fullWidth label="S.W.N.K" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sm={4} sx={{width:400}}>
                  <TextField fullWidth label="P.S.S.N.K" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sm={4} sx={{width:300}}>
                  <TextField fullWidth label="zzz" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sm={9} sx={{width:800}}>
                  <TextField fullWidth label="Name of Baby" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sm={3} sx={{width:300}}>
                  <TextField fullWidth label="Sex" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sm={6} sx={{width:300}}>
                  <DatePicker label="Date of Birth" renderInput={(params) => <TextField {...params} fullWidth size="small" />} />
                </Grid2>
                <Grid2 item xs={12} sm={6} sx={{width:550}}>
                  <DatePicker label="Registered Date" renderInput={(params) => <TextField {...params} fullWidth size="small" />} />
                </Grid2>
                <Grid2 item xs={12} sm={9} sx={{width:700}}>
                  <TextField fullWidth label="Name of Mother" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sm={3} sx={{width:400}}>
                  <TextField fullWidth label="Age of Mother" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sx={{width:800}}>
                  <TextField fullWidth label="Address" variant="outlined" size="small" />
                </Grid2>
                <Grid2 item xs={12} sx={{width:800}}>
                  <TextField fullWidth label="NIC" variant="outlined" size="small" />
                </Grid2>

                <Grid2 item xs={12}>
                  <Box sx={{ backgroundColor: "#f5f5f5", padding: 4, borderRadius: 2 }}>
                    <Grid2 container spacing={4}>
                      <Grid2 item xs={12} sm={4} sx={{width:300}}>
                        <TextField fullWidth label="Birth Weight" variant="outlined" size="small" />
                      </Grid2>
                      <Grid2 item xs={12} sm={4} sx={{width:300}}>
                        <TextField fullWidth label="Birth Head" variant="outlined" size="small" />
                      </Grid2>
                      <Grid2 item xs={12} sm={4} sx={{width:300}}>
                        <TextField fullWidth label="Birth Height" variant="outlined" size="small" />
                      </Grid2>
                      <Grid2 item xs={12} sm={6} sx={{width:800}}>
                        <TextField fullWidth label="Health Condition of New Born Baby" variant="outlined" size="small" />
                      </Grid2>
                      <Grid2 item xs={12} sm={3} sx={{width:300}}>
                        <TextField fullWidth label="Vitamin K" variant="outlined" size="small" />
                      </Grid2>
                      <Grid2 item xs={12} sm={3} sx={{width:300}}>
                        <TextField fullWidth label="Feeding" variant="outlined" size="small" />
                      </Grid2>
                    </Grid2>
                  </Box>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <DatePicker label="Last Clinic Date" renderInput={(params) => <TextField {...params} fullWidth size="small" />} />
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <DatePicker label="Next Clinic Date" renderInput={(params) => <TextField {...params} fullWidth size="small" />} />
                </Grid2>
                
              </Grid2>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default MotherBViewForm;
