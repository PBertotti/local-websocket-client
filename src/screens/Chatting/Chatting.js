// -----------------------------
// File: index.js
// Author: Paulo Bruno B. Corá (Intelbras)
// Date: 18/09/2021
// Brief: iFleet 2 Testing tool event monitoring screen
// -----------------------------

// -----------------------------
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import InfoIcon from "@material-ui/icons/Info";
import MessageIcon from "@material-ui/icons/Message";
import io from "socket.io-client";
import { handleEventReceivement } from "../../redux/actions/events";

// -----------------------------

// -----------------------------
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#FFFFFF",
  },
  logoIcon: {
    color: theme.palette.primary.main,
    fontSize: "28px",
  },
  logoText: {
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 700,
    marginLeft: "15px",
  },
  addressForm: {
    marginTop: "30px",
    marginLeft: "30px",
    width: "400px",
  },
  textInfo: {
    marginTop: "100px",
    color: theme.palette.text.main,
    fontWeight: 700,
    display: "flex",
    marginLeft: "30px",
  },
  subMethodBox: {
    marginLeft: "32px",
    marginBottom: "20px",
    fontSize: "15px",
  },
  subMethodText: {
    marginLeft: "32px",
    marginTop: "20px",
    marginBottom: "10px",
    fontWeight: 100,
    color: theme.palette.text.secondary,
  },
  messageInfo: {
    marginTop: "20px",
    color: theme.palette.text.main,
    fontWeight: 700,
    display: "flex",
    marginLeft: "30px",
    marginBottom: "10px",
  },
  submitButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: "15px",
    display: "block",
    marginBottom: "40px",
    marginLeft: "30px",
    marginTop: "20px",
  },
}));
// -----------------------------

// -----------------------------
const Chatting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const eventState = useSelector((state) => state.events);
  const [topicState, setTopicState] = useState("message");

  const handleSubscription = () => {
    const socket = io(`http://${addrState}`);

    socket.on(topicState, (message) => {
      dispatch(handleEventReceivement(message));
    });
  };

  return (
    <div>
      <AppBar
        position="absolute"
        elevation={3}
        className={classes.appBar}
        variant="outlined"
      >
        <Toolbar>
          <ForumIcon className={classes.logoIcon} />
          <Typography className={classes.logoText}>
            Web-Socket Client
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.textInfo}>
        <InfoIcon />
        <Typography style={{ paddingLeft: "10px" }}>Connection info</Typography>
      </div>
      <TextField
        label="Server IP Address"
        onChange={(event) => setAddrState(event.target.value)}
        variant="outlined"
        className={classes.addressForm}
        helperText={"Ex: 192.168.10.1:3000"}
      />
      <TextField
        label="Subscribing topic"
        onChange={(event) => setTopicState(event.target.value)}
        variant="outlined"
        className={classes.addressForm}
        helperText={"'message' by default"}
      />
      <Button className={classes.submitButton} onClick={handleSubscription}>
        CONNECT
      </Button>
      <Divider />
      <div className={classes.messageInfo}>
        <MessageIcon />
        <Typography style={{ paddingLeft: "10px" }}>Events</Typography>
      </div>
      <div>
        {eventState.map((event, index) => (
          <Typography key={index} style={{ marginLeft: "30px" }}>
            {event}
          </Typography>
        ))}
      </div>
    </div>
  );
};
// -----------------------------

// -----------------------------
export default Chatting;
// -----------------------------
