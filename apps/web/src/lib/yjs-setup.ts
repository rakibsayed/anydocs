import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

export const ydoc = new Y.Doc();

// Initialize WebSocket provider (connect to backend later)
export const provider = new WebsocketProvider(
  "ws://localhost:1234", // Replace with your backend URL
  "doc-editor-room",
  ydoc
);