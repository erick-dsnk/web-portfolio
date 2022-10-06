import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Brain(): JSX.Element {
  const { nodes, materials } = useGLTF("/brain.gltf");
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        //@ts-ignore
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
      />
      <mesh
        //@ts-ignore
        geometry={nodes.Object_3.geometry}
        material={materials["Scene_-_Root"]}
      />
      <mesh
        //@ts-ignore
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
      />
      <mesh
        //@ts-ignore
        geometry={nodes.Object_5.geometry}
        material={materials["Scene_-_Root"]}
      />
      <mesh
        //@ts-ignore
        geometry={nodes.Object_6.geometry}
        material={materials["Scene_-_Root"]}
      />
    </group>
  );
}

useGLTF.preload("/brain.gltf");
