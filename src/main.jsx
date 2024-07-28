import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Experience from "./Experience";
import Loader from "./Loader";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    </Canvas>
  </React.StrictMode>
);
