import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import LightBulb from "./LightBulb";
import Box from "./Box";
import OrbitControls from "./OrbitControls";
import Draggable from "./Draggable";
import css from "./Scene.module.css";

export default function Scene() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />        '
        <Draggable>
            <Box rotateX={3} rotateY={0.2} />
        </Draggable>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
