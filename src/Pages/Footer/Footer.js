import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import React from "react";
import bg from "../../images/footer-bg.png";

const Footer = () => {
  
  const footerBg = {
    background: `url(${bg})`,
    marginTop: "150px",
    height: '80%'
  };
  return (
    <div style={footerBg}>
      <Container sx={{ p: 2, pt: 8 }}>
        <Grid container spacing={2} textAlign="left">
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ color: "info.main", py: 2 }}>
              <br />
            </Typography>
            <Box sx={{ color:  "text.secondary", lineHeight: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Emergency Dental Care
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Treatment of Personal Deseases
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Tooth Extraction
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "info.main", py: 2, lineHeight: 2 }}>
              Services
            </Typography>
            <Box sx={{ color:  "text.secondary", lineHeight: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Emergency Dental Care
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Treatment of Personal Deseases
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Tooth Extraction
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Tooth Extraction
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "info.main", py: 2 }}>
              Oral Health
            </Typography>
            <Box sx={{ color:  "text.secondary", lineHeight: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Emergency Dental Care
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Treatment of Personal Deseases
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Tooth Extraction
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                Check Up
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "info.main", py: 2 }}>
              Our Address
            </Typography>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                New York-101010 Hudson Yard
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color:  "text.secondary", lineHeight: 2 }}
              >
                <Box sx={{py: 3}}>
                <FacebookSharpIcon sx={{pr:3}}></FacebookSharpIcon>
                <GoogleIcon sx={{pr:3}}></GoogleIcon>
                <TwitterIcon></TwitterIcon>
                </Box>
                Call Now
              </Typography>
              <Button variant="contained">+2201245236</Button>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h6" sx={{color:  "text.secondary", lineHeight: 2, fontSize: 14, mt: 4}}>
            Copyright 2021 &copy; All Rights Reserved
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
