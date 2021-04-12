import React from "react";
import ReactDOM from "react-dom";
import { createFeatureHub } from "@feature-hub/core";
import { defineExternals, loadAmdModule } from "@feature-hub/module-loader-amd";
import { FeatureHubContextProvider } from "@feature-hub/react";
import { FeatureAppLoader } from "@feature-hub/react";

let resp;

let loadAMd = (async () => {
  resp = await loadAmdModule("http://localhost:3004/myFeatureAppService.js");
  console.log("resP", resp);
  return resp.__useDefault.default;
})();

// let loadAMd = loadAmdModule(
//   "http://localhost:3004/myFeatureAppService.js"
// ).then((item) => {
//   console.log("Resp", item);
//   return item.__useDefault;
// });

console.log("loadAMd", loadAMd);
defineExternals({
  react: React,
});

const { featureAppManager } = createFeatureHub("test:container-integrator", {
  featureServiceDefinitions: [loadAMd],
  moduleLoader: loadAmdModule,
  providedExternals: { react: "16.8.6", "@feature-hub/react": "2.8.1" },
});

ReactDOM.render(
  <FeatureHubContextProvider value={{ featureAppManager }}>
    <FeatureAppLoader
      featureAppId="test:hello-container"
      src="http://localhost:3004/myFeatureApp.js"
    />
  </FeatureHubContextProvider>,
  document.getElementById("root")
);
