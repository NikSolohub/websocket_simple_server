import { WebSocketServer } from "ws";

// Server port 
const port = 8181;

// Init ws server 
const wss = new WebSocketServer({port})

// New connection event
wss.on('connection', (ws)=>{
    // Handles new connections

        ws.on('message', (data)=>{
            console.log(`Message received: ${data}`)

            ws.send(`Message was sent: ${data}`)

        })

})