import React from "react";
import { TextField, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid2 } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { pink } from "@mui/material/colors";
import HOME from "../Images/HOME.png"; 

const VaccinationForm = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper sx={{ p: 4, backgroundImage: `url(${HOME})`, backgroundSize:'cover', borderRadius: 3, minHeight:'100vh' }}>
        <Grid container spacing={2} >
          <Grid2 item xs={12} sm={4} sx={{mt:5, ml:2, width:400, height:10}}>
            <TextField label="Age" fullWidth variant="outlined" size="small" />
          </Grid2>
          
          <Grid2 item xs={12} sm={4} sx={{mt:5, ml:10, width:400, height:10}}>
            <TextField label="B.C.G Scar" fullWidth variant="outlined" size="small" />
          </Grid2>

          <Grid2 item xs={12} sm={4} sx={{mt:5, ml:60, }}>
            <DatePicker label="Date"  renderInput={(params) => <TextField {...params} fullWidth size="small" />} />
          </Grid2>
          
          <Grid2 item xs={12} sx={{mt:2, ml:2, width:1700, height:10}}>
            <TextField label="Type of Vaccine" fullWidth variant="outlined" size="small" />
          </Grid2>

          <Grid2 item xs={6} sx={{mt:6, ml:2, width:1700, height:10}}>
            <TextField label="Batch No." fullWidth variant="outlined" size="small" />
          </Grid2>
          <Grid2 item xs={6} sx={{mt:6, ml:2, width:1700, height:10}}>
            <TextField label="Adverse Effects Following Immunization" fullWidth variant="outlined" size="small" />
          </Grid2>
          
          <Grid2 item xs={12} sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 6, ml:160 }}>
            <Button variant="contained" sx={{backgroundColor:pink[500],textTransform: "none", width:200  }}>Save</Button>
            <Button variant="outlined" sx={{backgroundColor:pink[300], textTransform: "none" , color: 'white', border: 'none', width:200}}>Cancel</Button>
          </Grid2>

          <Grid2 item xs={12} sx={{  width:'100%', ml:10 }}>
            <TableContainer component={Paper} sx={{ mt: 4, width:'90%' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>At Birth</TableCell>
                    <TableCell>B.C.G</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Batch No.</TableCell>
                    <TableCell>Adverse Effects</TableCell>
                    <TableCell>B.C.G Scar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { age: "At Birth", vaccine: "B.C.G", date: "07/03/07", batch: "EU 20610", effect: "-", scar: "Present" },
                    { age: "2 months Completed", vaccine: "DPT 1", date: "07/03/07", batch: "EU 20610", effect: "-", scar: "-" },
                    { age: "4 months Completed", vaccine: "DPT 1", date: "07/03/07", batch: "EU 20610", effect: "-", scar: "-" },
                    { age: "6 months Completed", vaccine: "DPT 1", date: "07/03/07", batch: "EU 20610", effect: "-", scar: "-" },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.vaccine}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.batch}</TableCell>
                      <TableCell>{row.effect}</TableCell>
                      <TableCell>{row.scar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>

          
        </Grid>
      </Paper>
    </LocalizationProvider>
  );
}

export default VaccinationForm;
