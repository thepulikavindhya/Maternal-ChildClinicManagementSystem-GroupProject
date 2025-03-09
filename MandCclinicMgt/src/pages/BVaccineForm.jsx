import  { useRef, useState } from "react";
import { TextField, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { pink } from "@mui/material/colors";

import HOME from "../Images/HOME.png"; 

const BVaccineForm = () => {
  const formRef = useRef();

  // **State for input fields**
  const [formData, setFormData] = useState({
    age: "",
    date: null,
    bcgScar: "",
    vaccineType: "",
    batchNo: "",
    adverseEffects: "",
  });

  // **State for table data**
  const [tableData, setTableData] = useState([]);

  // **Handle input change**
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // **Handle date change**
  const handleDateChange = (newDate) => {
    setFormData((prev) => ({ ...prev, date: newDate }));
  };

  // **Handle Save button**
  const handleSave = () => {
    if (!formData.age || !formData.vaccineType || !formData.date) {
      alert("Please fill in all required fields!");
      return;
    }

    setTableData([...tableData, formData]); // Add form data to table
    setFormData({ age: "", date: null, bcgScar: "", vaccineType: "", batchNo: "", adverseEffects: "" }); // Clear form
  };

  const handleCancel = () => {
    setFormData({
      age: "",
      date: null,
      bcgScar: "",
      vaccineType: "",
      batchNo: "",
      adverseEffects: "",
    });
  };
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper ref={formRef} sx={{ p: 4, backgroundImage: `url(${HOME})`, backgroundSize: 'cover', borderRadius: 3, minHeight: '100vh' }}>
        <Grid2 container spacing={2}>
          {/* Input Fields */}
          <Grid2 item xs={12} sm={4}>
            <TextField label="Age" name="age" value={formData.age} onChange={handleChange} fullWidth variant="outlined" size="small" />
          </Grid2>

          <Grid2 item xs={12} sm={4}>
            <TextField label="B.C.G Scar" name="bcgScar" value={formData.bcgScar} onChange={handleChange} fullWidth variant="outlined" size="small" />
          </Grid2>

          <Grid2 item xs={12} sm={4}>
            <DatePicker label="Date" value={formData.date} onChange={handleDateChange} renderInput={(params) => <TextField {...params} fullWidth size="small" />} />
          </Grid2>

          <Grid2 item xs={12}>
            <TextField label="Type of Vaccine" name="vaccineType" value={formData.vaccineType} onChange={handleChange} fullWidth variant="outlined" size="small" />
          </Grid2>

          <Grid2 item xs={6}>
            <TextField label="Batch No." name="batchNo" value={formData.batchNo} onChange={handleChange} fullWidth variant="outlined" size="small" />
          </Grid2>

          <Grid2 item xs={6}>
            <TextField label="Adverse Effects Following Immunization" name="adverseEffects" value={formData.adverseEffects} onChange={handleChange} fullWidth variant="outlined" size="small" />
          </Grid2>

          {/* Buttons */}
          <Grid2 item xs={12} sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: pink[500], textTransform: "none", width: 200 }} onClick={handleSave}>Save</Button>
            <Button variant="outlined" sx={{ backgroundColor: pink[400], textTransform: "none", color: 'white', border: 'none', width: 200 }} onClick={handleCancel}>Cancel</Button>
          </Grid2>

          {/* Vaccination Table */}
          <Grid2 item xs={12}>
            <TableContainer component={Paper} sx={{ mt: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Age</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>B.C.G Scar</TableCell>
                    <TableCell>Type of Vaccine</TableCell>
                    <TableCell>Batch No.</TableCell>
                    <TableCell>Adverse Effects</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.date ? row.date.format("DD/MM/YYYY") : "-"}</TableCell>
                      <TableCell>{row.bcgScar}</TableCell>
                      <TableCell>{row.vaccineType}</TableCell>
                      <TableCell>{row.batchNo}</TableCell>
                      <TableCell>{row.adverseEffects}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>
        </Grid2>
      </Paper>
    </LocalizationProvider>
  );
};

export default BVaccineForm;
