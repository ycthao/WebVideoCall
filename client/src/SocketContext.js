import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { SettingsSystemDaydreamRounded } from "@material-ui/icons";

const SocketContext = createContext();

const socket = io("http://localhost:5000");

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});

  const myvideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      setStream(currentStream);

      myvideo.current.srcObject = currentStream;
    });

    socket.io("me", (id) => setMe(id));

    socket.on("calluser", ({ from, name: callName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callName, signal });
    });
  }, []);

  const answerCall = () => {};

  const callUser = () => {};

  const leaveCall = () => {};
};
