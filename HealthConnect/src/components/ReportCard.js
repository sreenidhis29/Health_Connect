import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ReportCard = ({ report }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{report.testName}</Typography>
        <Typography variant="body2">Date: {report.date}</Typography>
        <Typography variant="body2">Result: {report.result}</Typography>
        <Button variant="outlined" color="primary" sx={{ mt: 1 }} href={report.downloadLink} target="_blank">
          Download Report
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReportCard;
