import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import TorusKnot from "../shapes/TorusKnot";

const Scene = () => {
    const directionalLightRef = useRef()
  
    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");
    return (
      <>
        <ambientLight intensity={0.1}/>
        <directionalLight position={[0, 0, 2]} intensity={0.5} ref={directionalLightRef}/>
        {/* <group position={[0, -1, 0]}>
          <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]}/>
          <Cube position={[-1, 0, 0]} color={"red"} size={[1, 1, 1]}/>
          <Cube position={[-1, 2, 0]} color={"yellow"} size={[1, 1, 1]}/>
          <Cube position={[1, 2, 0]} color={"blue"} size={[1, 1, 1]}/>
        </group> */}
        {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"red"} />
        <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"red"}/>
        <Torus position={[2, 0, 0]} size={[0.5, 0.1, 30, 30]} color={"blue"} /> */}
        <TorusKnot position={[0, 0, 0]} size={[1, 0.1, 1000, 50]} color={"yellow"} />
        <OrbitControls enableZoom={false}  />
      </>
    )
}

export default Scene;