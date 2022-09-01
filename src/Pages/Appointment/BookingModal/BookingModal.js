import React, { useEffect, useRef, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openModal,
  handleCloseModal,
  name,
  time,
  date,
  price,
  setConfirmAppointment,
}) => {
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookInfo, setBookInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookInfo(newInfo);
  };

  const handleSubmit = (e) => {
    const appointment = {
      ...bookInfo,
      serviceTime: time,
      serviceDate: date.toLocaleDateString(),
      serviceName: name,
      price: price,
    };
    fetch("https://aqueous-plateau-48297.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          handleCloseModal();
          setConfirmAppointment(true);
        }
      });
    // useEffect()
    e.preventDefault();
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form action="">
              <TextField
                disabled
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                sx={{ width: "95%", m: 1 }}
              />
              <TextField
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue={user.displayName}
                size="small"
                name="name"
                sx={{ width: "95%", m: 1 }}
              />
              <TextField
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue={user.email}
                size="small"
                name="email"
                sx={{ width: "95%", m: 1 }}
              />
              <TextField
                onBlur={handleOnBlur}
                id="outlined-size-small"
                defaultValue="Phone Number"
                size="small"
                name="phone"
                sx={{ width: "95%", m: 1 }}
              />
              <TextField
                disabled
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                sx={{ width: "95%", m: 1 }}
              />
              <Button onClick={handleSubmit} variant="contained">
                Submit
              </Button>
            </form>
            <Button sx={{ color: "error.light" }} onClick={handleCloseModal}>
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default BookingModal;
