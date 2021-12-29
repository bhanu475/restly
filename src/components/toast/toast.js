import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import HelpIcon from "@mui/icons-material/Help";
import { toast } from "react-toastify";
//import { css } from 'glamor';

const Message = ({ msg, icon }) => (
  <>
    <Grid container direction="row">
      {/* <Grid item>{icon}</Grid> */}
      {/* &nbsp;&nbsp;&nbsp; */}
      <Grid item>
        <Typography variant="body">{msg}</Typography>
      </Grid>
    </Grid>
  </>
);

export const clearNotifications = () => {
  toast.clearWaitingQueue();
  toast.dismiss();
};

const getToastOptions = (time = 4000) => ({
  position: toast.POSITION.TOP_RIGHT,
  autoClose: time,
  className: "rotateY animated",
  onOpen: toast.clearWaitingQueue(),
});

const ToastConfig = {
  default(msg) {
    return toast(<Message msg={msg} />);
  },
  success(msg, time) {
    return toast.success(
      <Message msg={msg} icon={<CheckIcon />} />,
      getToastOptions(time)
    );
  },
  info(msg) {
    return toast.info(
      <Message msg={msg} icon={<InfoIcon />} />,
      getToastOptions()
    );
  },
  warn(msg) {
    return toast.warn(
      <Message msg={msg} icon={<HelpIcon />} />,
      getToastOptions()
    );
  },
  error(msg) {
    return toast.error(
      <Message msg={msg} icon={<WarningIcon />} />,
      getToastOptions()
    );
  },
};

export default ToastConfig;
