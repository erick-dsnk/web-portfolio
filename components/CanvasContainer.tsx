import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Brain from "./Brain";

export default function CanvasContainer(): JSX.Element {
  const [ isMobile, setIsMobile ] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

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
            zoom={isMobile ? 0.5 : 0.8}
          />
          <OrbitControls
            autoRotate
            autoRotateSpeed={4}
            enableZoom={process.env.NEXT_PUBLIC_DEV === "true" ? true : false}
            minZoom={0.5}
            maxZoom={1.4}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
    
          <directionalLight color="white" position={[0, 10, 0]} />
        </Canvas>
    </div>
  )
}