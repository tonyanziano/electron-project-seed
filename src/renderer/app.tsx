import React from "react";

import {
  container,
  header,
  helpLink,
  footer,
  footerLink,
  linkContainer,
} from "./styles/app";

type AppProps = {};
export const App: React.FC<AppProps> = (_props) => {
  return (
    <div className={container}>
      <h1 className={header}>Electron Project Seed</h1>
      <div className={linkContainer}>
        <label htmlFor="help-links">Some links to help you get started:</label>
        <ul id="help-links">
          <li className={helpLink}>
            <a href="https://www.electronjs.org/docs/tutorial/quick-start">
              ElectronJS Quick Start Guide
            </a>
          </li>
          <li className={helpLink}>
            <a href="https://www.electronjs.org/docs">
              ElectronJS Documentation
            </a>
          </li>
          <li className={helpLink}>
            <a href="https://www.electronforge.io/">
              Electron Forge (Application Packaging)
            </a>
          </li>
          <li className={helpLink}>
            <a href="https://reactjs.org/docs/getting-started.html">
              ReactJS Documentation
            </a>
          </li>
          <li className={helpLink}>
            <a href="https://nodejs.org/en/docs/">NodeJS Documentation</a>
          </li>
        </ul>
      </div>
      <span className={footer}>
        Created by{" "}
        <a
          className={footerLink}
          href="https://github.com/tonyanziano"
          target="_blank"
        >
          @tonyanziano
        </a>{" "}
        --{" "}
        <a
          className={footerLink}
          href="https://tonyanziano.com"
          target="_blank"
        >
          tonyanziano.com
        </a>
      </span>
    </div>
  );
};
