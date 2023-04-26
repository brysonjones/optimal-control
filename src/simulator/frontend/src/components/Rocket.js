import {React, useMemo} from "react";
import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

function Rocket(props) {
  var fuselage = new THREE.CylinderGeometry(1, 1, 10, 32);
  fuselage.translate(0, 5.5, 0);
  var tip = new THREE.ConeGeometry(1, 2, 32);
  tip.translate(0, 11.5, 0);
  var gimbal =new THREE.ConeGeometry(1, 1, 32);
  gimbal.translate(0, 0.5, 0);
  var merged = mergeBufferGeometries([fuselage, tip, gimbal]);

  return (
    <mesh {...props} geometry={merged} recieveShadow={true} castShadow>
        <meshPhysicalMaterial  color={"white"} />
    </mesh>
  );
}
export default Rocket;