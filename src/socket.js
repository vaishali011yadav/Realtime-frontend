import { io } from "socket.io-client";

const socket = io('https://realtime-backend-rouge.vercel.app/', {
    reconnection: false
});

export default socket;