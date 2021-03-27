import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createFeatureHub } from "@feature-hub/core";
import { defineExternals, loadAmdModule } from "@feature-hub/module-loader-amd";
import { FeatureHubContextProvider } from "@feature-hub/react";
import { FeatureAppLoader } from "@feature-hub/react";

defineExternals({
  react: React,
});
const { featureAppManager } = createFeatureHub("test:container-integrator", {
  featureServiceDefinitions: [],
  moduleLoader: loadAmdModule,
  providedExternals: { react: "16.8.6" },
});

ReactDOM.render(
  <FeatureHubContextProvider value={{ featureAppManager }}>
    <FeatureAppLoader
      featureAppId="test:hello-component"
      src="http://localhost:3004/myFeatureApp.js"
    />
  </FeatureHubContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
