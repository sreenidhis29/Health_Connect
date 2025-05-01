import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "reports"), (snapshot) => {
      setReports(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Patient Reports</Typography>
      <Grid container spacing={3}>
        {reports.map((report) => (
          <Grid item xs={12} sm={6} key={report.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{report.testName}</Typography>
                <Typography>Date: {report.date}</Typography>
                <Typography>Result: {report.result}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reports;
