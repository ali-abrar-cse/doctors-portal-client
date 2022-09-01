import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const schedule = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 - 9:00 AM",
    price: 20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05 - 11:30 AM",
    price: 15,
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Orthodontics",
    time: "8:00 - 9:00 AM",
    price: 25,
    space: 10,
  },
  {
    id: 4,
    name: "Teeth Cleaning",
    time: "5:00 - 6:30 PM",
    price: 17,
    space: 10,
  },
  {
    id: 5,
    name: "Cavity Protection",
    time: "8:00 - 9:00 PM",
    price: 23,
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Cleaning",
    time: "8:00 - 9:00 PM",
    price: 17,
    space: 10,
  },
];



const AvailableAppointment = ({ date }) => {
  const [confirmAppointment, setConfirmAppointment] = useState(false);
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Available appointment on {date.toDateString()}
      </Typography>
      {confirmAppointment && <Alert severity="success">Booked Successfully!</Alert>}
      <Grid container spacing={3}>
        {schedule.map((book) => (
          <Booking
            key={book.id}
            setConfirmAppointment={setConfirmAppointment}
            date={date}
            book={book}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
