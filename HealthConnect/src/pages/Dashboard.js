import React from "react";
import { Container, Grid } from "@mui/material";
import AlertCard from "../components/AlertCard";
import VitalChart from "../components/VitalChart";
import ReportCard from "../components/ReportCard";

const Dashboard = () => {
  const alerts = ["High BP detected", "Low Oxygen Level"];
  const heartRateData = [{ time: "10 AM", value: 80 }, { time: "11 AM", value: 85 }];
  const reports = [{ testName: "Blood Test", date: "01-Feb-2025", result: "Normal", downloadLink: "#" }];

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}><AlertCard alerts={alerts} /></Grid>
        <Grid item xs={12} md={6}><VitalChart title="Heart Rate (BPM)" data={heartRateData} /></Grid>
        <Grid item xs={12} md={6}><ReportCard report={reports[0]} /></Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
