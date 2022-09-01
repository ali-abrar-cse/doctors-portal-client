import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import treatment from "../../../images/treatment.png";

const ExceptionalCare = () => {
  return (
    <Container sx={{py: 8}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img width="100%" src={treatment} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: 'center' }}
          textAlign="left"
          md={8}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }} variant="h4">
              Exceptional Dental <br /> Care, on Your Terms
            </Typography>
            <Typography
              variant="h6"
              sx={{ py: 5, pr:10, color: "text.secondary" }}
              style={{ fontWeight: 300, fontSize: 18 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam magnam veniam quo velit maiores tenetur quisquam eos. Odit minus omnis autem aliquam debitis ab fugiat voluptas, alias non perferendis et commodi cumque, asperiores sit optio aspernatur. Earum impedit quisquam modi nam assumenda neque a aliquid! Maxime obcaecati sapiente delectus nemo ratione facilis praesentium nobis sed at, maiores soluta voluptatem tenetur vel perferendis modi laborum? Numquam cupiditate eum dolorem nesciunt, perspiciatis eius aut minima blanditiis quo, alias, ipsum magni commodi.
            </Typography>
            <Button sx={{ color: "info.main" }}>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExceptionalCare;
