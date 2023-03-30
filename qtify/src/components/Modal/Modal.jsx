import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import Btn from "../Button/Button";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "white",
  border: "1px solid #000",
  borderRadius: "20px",
  //   boxShadow: 24,
  p: 4,
};

function ModalComponent({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <h3 style={{ textAlign: "center" }}>Feedback</h3>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              //   color="var(--color-primary)"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Subject" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
            <Button variant="contained" color="success" onClick={handleClose}>
              Submit Feedback
            </Button>
            {/* <Btn ButtonText={"Submit Feedback"} handleChange={handleClose} /> */}
          </Box>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComponent;
