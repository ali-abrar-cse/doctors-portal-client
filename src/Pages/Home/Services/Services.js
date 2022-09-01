import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";
import flouride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Flouride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae reprehenderit porro nobis veniam commodi optio, rerum consequatur ipsa maxime!",
    img: flouride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae reprehenderit porro nobis veniam commodi optio, rerum consequatur ipsa maxime!",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae reprehenderit porro nobis veniam commodi optio, rerum consequatur ipsa maxime!",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{color: "success.main", m: 2}} component="div">
            OUR SERVICES
        </Typography>
        <Typography variant="h4" sx={{m: 5, fontWeight: 'bold'}} component="div">
            Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
