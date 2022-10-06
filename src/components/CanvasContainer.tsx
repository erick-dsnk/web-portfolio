import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Brain from "./Brain";

type CanvasContainerProps = {
  isMobile: boolean;
};

export default function CanvasContainer(
  props: CanvasContainerProps
): JSX.Element {
  return (
    <div className="fade-in h-full w-full">
      <Canvas shadows={true}>
        <Suspense fallback={null}>
          <Brain />
        </Suspense>

        <PerspectiveCamera
          makeDefault
          position={[250, 150, 0]}
          fov={60}
          zoom={props.isMobile ? 0.5 : 0.8}
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enableZoom={(process.env.REACT_APP_DEV === "true") ? true : false}
          minZoom={0.5}
          maxZoom={1.4}
        />

        <directionalLight color="white" position={[0, 10, 0]} />
      </Canvas>
    </div>
  );
}
