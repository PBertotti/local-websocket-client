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
  IconButton,
  Divider,
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import InfoIcon from "@material-ui/icons/Info";
import SendIcon from "@material-ui/icons/Send";
import MessageIcon from "@material-ui/icons/Message";
import io from "socket.io-client";
import { handleEventReceivement } from "../../redux/actions/events";

// -----------------------------

// -----------------------------
const useStyles = makeStyles(theme => ({
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
  messageBox: {
    height: "400px",
    marginBottom: "50px",
  },
  messageButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: "15px",

    marginLeft: "30px",
    marginTop: "25px",
  },
}));
// -----------------------------

// -----------------------------
const Chatting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const eventState = useSelector(state => state.events);
  const [topicState, setTopicState] = useState("message");
  const [authState, setAuthState] = useState("");

  const handleSubscription = () => {
    const socket = io(`http://${addrState}`, {
      query: { access_token: authState },
    });

    socket.on(topicState, message => {
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
        onChange={event => setAddrState(event.target.value)}
        variant="outlined"
        className={classes.addressForm}
        helperText={"Ex: 192.168.10.1:3000"}
      />
      <TextField
        label="Subscribing topic"
        onChange={event => setTopicState(event.target.value)}
        variant="outlined"
        className={classes.addressForm}
        helperText={"'message' by default"}
      />
      <TextField
        label="Authorization token"
        onChange={event => setAuthState(event.target.value)}
        variant="outlined"
        className={classes.addressForm}
      />
      <Button className={classes.submitButton} onClick={handleSubscription}>
        CONNECT
      </Button>
      <Divider />

      <div className={classes.messageInfo}>
        <MessageIcon />
        <Typography style={{ paddingLeft: "10px" }}>Events</Typography>
      </div>
      <div className={classes.messageBox}>
        {eventState.map((event, index) => (
          <Typography key={index} style={{ marginLeft: "30px" }}>
            {event}
          </Typography>
        ))}
      </div>
      <TextField
        label="Topic"
        onChange={event => setAuthState(event.target.value)}
        variant="outlined"
        size="small"
        className={classes.addressForm}
      />
      <TextField
        label="Message"
        onChange={event => setAuthState(event.target.value)}
        variant="outlined"
        size="small"
        className={classes.addressForm}
      />
      <IconButton
        className={classes.messageButton}
        onClick={handleSubscription}
      >
        <SendIcon />
      </IconButton>
      <IconButton />
    </div>
  );
};
// -----------------------------

// -----------------------------
export default Chatting;
// -----------------------------
