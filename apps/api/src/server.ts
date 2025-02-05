import express from "express";
import { WebSocketServer } from "ws";
import * as Y from "yjs";

const app = express();
const port = 4000;

// Store multiple documents in memory
const docs: Record<string, Y.Doc> = {};

const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection established.");
  ws.on("message", (message) => {
    const { docId, update } = JSON.parse(message.toString());

    if (!docs[docId]) {
      docs[docId] = new Y.Doc();
    }

    Y.applyUpdate(docs[docId], new Uint8Array(update));

    // Broadcast update to all clients except sender
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ docId, update }));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected.");
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
