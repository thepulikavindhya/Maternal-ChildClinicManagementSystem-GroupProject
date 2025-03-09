import  { useRef } from "react";
import {  Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { pink } from "@mui/material/colors";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
 

const Mreport = () => {
  const formRef = useRef(); // Reference for capturing form

  // Function to download the form as PDF
  const handleDownload = () => {
    const input = formRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Vaccination_Form.pdf");
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper ref={formRef} sx={{ p: 4, backgroundImage:"src/images/Home.png", backgroundSize:'cover', borderRadius: 3, minHeight:'100vh' }}>
        <Grid2 container spacing={2} >
        

          {/* Buttons Section */}
          <Grid2 item xs={12} sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4, ml:100 }}>
            <Button variant="contained" sx={{ backgroundColor: pink[700], textTransform: "none", width: 200 }} onClick={handleDownload}>
              Download Form
            </Button>
          </Grid2>

          {/* Vaccination Table */}
          <Grid2 item xs={12} sx={{ width: '100%', ml:10 }}>
            
            <TableContainer component={Paper} sx={{ mt: 4, width: '90%' }}>
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
        </Grid2>
      </Paper>
    </LocalizationProvider>
  );
}

export default Mreport;