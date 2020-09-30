import io from "socket.io-client";
const Socket = io(
  "https://lirenyeo-react-group-chat-socket-io-server-1.glitch.me/"
);

export default Socket;

// import Socket from '../utils/socket'

// Socket.on(...)
