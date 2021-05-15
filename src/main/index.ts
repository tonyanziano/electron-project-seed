import { app, BrowserWindow, shell } from "electron";
import { resolve } from "path";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({ title: "Electron Project Seed" });

  // open links using the user's default browser
  mainWindow.webContents.on("will-navigate", (ev, url) => {
    // handling links without target="_blank"
    ev.preventDefault();
    shell.openExternal(url);
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    // links with target="_blank"
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  // load the client
  mainWindow.loadFile(resolve(__dirname, "./index.html"));
});
