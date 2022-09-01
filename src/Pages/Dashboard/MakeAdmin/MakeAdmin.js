import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const {idToken} = useAuth();

  const handleOnBlur = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://aqueous-plateau-48297.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "authorization": `Bearer ${idToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          onBlur={handleOnBlur}
          type="email"
          label="Email"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made admin successfully.</Alert>}
    </div>
  );
};

export default MakeAdmin;
