import React from "react";
import { Container, Box, CssBaseline, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // todo
        minHeight: "80vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#26c6da",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            <Copyright />
            My sticky footer can be found here.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
