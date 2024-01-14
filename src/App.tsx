import { OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three"; // Import the entire Three.js module

// Import the GLTFLoader as a separate module
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function App() {
  const gltf = useLoader(GLTFLoader, "/models/LivingRoom.glb");

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive object={gltf.scene} position={[0, 1, 0]} castShadow />
      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
    </Canvas>
  );
}

export default App;
