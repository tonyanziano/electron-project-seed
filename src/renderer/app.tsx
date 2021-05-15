import React from "react";

type AppProps = {};
export const App: React.FC<AppProps> = (_props) => {
  return (
    <div>
      <h1>Electron Project Seed</h1>
      <label htmlFor="help-links">Some links to help you get started:</label>
      <ul id="help-links">
        <li>
          <a href="https://www.electronjs.org/docs/tutorial/quick-start">
            ElectronJS Quick Start Guide
          </a>
        </li>
        <li>
          <a href="https://www.electronjs.org/docs">ElectronJS Documentation</a>
        </li>
        <li>
          <a href="https://www.electronforge.io/">
            Electron Forge (Application Packaging)
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/docs/getting-started.html">
            ReactJS Documentation
          </a>
        </li>
        <li>
          <a href="https://nodejs.org/en/docs/">NodeJS Documentation</a>
        </li>
      </ul>
      <span>
        Created by{" "}
        <a href="https://github.com/tonyanziano" target="_blank">
          @tonyanziano
        </a>{" "}
        --{" "}
        <a href="https://tonyanziano.com" target="_blank">
          tonyanziano.com
        </a>
      </span>
    </div>
  );
};
