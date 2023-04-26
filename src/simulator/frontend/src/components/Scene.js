
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import LightBulb from "./LightBulb";
import Box from "./Box";
import OrbitControls from "./OrbitControls";
import Draggable from "./Draggable";
import css from "./Scene.module.css";
import { Vector3 } from "three";

export default function Scene() {
  const [x, setX] = useState(0);

  useEffect(() => {
    setInterval(() => {
      getData()
    }, 100);
  },[]);

  const getData = function() {
    fetch('http://localhost:8080/data')
    .then(response => response.json())
    .then(data =>  {
      setX(data.x);
      console.log(data.x);
    });
  }

  return (
    <React.Fragment>
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
          <Box rotateX={0} rotateY={0} position={[x, 0, 0]}/>
          <OrbitControls />
          <Floor position={[0, -0.1, 0]} />
        </Canvas>
      </div>
      {/* TODO: add container for data visualization */}
      <div>
        <span className={css.data}>X-Position (m): {x}</span>
      </div>
    </React.Fragment>
  );
}
