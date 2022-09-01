import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ book, date, setConfirmAppointment }) => {
  const { name, time, space, price } = book;
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "info.main", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography variant="h6" sx={{ py: 1 }}>
            {time}
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 900, fontSize: 14 }}>
            Price ${price}
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 300, fontSize: 14 }}>
            Available spaces {space}
          </Typography>
          <Button onClick={handleOpenModal} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal openModal={openModal} price={price} date={date} name={name} time={time} handleCloseModal={handleCloseModal} setConfirmAppointment={setConfirmAppointment}></BookingModal>
    </>
  );
};

export default Booking;
