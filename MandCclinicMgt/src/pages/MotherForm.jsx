
import {
  Box,
  TextField,
  Paper,
  Avatar,
  IconButton,
  InputAdornment,
  Grid2,
  Button,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const MotherForm = () => {


  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)", // Background gradient
        padding: 3,
      }}
    >
      <Paper elevation={3} sx={{ width: "90%", padding: 3, borderRadius: 3 }}>
        {/* Profile Image */}
        <Avatar
          src="src/images/profile.png"
          sx={{ width: 50, height: 50, position: "absolute", top: 20, left: 20 }}
        />

        {/* Parent Grid */}
        <Grid2 container spacing={2}>
          {/* First Row */}
          <Grid2 item xs={12} sm={4}>
            <TextField fullWidth label="S.W.N.K" variant="outlined" />
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <TextField fullWidth label="P.S.S.N.K" variant="outlined" />
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <TextField fullWidth label="Other" variant="outlined" />
          </Grid2>

          {/* Second Row */}
          <Grid2 item xs={12} sm={8}>
            <TextField fullWidth label="Name of Mother" variant="outlined" />
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <TextField fullWidth label="Sex" variant="outlined" />
          </Grid2>

          {/* Third Row */}
          <Grid2 item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Date of Birth"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Registered Date"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid2>

          {/* Fourth Row */}
          <Grid2 item xs={12} sm={4}>
            <TextField fullWidth label="Blood Group" variant="outlined" />
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <TextField fullWidth label="Phone No." variant="outlined" />
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <TextField fullWidth label="Age of Mother" variant="outlined" />
          </Grid2>

          {/* Fifth Row */}
          <Grid2 item xs={12}>
            <TextField fullWidth label="Address" variant="outlined" />
          </Grid2>

          {/* Sixth Row */}
          <Grid2 item xs={12}>
            <TextField fullWidth label="NIC" variant="outlined" />
          </Grid2>

          {/* Baby Information Section */}
          <Grid2 item xs={12}>
            <Paper sx={{ padding: 2, background: "#f5f5f5" }}>
              <Grid2 container spacing={2}>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Birth Weight" variant="outlined" />
                </Grid2>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Birth Head" variant="outlined" />
                </Grid2>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Birth Height" variant="outlined" />
                </Grid2>

                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label="Health Condition of New Born Baby"
                    variant="outlined"
                  />
                </Grid2>

                <Grid2 item xs={4}>
                  <TextField fullWidth label="Vitamin K" variant="outlined" />
                </Grid2>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Feeding" variant="outlined" />
                </Grid2>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Feeding" variant="outlined" />
                </Grid2>
              </Grid2>
            </Paper>
          </Grid2>

          {/* Second Baby Information Section */}
          <Grid2 item xs={12}>
            <Paper sx={{ padding: 2, background: "#f5f5f5" }}>
              <Grid2 container spacing={2}>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Birth Weight" variant="outlined" />
                </Grid2>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Birth Head" variant="outlined" />
                </Grid2>
                <Grid2 item xs={4}>
                  <TextField fullWidth label="Birth Height" variant="outlined" />
                </Grid2>

                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label="Health Condition of New Born Baby"
                    variant="outlined"
                  />
                </Grid2>

                <Grid2 item xs={4}>
                  <TextField fullWidth label="Vitamin K" variant="outlined" />
                </Grid2>
                <Grid2 item xs={12} display="flex" justifyContent="flex-end" spacing={2} sx={{ml:100, height:40 }}>
                                  <Button onClick={() => alert("Saved successfully")} variant="contained" sx={{ width:200,backgroundColor: pink[500], marginRight: 1, textTransform: "none", }}>Save</Button>
                                  <Button onClick={() => navigate("/mothercart")} variant="contained" sx={{ width:200, backgroundColor: pink[300], textTransform: "none" }}>Back</Button>
                                </Grid2>
              </Grid2>
            </Paper>
          </Grid2>
        </Grid2>
      </Paper>
    </Box>
  );
};

export default MotherForm;
