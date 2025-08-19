import React from "react";
import UrlForm from "../components/UrlForm";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm">
  <Typography variant="h3" align="center" sx={{ mt: 5, mb: 4 }}>
    My URL Shortener
  </Typography>
  <UrlForm />
</Container>
  );
}
