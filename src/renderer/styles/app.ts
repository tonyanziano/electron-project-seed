import { glitzClient } from "./glitzClient";

export const container = glitzClient.injectStyle({
  display: "flex",
  flexFlow: "column nowrap",
  height: "100%",
  padding: { x: 40, y: 0 },
});

export const header = glitzClient.injectStyle({
  textAlign: "center",
});

export const linkContainer = glitzClient.injectStyle({
  borderRadius: 8,
  backgroundColor: "#C0C9D2",
  padding: { x: 16, y: 16 },
});

export const helpLink = glitzClient.injectStyle({
  padding: { x: 0, y: 4 },
});

export const footer = glitzClient.injectStyle({
  display: "flex",
  flexFlow: "row nowrap",
  marginTop: "auto",
  marginBottom: 16,
});

export const footerLink = glitzClient.injectStyle({
  padding: { x: 4, y: 0 },
});
