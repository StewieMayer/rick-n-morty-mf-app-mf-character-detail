import React from "react";
import ReactDom from "react-dom/client";
import "@styles/index.css"

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <div>Character Detail</div>
  </React.StrictMode>
);

