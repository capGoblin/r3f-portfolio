import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
