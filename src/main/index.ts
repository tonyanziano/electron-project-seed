import { app, BrowserWindow } from "electron";
import { resolve } from "path";

app.on("ready", () => {
  // load the client
  const mainWindow = new BrowserWindow({ title: "Electron Project Seed" });
  mainWindow.loadFile(resolve(__dirname, "./index.html"));
});
