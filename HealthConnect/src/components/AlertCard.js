import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const AlertCard = ({ alerts }) => {
  return (
    <Card sx={{ bgcolor: "#ffeb3b", color: "#d32f2f", mb: 2 }}>
      <CardContent>
        <Typography variant="h6">⚠️ Patient Alerts</Typography>
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <Typography key={index} variant="body1">• {alert}</Typography>
          ))
        ) : (
          <Typography variant="body2">No critical alerts</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default AlertCard;
