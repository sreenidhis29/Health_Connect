import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Button, Container, Typography } from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Invoice = () => {
  const [patientData, setPatientData] = useState(null);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const patientSnapshot = await getDocs(collection(db, "patients"));
      const reportSnapshot = await getDocs(collection(db, "reports"));

      if (!patientSnapshot.empty) setPatientData(patientSnapshot.docs[0].data());
      if (!reportSnapshot.empty) setReports(reportSnapshot.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Health Connect - Patient Invoice", 10, 10);
    doc.text(`Patient Name: ${patientData?.name || "N/A"}`, 10, 20);
    doc.text(`Age: ${patientData?.age || "N/A"}`, 10, 30);

    const reportData = reports.map(report => [report.testName, report.date, report.result]);
    doc.autoTable({ head: [["Test", "Date", "Result"]], body: reportData, startY: 40 });

    doc.save("Invoice.pdf");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Invoice</Typography>
      {patientData ? (
        <>
          <Typography>Name: {patientData.name}</Typography>
          <Typography>Age: {patientData.age}</Typography>
          <Button variant="contained" color="primary" onClick={generatePDF}>Download Invoice</Button>
        </>
      ) : <Typography>Loading...</Typography>}
    </Container>
  );
};

export default Invoice;
